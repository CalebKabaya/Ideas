import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import jobPostImage from "./jobPostImage.png"
// import { makeStyles } from "@material-ui/core/styles";

export const IdeasHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = React.useState("");
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setStatus(event.target.value);
    setDepartment(event.target.value);
  };
 

  return (
    <div className="flex flex-col justify-start items-start gap-6">
    <div className="flex-grow-0 flex-shrink-0 w-full h-[196px] rounded-2xl bg-cover bg-no-repeat bg-center border border-[#eaecf0]" 
            style={{ backgroundImage: `url(${jobPostImage})`, src: {jobPostImage} }} 
          />
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-4 p-5 rounded-xl bg-gray-50">

        <div className="flex flex-col sm:flex-row justify-start items-center flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-2">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 w-full ">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">
                Search for ideas
              </p>
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
          </div>

          <div className="flex flex-col justify-start items-start flex-grow gap-2 w-full">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">
                Status
              </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Status
                  </InputLabel>
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

          <div className="flex flex-col justify-start items-start flex-grow  w-full gap-2">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#344054]">
                Category
              </p>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Department
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                    label="Select Department "
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>IT</MenuItem>
                    <MenuItem value={20}>P&D</MenuItem>
                    <MenuItem value={30}>Life Insuarance</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* idea card */}

        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                  IT Department
                </p>
                <div className="flex flex-col sm:flex-row  justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828] gap-2 sm:gap-2">
                      Ticket
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#101828]">
                      {" "}
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
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                      Approved
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
                  View idea
                </p>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#475467]">
              We need a way to simplify the process of receiving tickets
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-sm font-s text-left text-[#344054]">
                    Upvote
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  123
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  2 comments
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  17-08-2023
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* idea card */}
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0  text-sm font-semibold text-left text-[#026aa2]">
                  IT Department
                </p>
                <div className="flex flex-col sm:flex-row  justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2 ">
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828] gap-2 sm:gap-2">
                      Ticket
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#101828]">
                      {" "}
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
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#067647]">
                      Approved
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#026aa2]">
                  View idea
                </p>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-left text-[#475467]">
              We need a way to simplify the process of receiving tickets
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm sm:text-sm font-s text-left text-[#344054]">
                    Upvote
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  123
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  2 comments
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base sm:text-sm font-medium text-left text-[#475467]">
                  17-08-2023
                </p>
              </div>
            </div>

          </div>
        </div>

    </div>
  );
};
