import { useCallback } from 'react';

import Switch from '@mui/material/Switch';

export const Terms = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
   
  return (
    <div className="">

    <form onSubmit={handleSubmit}>

      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 px-8">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1096px] text-lg font-semibold text-left text-[#101828]">
            Notification settings
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1096px] text-sm text-left text-[#475467]">
            We may still send you important notifications about your account outside of your
            notification settings.
          </p>
        </div>
      </div>
     
    </div>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[280px] relative">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm font-semibold text-left text-[#344054]">
            Comments
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-[#475467]">
            These are notifications for comments on your posts and replies to your comments.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[512px] gap-4">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
              <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Push
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
                <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[280px] relative">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm font-semibold text-left text-[#344054]">
            Votes
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-[#475467]">
            These are notifications for when someone votes votes on your idea.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[512px] gap-4">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Push
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[280px] relative">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm font-semibold text-left text-[#344054]">
            Reminders
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-[#475467]">
            These are notifications to remind you of updates you might have missed.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[512px] gap-4">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Push
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-9 h-5 relative  p-0.5 rounded-xl ">
            <Switch {...label} defaultChecked />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[468px] text-sm font-medium text-left text-[#344054]">
                Email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#eaecf0]" />
    </div>
  </div>
</div>
    </form>
    </div>
  );
};
