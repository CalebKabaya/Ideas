import { Link } from 'react-router-dom';
import { authentication } from 'src/pages/extentionsfunctions';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Grid, Container, Typography, Button, Stack, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CardImage from './Image.png';
import CardImage2 from './Image-2.png';


export default function ChallengesList() {
    const [searchTerm, setSearchTerm] = useState('');

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
       {/* <Stack>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-4 mb-7">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 w-full ">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Search for Challenge </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2.5">
                <TextField
                fullWidth
                  id="search"
                  type="search"
                  label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </Stack> */}
      {/* {challenges
        .filter((challenge) => {
          return search.toLowerCase() === '' ? challenge : challenge.title.toLowerCase().includes(search);
        })
        .map((challenge, index) => ( */}
          {challenges.map((challenge, index) => (
          <Link to={`/dashboard/challenges/${challenge.id}`} className="w-full">
            <div
              key={index}
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-[27px] p-4 rounded-xl bg-white border border-[#eaecf0]"
              style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
            >
              <div
                className="flex-grow-0 flex-shrink-0 lg:w-[200px] md:w-[200px] sm:w-[200px] xs:w-[120px] h-36 relative overflow-hidden rounded-lg b"
                style={{ backgroundImage: `url(${CardImage})`, src: { CardImage } }}
              >
                <div className="flex justify-start items-center absolute left-2 top-[114px] gap-1 pl-1.5 pr-2 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M3.5 7.54513V11L5.85144 10.0594C5.90632 10.0375 5.93376 10.0265 5.9621 10.0221C5.98722 10.0183 6.01278 10.0183 6.0379 10.0221C6.06624 10.0265 6.09368 10.0375 6.14856 10.0594L8.5 11V7.54513M9.75 4.75C9.75 6.82107 8.07107 8.5 6 8.5C3.92893 8.5 2.25 6.82107 2.25 4.75C2.25 2.67893 3.92893 1 6 1C8.07107 1 9.75 2.67893 9.75 4.75Z"
                      stroke="#17B26A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">
                    New challange
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start flex-grow relative gap-4">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                  <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#4d0039]" />
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                      {challenge.title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <p className="flex-grow-0 flex-shrink-0  text-left text-sm sm:text-xs text-[#475467]">
                      202 Participants
                    </p>
                  </div>
                </div>
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
                        {moment(challenge.startdate).format('MMM-YY')} - {moment(challenge.enddate).format('MMM-YY')}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 lg:visible md:visible xs:invisible">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#026aa2]">View Challenge</p>
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
                    d="M5.83398 14.1667L14.1673 5.83333M14.1673 5.83333H5.83398M14.1673 5.83333V14.1667"
                    stroke="#026AA2"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
