import * as React from "react";
import { useCallback } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Notifications } from "./terms&condition";
import { Terms } from "./notification";
import { IdeasHistory } from "./ideashistory";
import { Profile } from "./profile";

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
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{display: 'grid', borderBottom: 1, borderColor: "divider" }}>
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
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Ideas History" {...a11yProps(1)} />
            <Tab label="Notification" {...a11yProps(2)} />
            <Tab label="Terms of Service" {...a11yProps(3)} />
          </Tabs>
        </Box>
        {/* Profile */}

        <CustomTabPanel value={value} index={0}>
          <Profile />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <IdeasHistory />
        </CustomTabPanel>
        {/* Terms  */}

        <CustomTabPanel value={value} index={2}>
          <Terms />
        </CustomTabPanel>

        {/* Notification  */}
        <CustomTabPanel value={value} index={3}>
          <Notifications />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
