import { Container, InputAdornment, TextField } from '@mui/material';
import { useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import Stack from '@mui/material/Stack';

import ChallengesCards from './challengesIdeasCards';
import RankingCards from './ranking';
import ChallengesList from './challengelist';

import jobPostImage from './jobPostImage.png';
import PaginationRounded from '../pagination/pagination';


export default function MyHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-start relative gap-6">
      <div
        className="flex-grow-0 flex-shrink-0 w-full h-[196px] relative rounded-2xl  bg-cover bg-no-repeat bg-center border border-[#eaecf0]"
        style={{ backgroundImage: `url(${jobPostImage})`, src: { jobPostImage } }}
      />
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base font-semibold text-left text-[#101828]">
            Description
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#344054]">
            The automated ticketing system would help to streamline and enhance the management and collaboration
            surrounding innovative concepts and suggestions within an organization or community. This system leverages
            advanced technology to efficiently capture, categorize, prioritize, and track ideas, ensuring that no
            valuable insights are lost and that the best ideas receive the attention they deserve.
          </p>
        </div>

        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-3  bg-gray-50">
          <div className="flex flex-col sm:flex-row justify-start items-start flex-grow-0 gap-3 w-full">
            {/*             
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-2">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 w-full ">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Search for ideas</p>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2.5">
                  <TextField
                    id="search"
                    type="search"
                    label="Search"
                    value={searchTerm}
                    onChange={handleChange}
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
            </div> */}

            <div className="flex flex-col justify-start items-start flex-grow gap-2 w-full">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]"> Sort Ideas By</p>
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

      <div className="flex flex-col md:flex-row sm:flex-row justify-start items-start relative gap-8 w-full">
        {/* challenges */}

        <div className="lg:w-3/5 md:w-full sm:w-full">
          <ChallengesCards />
        </div>

        {/* raking */}
        <div className="lg:w-2/5 md:w-full sm:w-full">
          <RankingCards />
        </div>

      </div>
    

    </div>
  );
}
