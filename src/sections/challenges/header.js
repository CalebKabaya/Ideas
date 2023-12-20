import { useState, useEffect, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';

import ChallengesCards from './challengesIdeasCards';
import RankingCards from './ranking';
import WPChallenge from './whatsappchallenge';

import { authentication } from 'src/pages/extentionsfunctions';
import { useParams } from 'react-router-dom';
import moment from 'moment';


import jobPostImage from './jobPostImage.png';
import Pagination from '../pagination/pagination';

export default function MyHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = React.useState('');
  const [accessToken, setAccessToken] = useState();
  // Get the challengeId from the URL
  const { challengeId } = useParams();

  // State to store the challenge data
  const [ideas, setideas] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setStatus(event.target.value);
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
      fetch(`https://developer.britam.com/api/IdeasPortal/GetChallengeById?ChallengeId=${challengeId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // Assuming result is JSON, parse it into an object
        const data = JSON.parse(result);
        setideas(data); // Store the data in state
      })
      .catch((error) => console.log('error', error));
  }
}, [accessToken]);

  if (accessToken === null || !challengeId) {
    return 'Loading...';
  }


  return (
    <div  className="flex flex-col justify-start items-start relative gap-6">

    {ideas.map((cIdeas, index) => (

      <div  className="flex flex-col justify-start items-start relative gap-6  w-full ">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-lg font-semibold text-left text-[#101828]">
            {cIdeas.title}
          </p>
        </div>

        {/* <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-48 md:w-24  gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
            style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
          >
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                Total Participants
              </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">2,420</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-48 md:w-24 gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
            style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
          >
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                Total Ideas
              </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">234</p>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className="flex-grow-0 flex-shrink-0 w-full h-[210px] relative rounded-2xl  bg-cover bg-no-repeat bg-center border border-[#eaecf0]"
          style={{ backgroundImage: `url(${jobPostImage})`, src: { jobPostImage } }}
        />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6 w-full">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
              Description
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#344054]">
            {cIdeas.description}

            </p>
          </div>

          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
              Challenge Duration
            </p>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative">
              <div className="flex justify-start items-start absolute left-0 top-[3px] gap-6">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 ">
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
                      d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M7.5 13.3333L9.16667 15L12.9167 11.25M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                      stroke="#98A2B3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 font-medium text-sm sm:text-xs xs:text-xs text-left text-[#475467]">
                  {moment(cIdeas.startdate).format('MMM-YY')} - {moment(cIdeas.enddate).format('MMM-YY')} {' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-3  bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-start items-start flex-grow-0 gap-3 w-full">
              <div className="flex flex-col justify-start items-start flex-grow gap-2 w-full">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                    {' '}
                    Sort Ideas By
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Select Status "
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Pending</MenuItem>
                        <MenuItem value={20}>Aprroved</MenuItem>
                        <MenuItem value={30}>Declined</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse justify-start items-start relative gap-8 w-full">
          {/* challenges */}

          <div className="lg:w-full md:w-full sm:w-full xs:w-full">
            <WPChallenge />
          </div>

          {/* raking */}
          {/* <div className="lg:w-2/5 md:w-full sm:w-full xs:w-full">
            <RankingCards />
          </div> */}
        </div>
        
{/* 
        <div className="flex justify-center w-full mt-9">
          <Pagination />
        </div> */}
      </div>
     ))} 
  </div>
  );
}


{/* <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse justify-start items-start relative gap-8 w-full">
          {/* challenges */}

          // <div className="lg:w-3/5 md:w-full sm:w-full xs:w-full">
          //   <ChallengesCards />
          // </div>

          {/* raking */}
          // <div className="lg:w-2/5 md:w-full sm:w-full xs:w-full">
          //   <RankingCards />
          // </div>
        // </div> */}