import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import CountUp from 'react-countup';


// Import your authentication context or state management here
// import { AuthContext } from './AuthContext';

// components
import Iconify from '../components/iconify';

// sections
import { AdminUnreviewedIdeas } from '../sections/admin/app/AdminUnreviewedIdeas';
import { AdminIdeasUnderImplementation } from '../sections/admin/app/UnderImplementation';
import BasicTabs from '../sections/admin/reviewed/Reviewed';
import {PdfDownloadButton}  from './DownloadRecords';


const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/adminpages/login');
    return null;
  }

  return <Outlet />;
};

export default function AdminDashboardAppPage() {
  const theme = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Use useEffect to trigger the animation when the component mounts
  useEffect(() => {
    // Your authentication logic here
    setIsAuthenticated(/* your authentication check result */);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Ideas Portal</title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            Overview
          </Typography>
        </Stack>

        <Grid item xs={12} md={6} lg={8}>
          <Stack alignItems="center" justifyContent="space-between" mb={5} ml={0}>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-12  gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Total Users
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <CountUp end={2420} duration={2} separator="," className="flex-grow w-full text-xl font-semibold text-left text-[#101828]" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-24 gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Total Ideas
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <CountUp end={234} duration={2} separator="," className="flex-grow w-full text-xl font-semibold text-left text-[#101828]" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-40 md:w-24 gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Pending Review
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <CountUp end={63} duration={2} separator="," className="flex-grow w-full text-xl font-semibold text-left text-[#101828]" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-40 md:w-24 gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Approved Ideas
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <CountUp end={122} duration={2} separator="," className="flex-grow w-full text-xl font-semibold text-left text-[#101828]" />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 lg:w-32 md:w-24 gap-5 p-6 rounded-xl bg-white border border-[#eaecf0]"
                style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
              >
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs font-medium text-left text-[#475467]">
                    Total Ideas
                  </p>
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <CountUp end={49} duration={2} separator="," className="flex-grow w-full text-xl font-semibold text-left text-[#101828]" />
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

            {/* <Button
              type="submit"
              cursor="pointer"
              className="bg-white text-black border border-solid border-[#D0D5DD] flex items-center px-4 py-2 rounded text-sm font-normal transition duration-300 hover:bg-[#0086C9] hover:border-[#0086C9] hover:text-white"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Download All
            </Button> */}
            <PdfDownloadButton />

          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Tabs defaultValue={1}>
            <TabsList className="w-[359] h-[10] p-2 lg:gap-4 md:gap-4 xs:gap-1 mb-4 rounded-xl bg-[#0086C9] flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
              <Tab
                slotProps={{
                  root: ({ selected, disabled }) => ({
                    className: `font-sans ${
                      selected
                        ? 'text-black-600 bg-white'
                        : 'text-white bg-transparent focus:text-white hover:bg-gray-300 hover:text-[#0086C9]'
                    } ${
                      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-bold w-full p-6 m-0 gap-1.0 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
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
                        : 'text-white bg-transparent focus:text-white hover:bg-gray-300 hover:text-[#0086C9]'
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
                        : 'text-white bg-transparent focus:text-white hover:bg-gray-300 hover:text-[#0086C9]'
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
