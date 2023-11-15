import { useState, useEffect, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import ChallengesCards from './challengesIdeasCards';
import RankingCards from './ranking';
import { authentication } from 'src/pages/extentionsfunctions';

import jobPostImage from './jobPostImage.png';
import Pagination from '../pagination/pagination';

export default function MyHeader() {
  const [status, setStatus] = React.useState('');
  const [accessToken, setAccessToken] = useState();
  // Get the challengeId from the URL
  const { challengeId } = useParams();

  // State to store the challenge data
  const [challengeData, setChallengeData] = useState(null);
  console.log('Challenge ID:', challengeId);

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
  }, []);

  useEffect(() => {
    if (accessToken && challengeId) {
      let myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + accessToken.access_token);

      let requestOptions = {
        method: 'GET', // Use GET method for retrieving data
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(`https://developer.britam.com/api/IdeasPortal/GetPendingChallenges=${challengeId}`,requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          return response.json();
        })
        .then((data) => {
          // Update the state with the fetched challenge data
          setChallengeData(data);
        })
        .catch((error) => {
          console.error('Error:', error.message); // Log the specific error message
        });
    }
  }, [accessToken, challengeId]);

  // if (accessToken === null) {
  //   return 'Loading';
  // }
  if (accessToken === null || !challengeId) {
    return 'Loading...';
  }

  console.log(challengeData, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');

  return (
    <div className="flex flex-col justify-start items-start relative gap-6">
      <div>
        {challengeData ? (
          <div>
            <h1>{challengeData.id}</h1>
            <p>{challengeData.description}</p>
            {/* Render other challenge details here */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div
        className="flex-grow-0 flex-shrink-0 w-full h-[220px] relative rounded-2xl  bg-cover bg-no-repeat bg-center border border-[#eaecf0]"
        style={{ backgroundImage: `url(${jobPostImage})`, src: { jobPostImage } }}
      />
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#101828]">
            Description
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm text-left text-[#344054]">
            The automated ticketing system would help to streamline and enhance the management and collaboration
            surrounding innovative concepts and suggestions within an organization or community. This system leverages
            advanced technology to efficiently capture, categorize, prioritize, and track ideas, ensuring that no
            valuable insights are lost and that the best ideas receive the attention they deserve.
          </p>
        </div>

        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-3  bg-gray-50">
          <div className="flex flex-col sm:flex-row justify-start items-start flex-grow-0 gap-3 w-full">
            <div className="flex flex-col justify-start items-start flex-grow gap-2 w-full">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]"> Sort Ideas By</p>
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
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse  xs:flex-col-reverse justify-start items-start relative gap-8 w-full">
        {/* challenges */}

        <div className="lg:w-3/5 md:w-full sm:w-full xs:w-full">
          <ChallengesCards />
        </div>

        {/* raking */}
        <div className="lg:w-2/5 md:w-full sm:w-full xs:w-full">
          <RankingCards />
        </div>
      </div>

      <div className="flex justify-center w-full mt-9">
        <Pagination />
      </div>
    </div>
  );
}
