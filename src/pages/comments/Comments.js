
import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [showReplies, setShowReplies] = useState(true); // Initially show replies


  const handleReplySubmit = () => {
    // You can add code here to handle the submission of a new reply.
    // For simplicity, we'll just add the new reply to the existing data.
    const newReplyObj = {
      id: (comment.replies || []).length + 1,
      text: newReply,
    };

    if (!comment.replies) {
      comment.replies = [];
    }

    comment.replies.push(newReplyObj);
    setNewReply("");
    setShowReplyForm(false);
    setShowReplies(true); // After submitting a reply, show replies

  };

  return (
    <div className="ml-4 mt-4">
        
      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-3">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="none"
          >
            <rect width={40} height={40} rx={20} fill="#D3DCCF" />
            <rect width={40} height={40} rx={20} fill="url(#pattern0)" />
            <g opacity="0.08">
              <rect
                x="0.375"
                y="0.375"
                width="39.25"
                height="39.25"
                rx="19.625"
                stroke="#101828"
                strokeWidth="0.75"
              />
            </g>
            <rect
              x="29.25"
              y="29.25"
              width="11.5"
              height="11.5"
              rx="5.75"
              fill="#17B26A"
            />
            <rect
              x="29.25"
              y="29.25"
              width="11.5"
              height="11.5"
              rx="5.75"
              stroke="white"
              strokeWidth="1.5"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              />
              <image id="image0_937_2448" width={640} height={640} />
            </defs>
          </svg>
          <div className="flex flex-col justify-start items-start flex-grow gap-1.5">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow w-full text-sm font-medium text-left text-[#344054]">
                Joshua Wilson
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">
                Today 2:20pm
              </p>
            </div>

            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
          <p className="flex-grow w-full text-xs text-left text-[#101828]">
            {comment.text}
          </p>
        </div>

          </div>
        </div>

      </div>
      
      <div className="bg-white p-2 rounded-md shadow-sm">
       
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0086c9]"
        >
          {showReplyForm ? "Cancel" : "Reply"}
        </button>
        {showReplyForm && (
          <div className="mt-2">
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Add a reply..."
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-700 text-white p-2 rounded"
              onClick={handleReplySubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      
      {comment.replies &&
        comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} />
        ))}
    </div>
  );
};

export default Comment;
