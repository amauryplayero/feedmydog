import React from 'react';
import { CommentsModel } from '../Models/Comments';

interface CommentSectionProps {
  // Add any props you need for this component
  comments: CommentsModel[] | null
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  
  return (
    <div className="component-section">
      {comments && comments.map((comment, i)=>{
        return (
          <div key={i}>
            {comment.name}
          </div>
          )
      })}
      {/* Your component content goes here */}
    </div>
  );
}

export default CommentSection;