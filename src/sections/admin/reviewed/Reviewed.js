import * as React from "react";
import { useCallback } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AcceptedIdeas } from "./AcceptedIdeas";
import { DeclinedIdeas } from "./Declined";





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    
      <Box sx={{ width: "auto",display: 'grid'}}>
        <Box sx={{display: 'grid', borderBottom: 1, borderColor: "divider"}}>
          <Tabs
           variant="scrollable"
            className="tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              '& .muitabs-flexcontainer': {
                flexwrap: 'wrap',
              },
            }}          >
            <Tab label="Approved" {...a11yProps(0)} />
            <Tab label="Declined" {...a11yProps(1)} />
          </Tabs>

          
        </Box>
         {/* Profile */}

         <CustomTabPanel value={value} index={0}>
          <AcceptedIdeas />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <DeclinedIdeas />
        </CustomTabPanel>
      </Box>
      
  );
}
