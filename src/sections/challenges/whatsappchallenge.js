import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { authentication } from 'src/pages/extentionsfunctions';
import { authentication } from 'src/pages/extentionsfunctions';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext'; // Import the useUser hook

export default function WPChallenge() {
  const [accessToken, setAccessToken] = useState();
  const [challengesIdeas, setChallenges] = useState([]);
  // Get the challengeId from the URL
  const { challengeId } = useParams();
  const { userData, setUser } = useUser();

  const { userId } = userData;

  const currentAccount = {
    userId: userId, // Use userName instead of {userName}
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

      fetch(
        `https://developer.britam.com/api/IdeasPortal/GetIdeaByChallengeId?ChallengeId=${challengeId}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          // Assuming result is JSON, parse it into an object
          const data = JSON.parse(result);

          // Filter the data based on userId
          const filteredData = data.filter((idea) => idea.userId === userId);

          setChallenges(filteredData); // Store the filtered data in state
        })
        .catch((error) => console.log('error', error));
    }
  }, [accessToken, userId, challengeId]); // Fetch challenges whenever accessToken, userId, or challengeId changes

  if (accessToken === null) {
    return 'Loading';
  }
  // console.log(challengesIdeas);
  // console.log('data in these id',challengesIdeas);

  // //votes count
  // const handleUpvote = (index) => {
  //   // Create a copy of the ideas array
  //   const updatedVotes = [...challengesIdeas];

  //   // Increment the upvote count for the specific idea
  //   updatedVotes[index].upvotes += 1;

  //   // Update the state with the new array
  //   setChallenges(updatedVotes);
  // };

  return (
    <div className="flex flex-col justify-start items-center gap-10">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-5">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
              My Submission
            </p>
          </div>
        </div>
      </div>

      {challengesIdeas.length === 0 ? (
        // if data not available
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[352px] gap-6">
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
              <svg
                width="152"
                height="120"
                viewBox="0 0 152 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-[152px] h-[118px] relative"
                preserveAspectRatio="none"
              >
                <circle cx="76" cy="52" r="52" fill="#B2DDFF"></circle>
                <g filter="url(#filter0_dd_1029_9840)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.6 16C66.8273 16 57.2978 21.3233 51.4987 29.4829C49.605 29.0363 47.6301 28.8 45.6 28.8C31.4615 28.8 20 40.2615 20 54.4C20 68.5385 31.4615 80 45.6 80L45.62 80H109.6C121.971 80 132 69.9712 132 57.6C132 45.2288 121.971 35.2 109.6 35.2C108.721 35.2 107.854 35.2506 107.002 35.349C102.098 23.9677 90.7797 16 77.6 16Z"
                    fill="#EFF8FF"
                  ></path>
                  <ellipse cx="45.6" cy="54.4" rx="25.6" ry="25.6" fill="url(#paint0_linear_1029_9840)"></ellipse>
                  <circle cx="77.5996" cy="48" r="32" fill="url(#paint1_linear_1029_9840)"></circle>
                  <ellipse cx="109.599" cy="57.6" rx="22.4" ry="22.4" fill="url(#paint2_linear_1029_9840)"></ellipse>
                </g>
                <circle cx="21" cy="19" r="5" fill="#D1E9FF"></circle>
                <circle cx="18" cy="109" r="7" fill="#D1E9FF"></circle>
                <circle cx="145" cy="35" r="7" fill="#D1E9FF"></circle>
                <circle cx="134" cy="8" r="4" fill="#D1E9FF"></circle>
                <g filter="url(#filter1_b_1029_9840)">
                  <rect x="52" y="62" width="48" height="48" rx="24" fill="#6941C6" fill-opacity="0.4"></rect>
                  <path
                    d="M85 95L81.5001 91.5M84 85.5C84 90.1944 80.1944 94 75.5 94C70.8056 94 67 90.1944 67 85.5C67 80.8056 70.8056 77 75.5 77C80.1944 77 84 80.8056 84 85.5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1029_9840"
                    x="0"
                    y="16"
                    width="152"
                    height="104"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1029_9840"
                    ></feMorphology>
                    <feOffset dy="8"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
                    ></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1029_9840"></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_1029_9840"
                    ></feMorphology>
                    <feOffset dy="20"></feOffset>
                    <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1029_9840"
                      result="effect2_dropShadow_1029_9840"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1029_9840"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_b_1029_9840"
                    x="44"
                    y="54"
                    width="64"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1029_9840"
                    ></feComposite>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1029_9840"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_1029_9840"
                    x1="25.9429"
                    y1="37.4857"
                    x2="71.2"
                    y2="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E9D7FE"></stop>
                    <stop offset="0.350715" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1029_9840"
                    x1="53.0282"
                    y1="26.8571"
                    x2="109.6"
                    y2="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E9D7FE"></stop>
                    <stop offset="0.350715" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1029_9840"
                    x1="92.3992"
                    y1="42.8"
                    x2="131.999"
                    y2="79.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E9D7FE"></stop>
                    <stop offset="0.350715" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[352px] lg:text-base xs:text-sm font-medium text-center text-[#101828]">
                  You haven't submitted to the challenge
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[352px] lg:text-sm xs:text-xs text-center text-[#667085]">
                  To submit to the challenge click on the submit idea button
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // if data available
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  w-full relative gap-8">
          {challengesIdeas.map((idea) => (
            <div
              key={idea.id}
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5"
            >
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                  Proposed name
                </p>
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#475467]">
                <span className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#475467]">
                  {idea.proposedName}
                </span>
              </p>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                  Why the proposed name?
                </p>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6 p-4 rounded-lg bg-gray-50 border border-[#eaecf0]">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full lg:text-sm xs:text-xs tracking-wide leading-loose text-left text-[#344054]">
                    {idea.reason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
