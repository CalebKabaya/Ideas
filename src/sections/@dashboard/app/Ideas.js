import axios from 'axios';
import { Container, InputAdornment, TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
// import { authentication } from 'src/pages/extentionsfunctions';
import { authentication } from 'src/pages/extentionsfunctions';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import jobPostImage from './jobPostImage.png';
import Icon from './Icon.png';

// import { makeStyles } from "@material-ui/core/styles";

export const IdeasHistory = () => {
  const [status, setStatus] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState();
  const [ideas, setIdeas] = useState([]);
  const [hasUpvoted, setHasUpvoted] = useState({});
  // Get the ideaId from the URL
  const { ideaId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items per page

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const sortedIdeas = ideas.slice().sort((a, b) => {
  //   // Assuming 'timestamp' is the property indicating the idea's posting time
  //   return new Date(b.timestamp) - new Date(a.timestamp);
  // });

  // const displayedIdeas = sortedIdeas.slice(startIndex, endIndex);

  const [displayedIdeas, setDisplayedIdeas] = useState([]);

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

      fetch('https://developer.britam.com/api/IdeasPortal/GetIdeas', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          // Assuming result is JSON, parse it into an object
          const data = JSON.parse(result);
          setIdeas(data); // Store the data in state
        })
        .catch((error) => console.log('error', error));
    }
  }, [accessToken]); // Fetch challenges whenever accessToken changes

  // Update the handleNextPage and handlePreviousPage functions
  const handleNextPage = () => {
    if (currentPage < Math.ceil(ideas.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'status') {
      setStatus(value);
    } else if (name === 'department') {
      setDepartment(value);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    try {
      // Filter ideas based on status
      const filteredIdeas = ideas.filter((idea) => {
        if (status === 'Pending') {
          return idea.status === 'Pending';
        } else if (status === 'Approved') {
          return idea.status === 'Approved';
        } else if (status === 'Declined') {
          return idea.status === 'Declined';
        }
        // If no status is selected, return all ideas
        return true;
      });

      // Sort filtered ideas by timestamp
      const sortedIdeas = filteredIdeas.slice().sort((a, b) => {
        // Assuming 'timestamp' is the property indicating the idea's posting time
        return new Date(b.timestamp) - new Date(a.timestamp);
      });

      // Calculate pagination indices
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Slice for pagination
      const slicedIdeas = sortedIdeas.slice(startIndex, endIndex);

      // Update displayedIdeas state with slicedIdeas
      setDisplayedIdeas(slicedIdeas);
      
    } catch (error) {
      console.error('Error filtering ideas:', error);
      // Handle the error, set an error state, or log the error for further investigation
    }
  }, [ideas, status, currentPage, itemsPerPage]);

  // Function to format the date based on the logic you provided
  const formatDate = (datecreated) => {
    const ideaDate = moment(datecreated);
    const currentDate = moment();
    const hoursDifference = currentDate.diff(ideaDate, 'hours');

    let formattedDate;
    if (hoursDifference < 1) {
      formattedDate = 'Just now';
    } else if (hoursDifference < 12) {
      formattedDate = 'Today';
    } else if (hoursDifference < 24) {
      formattedDate = 'Yesterday';
    } else {
      formattedDate = ideaDate.format('YYYY-MM-DD');
    }
    return formattedDate;
  };

  // Function to update the date format in real-time
  const updateDatesInRealTime = () => {
    const updatedIdeas = ideas.map((idea) => {
      return {
        ...idea,
        formattedDate: formatDate(idea.datecreated),
      };
    });
    setIdeas(updatedIdeas);
  };

  useEffect(() => {
    // Log raw createdate and formattedDate values
    ideas.forEach((idea) => {
      // console.log('Raw createdate:', idea.createdate);
      // console.log('Formatted date:', idea.formattedDate);
    });

    // Update the date format initially
    updateDatesInRealTime();

    // Update the date format every minute (adjust the interval as needed)
    const interval = setInterval(updateDatesInRealTime, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [ideas]);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchChange(event);
    }
  };

  useEffect(() => {
    // Initialize hasUpvoted with data from local storage
    const upvotedIdeasFromStorage = JSON.parse(localStorage.getItem('upvotedIdeas')) || {};
    setHasUpvoted(upvotedIdeasFromStorage);
  }, []);

  const handleUpvote = (index) => {
    // Check if the user has already upvoted this idea
    if (hasUpvoted[index]) {
      // If the user has already upvoted, decrement the upvote count and remove the upvote status
      const updatedIdeas = [...ideas];
      updatedIdeas[index].upvotes -= 1;

      // Mark that the user has removed their upvote for this idea
      const newHasUpvoted = { ...hasUpvoted };
      newHasUpvoted[index] = false;

      // Update the state with the new array and hasUpvoted status
      setIdeas(updatedIdeas);
      setHasUpvoted(newHasUpvoted);

      // Update local storage with the new hasUpvoted data
      localStorage.setItem('upvotedIdeas', JSON.stringify(newHasUpvoted));
    } else {
      // If the user hasn't upvoted this idea, proceed with the upvote

      // Create a copy of the ideas array
      const updatedIdeas = [...ideas];

      // Increment the upvote count for the specific idea
      updatedIdeas[index].upvotes += 1;

      // Mark that the user has upvoted this idea
      const newHasUpvoted = { ...hasUpvoted };
      newHasUpvoted[index] = true;

      // Update the state with the new array and hasUpvoted status
      setIdeas(updatedIdeas);
      setHasUpvoted(newHasUpvoted);

      // Update local storage with the new hasUpvoted data
      localStorage.setItem('upvotedIdeas', JSON.stringify(newHasUpvoted));
    }
  };

  if (accessToken === null) {
    return 'Loading';
  }
  //  console.log(ideas,'this are the ideas');

  const handleClick = () => {
    // Use the navigate function to navigate to another page
    navigate('/dashboard/single-idea'); // Specify the path to the other page
  };

  return (
    <div className="flex flex-col justify-start items-start gap-6">
      <div
        className="flex-grow-0 flex-shrink-0 w-full h-[250px] rounded-2xl bg-cover bg-no-repeat bg-center border border-[#eaecf0]"
        style={{ backgroundImage: `url(${jobPostImage})`, src: { jobPostImage } }}
      />
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-4 p-5 rounded-xl bg-gray-50">
        <div className="flex flex-col sm:flex-row justify-start items-center flex-grow gap-3">
          {/* seach */}
          <div className="flex flex-col justify-start items-start flex-grow gap-2 w-full">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Status</p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status" // Set the name attribute
                    value={status}
                    label="Select Status "
                    onChange={handleChange}
                  >
                    <MenuItem value={'Pending'}>Pending</MenuItem>
                    <MenuItem value={'Approved'}>Approved</MenuItem>
                    <MenuItem value={'Declined'}>Declined</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start flex-grow  w-full gap-2">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Category</p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="department" // Set the name attribute
                    value={department}
                    label="Select Department "
                    onChange={handleChange}
                  >
                    <MenuItem value={'IT'}>IT</MenuItem>
                    <MenuItem value={'P&D'}>P&D</MenuItem>
                    <MenuItem value={'Life Insurance'}>Life Insuarance</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* idea card */}

      {displayedIdeas
        .slice()
        .reverse()
        .map((idea, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0] hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                    {idea.department}
                  </p>
                  <div className="flex flex-row justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#101828]">
                      <span
                        className="flex-grow-0 flex-shrink-0 text-sm
                     font-semibold text-left text-[#101828] gap-2 sm:gap-2"
                      >
                        {idea.title}
                      </span>
                    </p>

                    {/* idea status */}

                    {idea.status === 0 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 sm:gap- pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fffaeb] border border-[#fedf89]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle cx={4} cy={4} r={3} fill="#F79009" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#b54708]">
                          Pending
                        </p>
                      </div>
                    )}

                    {idea.status === 1 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
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
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">
                          Approved
                        </p>
                      </div>
                    )}

                    {idea.status === 2 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#fef3f2] border border-[#fecdca]">
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle cx={4} cy={4} r={3} fill="#F04438" />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#b42318]">
                          Declined
                        </p>
                      </div>
                    )}

                    {idea.status === 3 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2 pr-2.5 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
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
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">
                          Under Implementation{' '}
                        </p>
                      </div>
                    )}
                    {/* end of status */}
                  </div>
                </div>

                <Link to={`/dashboard/single-idea/${idea.id}`}>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 ">
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
                {idea.description}
              </p>
              <div className="flex lg:flex-row sm:flex-row w-full overflow-hidden justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6 mr-6">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <div

                  //style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
                  >
                    <button
                      style={{
                        backgroundColor: hasUpvoted[index] ? '#0086C9' : 'white',
                        color: hasUpvoted[index] ? 'white' : 'black',
                        border: '1px solid #026aa2',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = hasUpvoted[index] ? '#0086C9' : 'white';
                        e.target.style.color = hasUpvoted[index] ? 'white' : 'black';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = hasUpvoted[index] ? '#0086C9' : 'white';
                        e.target.style.color = hasUpvoted[index] ? 'white' : 'black';
                      }}
                      onClick={() => handleUpvote(index)}
                    >
                      Upvote
                    </button>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">
                    {idea.upvotes} 0
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <img className="rounded-full" src={Icon} alt="commet icon" />

                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs  font-medium text-left text-[#475467]">
                    {idea.commentCount} comments
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">
                    {idea.formattedDate}{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <Link
              to="#!"
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === 1 ? 'pointer-events-none opacity-50' : ''
              }`}
              onClick={handlePreviousPage}
            >
              Previous
            </Link>
          </li>
          {Array.from({ length: Math.ceil(ideas.length / itemsPerPage) }, (_, i) => (
            <li key={i}>
              <Link
                to="#!"
                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPage === i + 1 ? 'bg-primary-100 text-primary-700 font-medium' : ''
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
                {currentPage === i + 1 && (
                  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="#!"
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === Math.ceil(ideas.length / itemsPerPage) ? 'pointer-events-none opacity-50' : ''
              }`}
              onClick={handleNextPage}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

{
  /* <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0] hover:bg-gray-50 dark:hover:bg-gray-600">
<div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
    <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
      <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
        IT Department
      </p>
      <div className="flex flex-row justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#101828]">
          <span
            className="flex-grow-0 flex-shrink-0 text-sm
             font-semibold text-left text-[#101828] gap-2 sm:gap-2"
          >
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
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 ">
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
        <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs  text-left text-[#344054]">Upvote</p>
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">123</p>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
      <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs  font-medium text-left text-[#475467]">
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
</div> */
}

{
  /* <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-2">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 w-full ">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">Search for ideas</p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2.5">
                <TextField
                  id="search"
                  type="search"
                  label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyPress}
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
          </div> */
}
