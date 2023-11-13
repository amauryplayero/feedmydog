import React, { useState, useRef, useEffect } from 'react';
import { CommentsModel } from '../Models/Comments';
import Comment from './Comment';
import { CommentsService } from '../../../api';
interface CommentSectionProps {
  // Add any props you need for this component
  comments: CommentsModel[] | null
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {

  const [postedComment, setPostedComment] = useState<boolean>(false)


  function formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    const formattedDate = `${month}/${day} at ${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}${ampm}`;
    
    return formattedDate;
}
  
  return (
    <div  className="h-full md:h-3/4 flex flex-col justify-between bg-gray-light p-6 rounded-2xl overflow-scroll border-4 border-gray">
        <div className="relative bottom-0 left-0">
          {comments && comments.map((comment, i)=>{
            const {name, content, date, videoUrl} = comment;
            const originalDate = new Date(date);
            return (
                  <Comment key={i} name={name} content={content} date={date} videoUrl={videoUrl}/>
              )
          })}
        </div>
    </div>
  );
}

export default CommentSection;