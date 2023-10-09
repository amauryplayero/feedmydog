import React, {useRef, useEffect} from 'react';
import { CommentsModel } from '../Models/Comments';

const Comment: React.FC<CommentsModel> = ({ name, content, date, isNewComment }) => {
  const scrollableDiv = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    scrollableDiv.current?.scrollIntoView(false)

  },[])
  return (
        <div ref={scrollableDiv} className="flex flex-col bg-gray mb-6 p-2 last:mb-0 rounded">
            {isNewComment && <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600"></span>
            </span>}
            <p className=" text-base text-black">
            <b>{name}</b> <span className='text-sm'>fed Pattie on</span>
            </p>
            <p className="text-sm text-black">
            {date} 
            </p>

            <p className="text-lg text-black">
            <q>{content}</q>
            </p>
        </div>
  );
}

export default Comment;