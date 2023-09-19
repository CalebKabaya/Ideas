import { React, Button } from 'react';
import { Link } from 'react-router-dom';

export default function SingleIdea() {
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate("/dashboard/app")
  // }
  return (
    <div className="w-[1128px] h-[1097px] relative overflow-hidden bg-white">
      <div className="w-[1096px] h-[127px] absolute left-4 top-6">
        <div className="w-[1047px] h-11 absolute left-0 top-0">
          <div className="flex justify-center items-center absolute left-0 top-0 overflow-hidden gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M15.8332 9.99999H4.1665M4.1665 9.99999L9.99984 15.8333M4.1665 9.99999L9.99984 4.16666"
                stroke="#0086C9"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0086c9]">
              {/* <Button
          type="submit"
          onClick={handleClick}

          >
            Back to all ideas
          </Button> */}
              <Link to="/dashboard/app">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0086c9]">
                  Back to all ideas
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-[1096px] absolute left-0 top-[68px] gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1096px] text-3xl font-semibold text-left text-[#101828]">
                Ticket automation
              </p>
            </div>
          </div>
          <svg
            width={1096}
            height={1}
            viewBox="0 0 1096 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M1096 1H0V0H1096V1Z" fill="#EAECF0" />
          </svg>
        </div>
        <div className="flex justify-start items-center absolute left-[916px] top-[52px] gap-4">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-14 w-14 relative rounded-[200px] bg-[#e0e0e0]">
            <div className="self-stretch flex-grow w-14 h-14 relative opacity-[0.08] overflow-hidden rounded-[200px] border-[0.75px] border-[#101828]" />
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">James Maina</p>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">20 Jan 2024</p>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[724px] top-[70px] gap-2">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#0086c9] border border-[#0086c9]"
            style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.16699 17.5C7.93364 17.5 7.81696 17.5 7.72783 17.4546C7.64943 17.4146 7.58569 17.3509 7.54574 17.2725C7.50033 17.1834 7.50033 17.0667 7.50033 16.8333V8.33333H4.16699L10.0003 2.5L15.8337 8.33333H12.5003V16.8333C12.5003 17.0667 12.5003 17.1834 12.4549 17.2725C12.415 17.3509 12.3512 17.4146 12.2728 17.4546C12.1837 17.5 12.067 17.5 11.8337 17.5H8.16699Z"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">Upvote</p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#475467]">123</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[1080px] h-[840px] absolute left-8 top-[175px] gap-8">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-lg font-semibold text-left text-[#101828]">
                Idea overview
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-sm text-left text-[#475467]">
                A overview of the project, goals and outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 p-4 rounded-lg bg-gray-50 border border-[#eaecf0]">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#344054]">
            The automated ticketing system would help to streamline and enhance the management and collaboration
            surrounding innovative concepts and suggestions within an organization or community. This system leverages
            advanced technology to efficiently capture, categorize, prioritize, and track ideas, ensuring that no
            valuable insights are lost and that the best ideas receive the attention they deserve.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base font-medium text-left text-[#101828]">
            Potential Benefits
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base text-left text-[#475467]">
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base text-left text-[#475467]">
              Automation reduces administrative overhead, accelerates idea evaluation, and minimizes manual processes.
            </span>
            <br />
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base text-left text-[#475467]">
              All stakeholders can track the status and progress of ideas, promoting open communication.
            </span>
            <br />
            <span className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base text-left text-[#475467]">
              The platform encourages participation from a diverse range of contributors, fostering a culture of
              innovation.
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base font-medium text-left text-[#101828]">
            Target audience
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1080px] text-base text-left text-[#475467]">
            P&amp;D
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-6 pt-6 pb-5 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1032px] text-lg font-semibold text-left text-[#101828]">
                  Comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[74px] relative">
          <div className="flex flex-col justify-start items-start w-[1080px] h-[74px] absolute left-0 top-0 gap-1.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1.5">
              <div
                className="flex justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2 px-3.5 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <p className="self-stretch flex-grow w-[1052px] h-[50px] text-base text-left text-[#667085]">
                  Send a message
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center absolute left-[919px] top-[22px] gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-0.5">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-lg">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clipPath="url(#clip0_699_83)">
                    <path
                      d="M6.66699 11.6667C6.66699 11.6667 7.91699 13.3333 10.0003 13.3333C12.0837 13.3333 13.3337 11.6667 13.3337 11.6667M12.5003 7.49999H12.5087M7.50033 7.49999H7.50866M18.3337 9.99999C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 9.99999C1.66699 5.39762 5.39795 1.66666 10.0003 1.66666C14.6027 1.66666 18.3337 5.39762 18.3337 9.99999ZM12.917 7.49999C12.917 7.73011 12.7304 7.91666 12.5003 7.91666C12.2702 7.91666 12.0837 7.73011 12.0837 7.49999C12.0837 7.26987 12.2702 7.08332 12.5003 7.08332C12.7304 7.08332 12.917 7.26987 12.917 7.49999ZM7.91699 7.49999C7.91699 7.73011 7.73044 7.91666 7.50033 7.91666C7.27021 7.91666 7.08366 7.73011 7.08366 7.49999C7.08366 7.26987 7.27021 7.08332 7.50033 7.08332C7.73044 7.08332 7.91699 7.26987 7.91699 7.49999Z"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_699_83">
                      <rect width={20} height={20} fill="white" />
                    </clippath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2 rounded-lg">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M9.99967 10.8333C10.4599 10.8333 10.833 10.4602 10.833 9.99999C10.833 9.53975 10.4599 9.16666 9.99967 9.16666C9.53944 9.16666 9.16634 9.53975 9.16634 9.99999C9.16634 10.4602 9.53944 10.8333 9.99967 10.8333Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.833 10.8333C16.2932 10.8333 16.6663 10.4602 16.6663 9.99999C16.6663 9.53975 16.2932 9.16666 15.833 9.16666C15.3728 9.16666 14.9997 9.53975 14.9997 9.99999C14.9997 10.4602 15.3728 10.8333 15.833 10.8333Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16634 10.8333C4.62658 10.8333 4.99967 10.4602 4.99967 9.99999C4.99967 9.53975 4.62658 9.16666 4.16634 9.16666C3.7061 9.16666 3.33301 9.53975 3.33301 9.99999C3.33301 10.4602 3.7061 10.8333 4.16634 10.8333Z"
                    stroke="#667085"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 rounded-lg bg-[#0086c9] border border-[#0086c9]"
              style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-white">Send</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1064px] relative gap-3">
              <svg
                width={42}
                height={42}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
              </svg>
              <div className="flex flex-col justify-start items-start flex-grow gap-1.5">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="flex-grow w-[922px] text-sm font-medium text-left text-[#344054]">Joshua Wilson</p>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
                </div>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                  <p className="flex-grow w-[984px] text-base text-left text-[#101828]">
                    Hey Paul, can you please review the latest design when you can?
                  </p>
                </div>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0086c9]">Reply</p>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1064px] relative gap-3">
              <svg
                width={42}
                height={42}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
              </svg>
              <div className="flex flex-col justify-start items-start flex-grow gap-1.5">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="flex-grow w-[922px] text-sm font-medium text-left text-[#344054]">Joshua Wilson</p>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">Today 2:20pm</p>
                </div>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#f2f4f7]">
                  <p className="flex-grow w-[984px] text-base text-left text-[#101828]">
                    Hey Paul, can you please review the latest design when you can?
                  </p>
                </div>
              </div>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0086c9]">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
