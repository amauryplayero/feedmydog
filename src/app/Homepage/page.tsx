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



const Homepage:React.FC = () => {
  const [data, setData] = useState<CommentsModel[] | null>(null);
  const [editingComment, setEditingComment] = useState<boolean>(false);
  const [interactionCompleted, setInteractionCompleted] = useState<boolean>(false);
  const [isFeedingTimeOk, setIsFeedingTimeOk] = useState<boolean>(false);
  const [isStreamAvailable, setIsStreamAvailable] = useState(false);
  const url:string = process.env.NEXT_PUBLIC_BASE_URL!

  // const isMobile = isMobile()

  const getData = () =>{
    CommentsService.getComments().then(response=>{return console.log(response), setData(response)})
  }
  const getTimeData = () =>{
    InteractionService.isItFeedingTime().then(response=>{return console.log(response), setIsFeedingTimeOk(response)}).catch(err=>console.log(err))
  }
  const getStreamData = () =>{
    StreamService.checkStream(url).then(answer=>setIsStreamAvailable(answer)).catch(()=>{setIsStreamAvailable(false)})
  }
  useEffect(()=>{
    getData()
    getTimeData()
    getStreamData()
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
            {isFeedingTimeOk ? <button className="hover:scale-110 font-semibold transition ease-in-out bg-purple px-12 py-4 bg-pink-600 rounded-full " onClick={handleClick}>FEED MY DOG</button> : <button className="font-semibold transition ease-in-out bg-purple px-12 py-4 bg-pink-300 rounded-full " >not feeding time yet</button>}
          </div>
        </div>

        <div className="h-[30%] md:h-auto w-full md:w-[42%] pt-5 md:pt-0 over-flow-hidden grow md:grow-0">
          <CommentSection comments={data}/>
        </div>
          <div className="md:hidden w-full flex justify-center mt-6 mb-10 md:mt-8 md:my-0 ">
              <button className="hover:scale-110 transition ease-in-out bg-purple px-12 py-4 bg-pink-600 rounded-full w-4/5 font-bold" onClick={handleClick}>FEED MY DOG</button>
          </div>

        {editingComment && <MessageInput setEditingComment={setEditingComment} setInteractionCompleted={setInteractionCompleted}/>}

    </div>



    <Footer editingComment = {editingComment}/>
  </>

  )
}

export default Homepage