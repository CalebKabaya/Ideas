import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { authentication } from 'src/pages/extentionsfunctions';
import { authentication } from 'src/pages/extentionsfunctions';


export default function ChallengesCards() {
  const [accessToken, setAccessToken] = useState();
  const [challenges, setChallenges] = useState([]);

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

      fetch('https://developer.britam.com/api/IdeasPortal/GetChallenges', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          // Assuming result is JSON, parse it into an object
          const data = JSON.parse(result);
          setChallenges(data); // Store the data in state
        })
        .catch((error) => console.log('error', error));
    }
  }, [accessToken]); // Fetch challenges whenever accessToken changes

  if (accessToken === null) {
    return 'Loading';
  }
  console.log(challenges);

  return (


    
    <div className="flex flex-col justify-start items-start gap-6">
  {challenges.map((challenge, index) => (
        <div key={index}
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0] hover:bg-gray-50 dark:hover:bg-blue-400"
        >
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                  IT Department
                </p>
                <div className="flex flex-row  justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                  <p className="flex-grow-0  flex-shrink-0 text-lg text-left text-[#101828]">
                    <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#101828] gap-2 sm:gap-2">
                    {challenge.title}
                              </span>
                    {/* <span className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#101828]">
                      {' '}
                      automation
                    </span> */}
                  </p>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 sm:gap- pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
                    <svg
                      width={8}
                      height={8}
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle cx={4} cy={4} r={3} fill="#17B26A" />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]"> {challenge.status}
</p>
                  </div>
                </div>
              </div>
              <Link to="/dashboard/single-idea">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 lg:visible sm:invisible xs:invisible">
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#026aa2]">View idea</p>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M5.83398 14.1667L14.1673 5.83333M14.1673 5.83333H5.83398M14.1673 5.83333V14.1667"
                      stroke="#026AA2"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
            </p>
            <div className="flex lg:flex-row sm:flex-row w-full overflow-hidden justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6 mr-6">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-s text-left text-[#344054]">Upvote</p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">123</p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs xs:text-xs font-medium text-left text-[#475467]">
                  2 comments
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs xs:text-xs font-medium text-left text-[#475467]">
                  17-08-2023
                </p>
              </div>
            </div>
          </div>
        </div>
    ))}

    


      {/* <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0] ">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                IT Department
              </p>
              <div className="flex flex-row justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
                  <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#101828] gap-2 sm:gap-2">
                    Ticket
                  </span>
                  <span className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#101828]">
                    {' '}
                    automation
                  </span>
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 sm:gap- pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
                  <svg
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={4} cy={4} r={3} fill="#17B26A" />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">Approved</p>
                </div>
              </div>
            </div>

            <Link to="/dashboard/single-idea">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 lg:visible sm:invisible xs:invisible">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#026aa2]">View idea</p>
                <svg
                  width={10}
                  height={10}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.83398 14.1667L14.1673 5.83333M14.1673 5.83333H5.83398M14.1673 5.83333V14.1667"
                    stroke="#026AA2"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
            We need a way to simplify the process of receiving tickets
          </p>
          <div className="flex lg:flex-row sm:flex-row w-full overflow-hidden justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6 mr-6">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-s text-left text-[#344054]">Upvote</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">123</p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">
                2 comments
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">
                17-08-2023
              </p>
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  );
}
