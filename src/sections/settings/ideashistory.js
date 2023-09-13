import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
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
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1096px] gap-4 p-5 rounded-xl bg-gray-50">
        <div className="flex justify-start items-center flex-grow gap-3">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[360px] gap-2">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
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
                  sx={{ width: 600 }}
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
          <div className="flex flex-col justify-start items-start flex-grow gap-2">
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
          <div className="flex flex-col justify-start items-start flex-grow gap-2">
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
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
                  IT Department
                </p>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
                      Ticket
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#101828]">
                      {" "}
                      automation
                    </span>
                  </p>
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
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.83301 14.1667L14.1663 5.83333M14.1663 5.83333H5.83301M14.1663 5.83333V14.1667"
                    stroke="#026AA2"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
              We need a way to simplify the process of receiving tickets
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8.16699 17.5C7.93364 17.5 7.81696 17.5 7.72783 17.4546C7.64943 17.4146 7.58569 17.3509 7.54574 17.2725C7.50033 17.1834 7.50033 17.0667 7.50033 16.8333V8.33333H4.16699L10.0003 2.5L15.8337 8.33333H12.5003V16.8333C12.5003 17.0667 12.5003 17.1834 12.4549 17.2725C12.415 17.3509 12.3512 17.4146 12.2728 17.4546C12.1837 17.5 12.067 17.5 11.8337 17.5H8.16699Z"
                      stroke="#344054"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                    Upvote
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  123
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M6.25 10H6.25833M10 10H10.0083M13.75 10H13.7583M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 10.9976 2.69478 11.9497 3.04839 12.8204C3.11606 12.9871 3.1499 13.0704 3.165 13.1377C3.17976 13.2036 3.18516 13.2524 3.18517 13.3199C3.18518 13.3889 3.17265 13.4641 3.14759 13.6145L2.65344 16.5794C2.60169 16.8898 2.57582 17.0451 2.62397 17.1573C2.66611 17.2556 2.7444 17.3339 2.84265 17.376C2.95491 17.4242 3.11015 17.3983 3.42063 17.3466L6.38554 16.8524C6.53591 16.8273 6.61109 16.8148 6.68011 16.8148C6.74763 16.8148 6.79638 16.8202 6.86227 16.835C6.92962 16.8501 7.01294 16.8839 7.17958 16.9516C8.05025 17.3052 9.00238 17.5 10 17.5ZM6.66667 10C6.66667 10.2301 6.48012 10.4167 6.25 10.4167C6.01988 10.4167 5.83333 10.2301 5.83333 10C5.83333 9.76988 6.01988 9.58333 6.25 9.58333C6.48012 9.58333 6.66667 9.76988 6.66667 10ZM10.4167 10C10.4167 10.2301 10.2301 10.4167 10 10.4167C9.76988 10.4167 9.58333 10.2301 9.58333 10C9.58333 9.76988 9.76988 9.58333 10 9.58333C10.2301 9.58333 10.4167 9.76988 10.4167 10ZM14.1667 10C14.1667 10.2301 13.9801 10.4167 13.75 10.4167C13.5199 10.4167 13.3333 10.2301 13.3333 10C13.3333 9.76988 13.5199 9.58333 13.75 9.58333C13.9801 9.58333 14.1667 9.76988 14.1667 10Z"
                    stroke="#98A2B3"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  2 comments
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  17-08-2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1096px] gap-6 px-6 pt-6 pb-7 rounded-2xl bg-white border border-[#eaecf0]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[933px] text-sm font-semibold text-left text-[#026aa2]">
                  IT Department
                </p>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-7 relative gap-2">
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#101828]">
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#101828]">
                      Ticket
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#101828]">
                      {" "}
                      automation
                    </span>
                  </p>
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
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1048px] text-base text-left text-[#475467]">
              We need a way to simplify the process of receiving tickets
            </p>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                    Upvote
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  123
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  2 comments
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#475467]">
                  17-08-2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
