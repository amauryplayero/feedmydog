import React, {useEffect, useState}from 'react'
import { CommentsService, InteractionService } from '../../../api'
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

  const handleClick = () =>{
    InteractionService.moveServo().then(res=>console.log('servo moved'))
  }
  
  return (
  <>
  
    <NavBar/>
    
    <div className="flex-col md:flex-row h-[80vh] flex justify-between pl-6 pr-6" >
  
        <div className="h-full border border-purple w-full md:w-[55%] ">
        <img src="http://3.85.106.44:3001/stream" height="378" width="620"></img>
          <div className="sm:[60%] h-[60%] border border-red">
          video stream 
          
          </div>

          <div className="">
            watch repetitions
          </div>
        </div>
        <button onClick={handleClick}>FEED MY DOG</button>

        <div className="border border-red w-full md:w-[35%]">
          <CommentSection comments={data}/>
        </div>

    </div>

    <Footer/>
  </>

  )
}

export default HomePage