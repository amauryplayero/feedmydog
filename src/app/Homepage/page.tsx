'use client';
import React, {useEffect, useState}from 'react'
import { CommentsService, InteractionService } from '../../../api'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { CommentsModel } from '../Models/Comments'
import CommentSection from '../Components/CommentSection'
import MessageInput from '../Containers/MessageInput'
import WebcamStream from '../Components/WebcamStream';
import { StreamService } from '../../../api';
import FeedButton from '../Components/FeedButton'
import isFeedingOkay from '../Helpers/isFeedingOkay';



const Homepage:React.FC = () => {
  const [data, setData] = useState<CommentsModel[] | null>(null);
  const [editingComment, setEditingComment] = useState<boolean>(false);
  const [interactionCompleted, setInteractionCompleted] = useState<boolean>(false);
  const [isStreamAvailable, setIsStreamAvailable] = useState<boolean>(false);
  const [feedingIsOkay, setFeedingIsOkay] = useState<boolean>(false)
  const url:string = process.env.NEXT_PUBLIC_BASE_URL!

  const getData = () =>{
    CommentsService.getComments().then(response=>{setData(response)})
  }

  const getStreamData = () =>{
    fetch('http://localhost:3001/stream').then(res=>{if(res.status=== 404 || res.status=== 400){throw new Error} else{setIsStreamAvailable(true)}}).catch(()=>{setIsStreamAvailable(false)})
    // StreamService.checkStream(url).then((answer)=>setIsStreamAvailable(answer)).catch(()=>{setIsStreamAvailable(false)})
  }

  const getFeedingData = ()=>{
    const time = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
  
    InteractionService.lastTimePattyAte().then((res: string)=>{
      const lastMealDate = res
      const feedingRes = isFeedingOkay(time, lastMealDate)
      setFeedingIsOkay(feedingRes)})
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getData()
    getStreamData()
    getFeedingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[interactionCompleted])

  const handleClick = () =>{
    setEditingComment(true)
  }

  return (
  <>
  
    <NavBar/>
    
    <div className="flex-col md:flex-row flex justify-between pl-6 pr-6 pt-8 h-[calc(100vh-80px)]" >
  
        <div className="h-fit md:h-full border-purple w-full md:w-[55%] ">
          <div className="relative pb-[56.25%] overflow-hidden rounded-2xl">
  
          <WebcamStream isStreamAvailable={isStreamAvailable} url={url}/>
          video stream 
          </div>

          <div className="hidden md:flex w-full justify-center my-8 md:mt-8 md:my-0">
            <FeedButton handleFeedClick={handleClick} feedingIsOkay={feedingIsOkay}/>
          </div>
        </div>

        <div className="h-[30%] md:h-auto w-full md:w-[42%] pt-5 md:pt-0 over-flow-hidden grow md:grow-0">
          <CommentSection comments={data}/>
        </div>
          <div className="md:hidden w-full flex justify-center mt-6 mb-10 md:mt-8 md:my-0 ">
            <FeedButton handleFeedClick={handleClick} feedingIsOkay={feedingIsOkay}/>
          </div>

        {editingComment && <MessageInput setEditingComment={setEditingComment} setInteractionCompleted={setInteractionCompleted}/>}

    </div>



    <Footer editingComment = {editingComment}/>
  </>

  )
}

export default Homepage