'use client';
import React, { useState } from 'react';
import { CommentsModel } from '../Models/Comments';
import { CommentsService, InteractionService } from '../../../api';
import pattie from '../../../public/assets/pattie.png'
import Image from 'next/image'
type editingComment = {
    setEditingComment(value:boolean):void
    setInteractionCompleted(value:boolean):void
}


const MessageInput: React.FC<editingComment> = ({ setEditingComment, setInteractionCompleted }) => {

  const [postedComment, setPostedComment] = useState<boolean>(false)
  

  const handleSubmitComment = (e:any) =>{
    e.preventDefault()
    const name = e.target[0].value;
    const content = e.target[1].value;
    console.log(name, content)
    CommentsService.postComment(name, content).then(()=>{
      // show notification that it went through
    
      InteractionService.moveServo()
      .then(() => {  
        console.log('moving servo function')
      })
      .catch(error => console.error('Error fetching data:', error));
    })
    .catch(err=>console.log(err))
    .finally(()=>{
      setEditingComment(false)
      setInteractionCompleted(true)
    })
    
  }
  
  return (

    <div onClick={()=>setEditingComment(false)}className="absolute top-0 left-0 h-screen w-screen bg-black/75">
        <div onClick={e => e.stopPropagation()} className=' bg-white border border-gray rounded p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20em] w-80'>
            <button className="absolute right-4" onClick={()=>setEditingComment(false)}>close</button>
            <form id="message-form" className="h-full flex flex-col" onSubmit={(e)=>{handleSubmitComment(e)}}>
              <div className="flex justify-center h-0">
                <div className="absolute pointer-events-none">

                <Image className="w-28 relative bottom-24 pointer-events-none" src={pattie} alt="patty melt" height={40} width={200}></Image>
                </div>
                {/* <img src={pattie} alt="pattie"></img> */}
              </div>

              <label className="flex flex-col">
                <span className="after:content-['*'] text-black after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Name
                </span>
                <input required type="name" name="name" className="w-full text-black mt-1 px-3 py-2 bg-white border shadow-sm border-pink-600 placeholder-gray focus:outline-none focus:border-blue focus:ring-blue block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your name" />
              </label>

              <label className="flex flex-col h-full pb-3 mt-4">
                <span className="after:content-['*'] text-black after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Message
                </span>
                <textarea required name="message" className="mt-1 h-full px-3 py-2 bg-white border text-black shadow-sm border-pink-600 placeholder-gray focus:outline-none focus:border-blue focus:ring-blue block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Leave a message for Patty!" />
              </label>
  {/*             
              <textarea name="name" className="mb-4 text-black h-6 rounded" placeholder='name'></textarea>
              <textarea name="content" className="h-1/2 align-top w-full text-black" placeholder='comment'></textarea> */}

              <div className='flex justify-center'>
                  <button type='submit' className="bg-pink-600 rounded-full px-4 py-1.5">feed now!</button>
              </div>
            </form>
        </div>
    </div> 
  );
}

export default MessageInput;