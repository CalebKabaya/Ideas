import { Container, InputAdornment, TextField } from '@mui/material';
import { authentication } from 'src/pages/extentionsfunctions';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext'; // Import the useUser hook
import { useHasUpvoted } from '../../hooks/HasUpvotedContext';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import Icon from './Icon.png';


export const IdeasHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState();
  const [ideas, setIdeas] = useState([]);
  const [hasUpvoted, setHasUpvoted] = useState({});
  // Get the ideaId from the URL
  const { ideaId } = useParams();
  const { userData, setUser } = useUser();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items per page

  const [displayedIdeas, setDisplayedIdeas] = useState([]);

  // Destructure userData to access specific properties
  const { userId, userName, firstName, lastName, email } = userData;

  const currentUser = {
    newUserID: userId, // Use userName instead of {userName}
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

  useEffect(() => {
    if (ideas.length > 0 && userId) {
      const filteredIdeas = ideas.filter((idea) => idea.userId === userId);
      setDisplayedIdeas(filteredIdeas);
    }
  }, [ideas, userId]);

 
  // Function to handle user voting
  const handleVote = async (ideaId) => {
    try {
      // Check if the user has already voted for this idea
      if (hasUpvoted[ideaId]) {
        // If the user has already voted, you can show a message or handle it as needed
        console.log('You have already voted for this idea.');
        return;
      }

      // Call the API to vote for the idea
      const voteRequestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ideaId: ideaId,
          userId: currentUser.newUserID, // Replace 'user123' with the actual user ID or fetch it from somewhere
        }),
      };

      console.log(userId, 'userrrr');

      const voteResponse = await fetch('https://developer.britam.com/api/IdeasPortal/VoteIdea', voteRequestOptions);
      if (voteResponse.ok) {
        // If the vote was successful, update the state to mark this idea as upvoted by the user
        setHasUpvoted((prevState) => ({
          ...prevState,
          [ideaId]: true,
        }));
        console.log('Vote submitted successfully!');
      } else {
        console.error('Failed to submit vote:', voteResponse.statusText);
        // Handle the failure scenario here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error while submitting vote:', error);
      // Handle the error scenario here (e.g., show an error message)
    }
  };



  const handleChange = (event) => {
    setStatus(event.target.value);
    setDepartment(event.target.value);
  };

  const handleClick = () => {
    // Use the navigate function to navigate to another page
    navigate('/dashboard/single-idea'); // Specify the path to the other page
  };

  return (
    <div className="flex flex-col justify-start items-start gap-6 w-auto">

      {/* idea card */}

      {displayedIdeas.map((idea, index) => (

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
        {/* <button
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
          onClick={() => handleVote(idea.id)}                    >
          Upvote
        </button> */}
        <button
          onClick={() => handleVote(idea.id)}
          style={{
            backgroundColor: hasUpvoted[idea.id] ? '#0086C9' : 'white',
            color: hasUpvoted[idea.id] ? 'white' : 'black',
            border: '1px solid #026aa2',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
          }}
          disabled={hasUpvoted[idea.id]} // Disable the button if the user has already voted
        >
          {hasUpvoted[idea.id] ? 'Voted' : 'Vote'}
        </button>
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-xs font-medium text-left text-[#475467]">
        {idea.voteCount} 
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
        {/* {idea.formattedDate}{' '} */}
      </p>
    </div>
  </div>
</div>
</div>
))}

      {/* idea card */}
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0] hover:bg-gray-50 dark:hover:bg-blue-400">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                IT Department
              </p>
              <div className="flex flex-row  justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                <p className="flex-grow-0  flex-shrink-0 text-lg text-left text-[#101828]">
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
      </div>
    </div>
  );
};