import React, { useState } from 'react';
import { CommentsModel } from '../Models/Comments';
import Comment from './Comment';
import { CommentsService } from '../../../api';
interface CommentSectionProps {
  // Add any props you need for this component
  comments: CommentsModel[] | null
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {

  const [postedComment, setPostedComment] = useState<boolean>(false)

  const handleSubmitComment = (e:any) =>{
    e.preventDefault()
    const name = e.target[0].value;
    const content = e.target[1].value;
    CommentsService.postComment(name, content).then(()=>setPostedComment(true))
    .catch(err=>console.log(err))
  }
  
  return (
    <div className="h-full flex flex-col justify-between">
        <div>
          {comments && comments.map((comment, i)=>{
            const {name, content, date} = comment;
            return (
                  <Comment key={i} name={name} content={content} date={date}/>
              )
          })}
        </div>
      <div className='border border-red h-1/3'>
        <form onSubmit={(e)=>{handleSubmitComment(e)}}>
          <textarea name="name" className="mb-4 text-black" placeholder='name'></textarea>
          <textarea name="content" className="h-1/2 align-top w-full text-black" placeholder='comment'></textarea>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;