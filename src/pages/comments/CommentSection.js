
import React, { useState } from 'react';
// import Comment from './Comment';
import Comment from './Comments';


const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [commentData, setCommentData] = useState(comments);

  const handleCommentSubmit = () => {
    // You can add code here to handle the submission of a new comment.
    // For simplicity, we'll just add the new comment to the existing data.
    const newCommentObj = {
      id: commentData.length + 1,
      text: newComment,
    };
    setCommentData([...commentData, newCommentObj]);
    setNewComment(''); // Clear the input field
  };

  return (
    <div>
      {commentData.map(comment => (
        <Comment key={comment.id} comment={comment} />
     ))}
    

      {/* Comment Form */}
      <div className="mt-4">
        <input
          type="text"
          className="w-full border rounded p-2"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white p-2 rounded"
          onClick={handleCommentSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentSection;

