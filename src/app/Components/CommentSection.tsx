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
    <div  className="h-full md:h-3/4 flex flex-col justify-between bg-gray-light p-6 rounded-2xl overflow-scroll">
        <div className="relative bottom-0 left-0">
          {comments && comments.map((comment, i)=>{
            const {name, content, date} = comment;
            const originalDate = new Date(date);
            // const formattedDate = originalDate.toLocaleString();
            const formattedDate = formatDateString(originalDate.toLocaleDateString());

            const present = new Date().toLocaleString()
            function isCommentNew (dateString1:string, dateString2:string) {
              // take this function out as a helper function 
              function getTimeDifference() {
                const date1 = new Date(dateString1);
                const date2 = new Date(dateString2);
            
                const timeDifference = Math.abs(date1.getTime() - date2.getTime());
            
                const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
                return {hours:hours,
                        minutes:minutes,
                        second:seconds}
              }
              const timeDifference = getTimeDifference()
              if(timeDifference.hours < 1 && timeDifference.minutes < 3){
                return true
              }
              return false
            }
            let isNewComment = false
            if(i ===0){
              isNewComment = isCommentNew(present, formattedDate);
            }
            console.log(isNewComment)

            return (
                  <Comment key={i} name={name} content={content} date={formattedDate} isNewComment={isNewComment}/>
              )
          })}
        </div>
    </div>
  );
}

export default CommentSection;