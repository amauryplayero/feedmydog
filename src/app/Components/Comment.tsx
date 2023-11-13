import React, {useRef, useEffect} from 'react';
import { CommentsModel } from '../Models/Comments';
import videoIcon from '../../../public/assets/video-icon.png'
import Image from 'next/image'

const Comment: React.FC<CommentsModel> = ({ name, content, date, isNewComment, videoUrl }) => {
  const scrollableDiv = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    scrollableDiv.current?.scrollIntoView(false)

  },[])
  return (
        <div ref={scrollableDiv} className="flex  bg-[#ededed] mb-6 p-2 last:mb-0 rounded justify-between">

          <div>
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

          {videoUrl && <div className="flex flex-col justify-center">
            <button className='relative right-3'>
              <Image className="relative w-10 md:w-10" src={videoIcon} alt="Video icon"></Image>
            </button>
          </div>}

        </div>
  );
}

export default Comment;