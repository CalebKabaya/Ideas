import { React, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Comment from './comments/Comments';
import CommentSection from './comments/CommentSection';



import { authentication } from 'src/pages/extentionsfunctions';
import { useParams } from 'react-router-dom';
import Avatar1 from './avartas/Avatar1.png';



const sampleComments = [
  {
    id: 1,
    text: "Top-level Comment 1",
    replies: [
      {
        id: 2,
        text: "Reply to Comment 1",
        replies: [
          {
            id: 3,
            text: "Nested Reply 1 to Comment 2",
          },
        ],
      },
      {
        id: 4,
        text: "Another Reply to Comment 1",
      },
    ],
  },
  {
    id: 5,
    text: "Top-level Comment 2",
  },
];

export default function SingleIdea() {
  
  const [accessToken, setAccessToken] = useState();
  const [ideas, setideas] = useState([]);
  // Get the challengeId from the URL
  const { ideaId } = useParams();

  const [comment, setComment] = useState('');


  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // You can add your logic here to handle the submitted comment
    console.log('Submitted Comment:', comment);
    // Reset the comment field
    setComment('');
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

  useEffect(() => {
    if (accessToken) {
      let myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + accessToken.access_token);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(`https://developer.britam.com/api/IdeasPortal/GetIdeaById?Id=${ideaId}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          // Assuming result is JSON, parse it into an object
          const data = JSON.parse(result);
          setideas(data); // Store the data in state
        })
        .catch((error) => console.log('error', error));
    }
  }, [accessToken]); // Fetch challenges whenever accessToken changes

  if (accessToken === null) {
    return 'Loading';
  }
  // console.log(ideas);

  return (
    <div className="flex flex-col justify-start items-start w-full gap-2.5 p-3 bg-white rounded-xl overflow-hidden">
      {ideas.map((cIdeas, index) => (
        
        <div className="flex flex-col justify-start items-end flex-grow-0  w-full flex-shrink-0 gap-6 rounded-xl">
          <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-2.5 w-full ">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[13px] w-full ">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
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
                      d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8334M4.16699 10L10.0003 4.16669"
                      stroke="#0086C9"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link to="/dashboard/app">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0086c9]">
                      Back to all ideas
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[13px] w-full md:w-full sm:w-full">
                <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse lg:justify-between  md:justify-between sm:justify-between  xs:justify-left items-center flex-grow-0 flex-shrink-0 relative w-full gap-[19px]">
                  <div className="flex justify-start items-start text-left flex-grow-0 flex-shrink-0 relative gap-[13px]">
                    <p className="flex-grow-0 text-left flex-shrink-0  text-lg font-semibold  text-[#101828]">
                      {cIdeas.title}
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[59px]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
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
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">Upvote</p>
                      </div>
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">123</p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 w-full">
                      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-14 relative rounded-[200px] bg-[#e0e0e0]">
                        <div className="self-stretch flex-grow h-14 relative opacity-[0.08] overflow-hidden rounded-[200px] border-[0.75px] border-[#101828]" />
                      </div>
                      <div className="flex flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 ">
                        <div className="flex">
                          <img className="w-10 h-10 rounded-full" src={Avatar1} alt="Jese" />
                        </div>
                        <div className="flex flex-col">
                          <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#101828]">
                            James Maina
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">{cIdeas.createdate}
</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  w-full relative gap-8">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
                    Idea overview
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                    A overview of the project, goals and outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 p-4 rounded-lg bg-gray-50 border border-[#eaecf0]">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#344054]">
                {cIdeas.description}
              </p>
            </div>

            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                Potential Benefits
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#475467]">
                <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                  {cIdeas.benefits}
                </span>
                {/* <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                All stakeholders can track the status and progress of ideas, promoting open communication.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                The platform encourages participation from a diverse range of contributors, fostering a culture of
                innovation.
              </span> */}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                Target audience
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                {cIdeas.department}
              </p>
            </div>

            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-6 pt-6 pb-5 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-md font-semibold text-left text-[#101828]">
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex flex-col w-full">
            <CommentSection comments={sampleComments} />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
// {challengesIdeas.map((cIdeas, index) => (

{
  /* <div className="flex flex-col justify-start items-start w-full gap-2.5 p-3 bg-white rounded-xl overflow-hidden">
      <div className="flex flex-col justify-start items-end flex-grow-0  w-full flex-shrink-0 gap-6 rounded-xl">
        <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-2.5 w-full ">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[13px] w-full ">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
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
                    d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8334M4.16699 10L10.0003 4.16669"
                    stroke="#0086C9"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link to="/dashboard/app">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0086c9]">
                    Back to all ideas
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[13px] w-full md:w-full sm:w-full">
              <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse lg:justify-between  md:justify-between sm:justify-between  xs:justify-left items-center flex-grow-0 flex-shrink-0 relative w-full gap-[19px]">
                <div className="flex justify-start items-start text-left flex-grow-0 flex-shrink-0 relative gap-[13px]">
                  <p className="flex-grow-0 text-left flex-shrink-0  text-lg font-semibold  text-[#101828]">
                    Ticket automation
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[59px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
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
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">Upvote</p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">123</p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 w-full">
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-14 relative rounded-[200px] bg-[#e0e0e0]">
                      <div className="self-stretch flex-grow h-14 relative opacity-[0.08] overflow-hidden rounded-[200px] border-[0.75px] border-[#101828]" />
                    </div>
                    <div className="flex flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 ">
                      <div className="flex">
                        <img className="w-10 h-10 rounded-full" src={Avatar1} alt="Jese" />
                      </div>
                      <div className="flex flex-col">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#101828]">
                          James Maina
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#475467]">20 Jan 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  w-full relative gap-8">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
                  Idea overview
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                  A overview of the project, goals and outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 p-4 rounded-lg bg-gray-50 border border-[#eaecf0]">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#344054]">
              The automated ticketing system would help to streamline and enhance the management and collaboration
              surrounding innovative concepts and suggestions within an organization or community. This system leverages
              advanced technology to efficiently capture, categorize, prioritize, and track ideas, ensuring that no
              valuable insights are lost and that the best ideas receive the attention they deserve.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
              Potential Benefits
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#475467]">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                Automation reduces administrative overhead, accelerates idea evaluation, and minimizes manual processes.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                All stakeholders can track the status and progress of ideas, promoting open communication.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                The platform encourages participation from a diverse range of contributors, fostering a culture of
                innovation.
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
              Target audience
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">P&amp;D</p>
          </div>

          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-6 pt-6 pb-5 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-md font-semibold text-left text-[#101828]">
                    Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col w-full">

          <CommentSection comments={sampleComments} />
          </form>
        </div>
      </div>
    </div> */
}
