import React, {useEffect, useState}from 'react'
import { CommentsService } from '../../../api'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { CommentsModel } from '../Models/Comments'
import CommentSection from '../Components/CommentSection'


const HomePage:React.FC = () => {
  const [data, setData] = useState<CommentsModel[] | null>(null);

  const getData = () =>{
    CommentsService.getComments().then(response=>{return console.log(response),setData(response)})
  }
  useEffect(()=>{
    getData()
  },[])
  return (
  <>
  
    <NavBar/>
    
    <div className="flex-col md:flex-row h-[80vh] flex justify-between pl-6 pr-6" >
  
        <div className="h-full border border-purple w-full md:w-[55%] ">
        <iframe src="https://player.twitch.tv/?channel=oliwisdelmar&parent=localhost" height="378" width="620"></iframe>
          <div className="sm:[60%] h-[60%] border border-red">
          video stream 
          
          </div>

          <div className="">
            watch repetitions
          </div>
        </div>

        <div className="border border-red w-full md:w-[35%]">
          <CommentSection comments={data}/>
        </div>

    </div>

    <Footer/>
  </>

  )
}

export default HomePage