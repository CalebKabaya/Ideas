import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';


// Import your authentication context or state management here
// import { AuthContext } from './AuthContext';

// components
import Iconify from '../components/iconify';

// sections
import { AdminUnreviewedIdeas } from '../sections/admin/app/AdminUnreviewedIdeas';
// import { AdminReviewedIdeas } from '../sections/admin/app/AdminReviewedIdeas';
import { AdminIdeasUnderImplementation } from '../sections/admin/app/AdminIdeasUnderImplementation';
import BasicTabs  from '../sections/admin/reviewed/Reviewed';



// Define a PrivateRoute component
const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  const navigate = useNavigate(); // Use useNavigate for routing

  // Check authentication status
  if (!isAuthenticated) {
    navigate('/adminpages/login'); // Redirect to the login page
    return null; // Return null to prevent rendering
  }

  return <Outlet />;
};

export default function AdminDashboardAppPage() {
  const theme = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your authentication logic
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
}

  return (
    <>
      <Helmet>
        <title>Dashboard | Ideas Portal</title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} >
          <Typography variant="h3" gutterBottom>
            Overview
          </Typography>
        </Stack> 

        <Grid item xs={12} md={6} lg={8}>
        <Stack alignItems="center" justifyContent="space-between" mb={5} ml={0} >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-12  gap-5 p-6 rounded-xl bg-gray-200 border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Total Users
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">2,420</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-24 gap-5 p-6 rounded-xl bg-gray-200 border border-[#eaecf0]"
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
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-40 md:w-24 gap-5 p-6 rounded-xl bg-gray-200 border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Pending Review
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">63</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-40 md:w-24 gap-5 p-6 rounded-xl bg-gray-200 border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Aprroved Ideas
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">122</p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-24 gap-5 p-6 rounded-xl bg-gray-200 border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Total Ideas
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow w-full text-xl font-semibold text-left text-[#101828]">49</p>
                  </div>
                </div>
              </div>
            </div>  
          </Stack> 
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

            <Typography variant="h5" gutterBottom>
              Ideas Progress
            </Typography>

            <Button
            type="submit"
            cursor="pointer"
            >Dowload All</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
     <Tabs defaultValue={1}>
      <TabsList className="w-[359] h-[116] p-6 mb-4 rounded-xl bg-gray-300 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-sans ${
                selected
                  ? 'text-black-600 bg-white'
                  : 'text-white bg-transparent focus:text-white hover:bg-gray-100'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-bold w-full p-6 m-0 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
            }),
          }}
          value={1}
        >
          Unreviewed Ideas
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-sans ${
                selected
                  ? 'text-black-600 bg-white'
                  : 'text-white bg-transparent focus:text-white hover:bg-blue-400'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-bold w-full p-6 m-0 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
            }),
          }}
          value={2}
        >
          Reviewed Ideas
        </Tab>
        <Tab
          slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-sans ${
                selected
                  ? 'text-black-600 bg-white'
                  : 'text-white bg-transparent focus:text-white hover:bg-blue-400'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-bold w-full p-6 m-0 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
            }),
          }}
          value={3}
        >
          Under Implementation
        </Tab>
      </TabsList>
      <TabPanel className="w-full font-sans text-sm" value={1}>
        <AdminUnreviewedIdeas />
      </TabPanel>
      <TabPanel className="w-full font-sans text-sm" value={2}>
        <BasicTabs />
      </TabPanel>
      <TabPanel className="w-full font-sans text-sm" value={3}>
        <AdminIdeasUnderImplementation />
      </TabPanel>
    </Tabs>



        </Grid>

        {/* <Grid item xs={12} md={6} lg={8}>
          
        </Grid> */}
      </Container>
    </>
  );
}
