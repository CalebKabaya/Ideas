import { useState, useRef, useEffect } from 'react';
import Action from './Action';
import { ReactComponent as DownArrow } from './assets/down-arrow.svg';
import { ReactComponent as UpArrow } from './assets/up-arrow.svg';

const NewComment = ({ handleInsertNode, handleEditNode, handleDeleteNode, comment }) => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput('');
    }

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <form className="flex flex-col w-full">
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[74px] relative w-full ">
        <div className="flex flex-col justify-start items-start w-full h-[74px] absolute left-0 top-0 gap-1.5 ">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1.5">
            <div className="flex justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2 px-3.5 py-3">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  w-full">
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
              <rect x="29.25" y="29.25" width="11.5" height="11.5" rx="5.75" fill="#17B26A" />
              <rect x="29.25" y="29.25" width="11.5" height="11.5" rx="5.75" stroke="white" strokeWidth="1.5" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_753_1800" transform="scale(0.0015625)" />
                </pattern>
                <image id="image0_753_1800" width={640} height={640} />
              </defs>
            </svg>
            <div className="flex flex-col justify-start items-start flex-grow gap-1.5 w-full ">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 w-full">
                <p className="flex-grow w-full text-sm font-medium text-left text-[#344054]">Joshua Wilson</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
              </div>

              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                <p className="flex-grow  text-sm text-left text-[#101828]">
                  Hey Paul, can you please review the latest design when you can?
                </p>
              </div>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0086c9]">Reply</p>
        </div>
      </div>

      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative  w-full">
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
              <rect x="29.25" y="29.25" width="11.5" height="11.5" rx="5.75" fill="#17B26A" />
              <rect x="29.25" y="29.25" width="11.5" height="11.5" rx="5.75" stroke="white" strokeWidth="1.5" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_753_1800" transform="scale(0.0015625)" />
                </pattern>
                <image id="image0_753_1800" width={640} height={640} />
              </defs>
            </svg>
            <div className="flex flex-col justify-start items-start flex-grow gap-1.5 w-full ">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 w-full">
                <p className="flex-grow w-full text-sm font-medium text-left text-[#344054]">Joshua Wilson</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
              </div>

              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                <p className="flex-grow  text-sm text-left text-[#101828]">
                  Hey Paul, can you please review the latest design when you can?
                </p>
              </div>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0086c9]">Reply</p>
        </div>
      </div>
    </form>
  );
};

export default NewComment;
