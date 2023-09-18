import React from 'react';
import { CommentsModel } from '../Models/Comments';

const Comment: React.FC<CommentsModel> = ({ name, content, date }) => {
  return (
        <div className="flex flex-col bg-pink-600 mb-6">
            <p className="font-bold text-xl">
            {name}
            </p>
            <p className="text-sm">
            {date}
            </p>

            <p className="text-base">
            {content}
            </p>
        </div>
  );
}

export default Comment;