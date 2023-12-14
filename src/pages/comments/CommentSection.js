import { useState, useRef, useEffect } from 'react';
import Action from './Action';
import { authentication } from 'src/pages/extentionsfunctions';
import { useParams } from 'react-router-dom';

import { ReactComponent as DownArrow } from './assets/down-arrow.svg';
import { ReactComponent as UpArrow } from './assets/up-arrow.svg';
import Avatar1 from '../avartas/Avatar1.png';

const Comment = ({ handleInsertNode, handleEditNode, handleDeleteNode, comment, userName, userProfileImage }) => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);
  const [accessToken, setAccessToken] = useState();
  const { ideaId } = useParams();

  const [usersComments, setComments] = useState([]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await authentication();
        setAccessToken(res);
      } catch (error) {
        console.error('Error while getting access token:', error);
      }
    };

    getAccessToken();
  }, []); // No dependencies, it should only run once
  const onAddComment = async () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput('');
    }

    try {
      const res = await authentication(); // Get access token
      setAccessToken(res); // Set access token

      if (res) {
        const requestOptions = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${res.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ideaId: ideaId,
            comment: input,
          }),
        };

        const response = await fetch('https://developer.britam.com/api/IdeasPortal/SaveIdeaComment', requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API Response:', data);
        // Handle the API response data or update state if required
        // setCommentss(data);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      // Handle the error, show error messages or perform necessary actions
    }

    if (editMode) setEditMode(false);
  };

  useEffect(() => {
    if (accessToken && ideaId) {
      let myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + accessToken.access_token);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(`https://developer.britam.com/api/IdeasPortal/GetCommentsByIdeaId?ideaId=${ideaId}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setComments(data); // Store the data in state
        })
        .catch((error) => console.log('error', error));
    }
  }, [accessToken, ideaId]);

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div>
      <div className={comment.id === 1 ? 'inputContainer' : 'commentContainer'}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />

            <Action className="reply comment" type="Comment" handleClick={onAddComment} />
          </>
        ) : (
          <>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
              <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  w-full">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-3">
                  <img
                    src={userProfileImage}
                    alt={`${userName}'s Profile`}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                    onError={(e) => console.log('Image Error:', e)}
                  />
                  <div className="flex flex-col justify-start items-start flex-grow gap-1.5 w-full ">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 w-full">
                      <p className="flex-grow w-full text-sm font-medium text-left text-[#344054]"> {userName}</p>
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
                    </div>

                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                      <p className="flex-grow  text-sm text-left text-[#101828]">{comment.useR_COMMENT} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
              {editMode ? (
                <>
                  <Action className="reply" type="Save" handleClick={onAddComment} />
                  <Action
                    className="reply"
                    type="Cancel"
                    handleClick={() => {
                      if (inputRef.current) {
                        inputRef.current.value = comment.useR_COMMENT; // Use .value for input elements
                      }
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    type={
                      <>
                        {expand ? <UpArrow width="10px" height="10px" /> : <DownArrow width="10px" height="10px" />}{' '}
                        Reply
                      </>
                    }
                    handleClick={handleNewComment}
                  />
                  <Action
                    className="reply"
                    type="Edit"
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  <Action className="reply" type="Delete" handleClick={handleDelete} />
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer">
            <input type="text" className="inputContainer__input" autoFocus onChange={(e) => setInput(e.target.value)} />
            <Action className="reply" type="Reply" handleClick={onAddComment} />
            <Action
              className="reply"
              type="Cancel"
              handleClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}
            />
          </div>
        )}

        {usersComments.map((fetchedComment) => (
          <Comment
            key={fetchedComment.id}
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={fetchedComment}
            userName="John Doe" // You may adjust the username and userProfileImage props as needed
            userProfileImage={Avatar1}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
{
  /* {commentss.map((comnt, index) => (
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
            <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  w-full">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-3">
                <img
                  src={userProfileImage}
                  alt={`${userName}'s Profile`}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                  onError={(e) => console.log('Image Error:', e)}
                />
                <div className="flex flex-col justify-start items-start flex-grow gap-1.5 w-full ">
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 w-full">
                    <p className="flex-grow w-full text-sm font-medium text-left text-[#344054]"> {comnt.userName}</p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
                  </div>

                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                    <p className="flex-grow  text-sm text-left text-[#101828]">{comnt.useR_COMMENT} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}  */
}
