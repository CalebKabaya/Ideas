import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { authentication } from 'src/pages/extentionsfunctions';
import { Grid, Container, Typography, Stack, Button } from '@mui/material';


export const PdfDownloadButton = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [ideas, setIdeas] = useState([]);

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
  }, [accessToken]); // Fetch ideas whenever accessToken changes
  console.log(ideas,'pdf ideas');


  const fetchDataAndGeneratePDF = () => {
    if (ideas.length === 0) {
      alert('No data available yet. Please wait for the data to load.');
      return;
    }
  
    const pdf = new jsPDF();
    pdf.text(10, 10, "API Data:");
  
    let y = 20;
    for (const idea of ideas) {
      pdf.text(10, y, `Idea ID: ${idea.title}`);
      y += 10;
      // Add more fields as needed
    }
  
    pdf.save("Ideas_Report.pdf");
  };

  if (accessToken === null) {
    return 'Loading';
  }

  return (
    // <div>
    //   <button onClick={fetchDataAndGeneratePDF}>Download PDF</button>
    // </div>
    <Button
              type="submit"
              cursor="pointer"
              onClick={fetchDataAndGeneratePDF}
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
            </Button>
  );
};
