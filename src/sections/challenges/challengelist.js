import * as React from 'react';
import { Link } from 'react-router-dom';

import CardImage from './Image.png';
import CardImage2 from './Image-2.png';

export default function ChallengesList() {
  return (
    <Link to="/header">
      <div className="flex flex-col justify-start items-start gap-6">
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-[27px] p-4 rounded-xl bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
        >
            
          <div
            className="flex-grow-0 flex-shrink-0 lg:w-[200px] md:w-[200px] sm:w-[200px] xs:w-[200px] h-36 relative overflow-hidden rounded-lg b"
            style={{ backgroundImage: `url(${CardImage})`, src: { CardImage } }}
          >
            <div className="flex justify-start items-center absolute left-2 top-[114px] gap-1 pl-1.5 pr-2 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6]">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.5 7.54513V11L5.85144 10.0594C5.90632 10.0375 5.93376 10.0265 5.9621 10.0221C5.98722 10.0183 6.01278 10.0183 6.0379 10.0221C6.06624 10.0265 6.09368 10.0375 6.14856 10.0594L8.5 11V7.54513M9.75 4.75C9.75 6.82107 8.07107 8.5 6 8.5C3.92893 8.5 2.25 6.82107 2.25 4.75C2.25 2.67893 3.92893 1 6 1C8.07107 1 9.75 2.67893 9.75 4.75Z"
                  stroke="#17B26A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">New challange</p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start flex-grow relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#4d0039]" />
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                  Digital transformation challenge
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0  text-left text-sm sm:text-xs text-[#475467]">202 Participants</p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative">
              <div className="flex justify-start items-start absolute left-0 top-[3px] gap-6">
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
                      d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M7.5 13.3333L9.16667 15L12.9167 11.25M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                      stroke="#98A2B3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 font-medium text-sm sm:text-xs text-left text-[#475467]">
                    May -2023 -Present{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#026aa2]">View Challenge</p>
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
                d="M5.83398 14.1667L14.1673 5.83333M14.1673 5.83333H5.83398M14.1673 5.83333V14.1667"
                stroke="#026AA2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-[27px] p-4 rounded-xl bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
        >
          <div
            className="flex-grow-0 flex-shrink-0 lg:w-[200px] md:w-[200px] sm:w-[200px] xs:w-[200px] h-36 relative overflow-hidden rounded-lg  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${CardImage2})`, src: { CardImage2 } }}
          />

          <div className="flex flex-col justify-start items-start flex-grow relative gap-4">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#4d0039]" />
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-medium text-left text-[#101828]">
                  Digital transformation challenge
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0  text-sm sm:text-xs text-left text-[#475467]">202 Participants</p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative">
              <div className="flex justify-start items-start absolute left-0 top-[3px] gap-6">
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
                      d="M17.5 8.33334H2.5M13.3333 1.66667V5.00001M6.66667 1.66667V5.00001M7.5 13.3333L9.16667 15L12.9167 11.25M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.93321 17.5 5.23314 17.2275 4.69836C16.9878 4.22796 16.6054 3.84551 16.135 3.60582C15.6002 3.33334 14.9001 3.33334 13.5 3.33334H6.5C5.09987 3.33334 4.3998 3.33334 3.86502 3.60582C3.39462 3.84551 3.01217 4.22796 2.77248 4.69836C2.5 5.23314 2.5 5.93321 2.5 7.33334V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                      stroke="#98A2B3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm  sm:text-xs font-medium text-left text-[#475467]">
                    May -2023 -Present{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#026aa2]">View Challenge</p>
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
                d="M5.83398 14.1667L14.1673 5.83333M14.1673 5.83333H5.83398M14.1673 5.83333V14.1667"
                stroke="#026AA2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}