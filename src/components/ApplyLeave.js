import React from 'react';
import { useLeaveData } from '../services/LeaveService'; // Assuming you have a leaveService.js file

const ApplyLeave = () => {
  // Example to fetch the most recent leave data
  const { data: leaveData, isLoading, isError } = useLeaveData({ limit: 1, sort: 'desc' });
  console.log("leave status",leaveData);
  

  // Determine the status to display
  let statusText = 'Loading...';
  if (isError) {
    statusText = 'Error fetching status';
  } else if (!isLoading && leaveData && leaveData.length > 0) {
    statusText = leaveData[0].status; // Adjust based on your API response structure
    console.log(statusText);
    
  } else if (!isLoading) {
    statusText = 'No previous leave';
  }

  return (
    <div>
      <div className="">
        {/* Button and leave status section */}
        <div className="max-w-1245:mt-1 flex rounded-lg h-full items-center mt-1">
          <div className='h-[40px] max-w-1245:h-[20px]'>
            <button className="bg-lime-500 dark:text-black text-white max-w-1245:text-[10px] px-3 py-2.5 max-w-1245:py-2 min-w-1245:-mt-0 max-w-1245:-mt-2 rounded-lg flex items-center text-xs">
              Apply Leave
            </button>
          </div>
          <div className="flex flex-col ml-2">
            <p className="dark:text-gray-300 max-w-1245:-mt-2 max-w-1245:text-[10px] text-gray-800 text-xs -mt-1">
              Previous leave Status
            </p>
            <p className="dark:text-white max-w-1245:text-xs max-w-1245:font-semibold text-black text-base -mt-1 max-w-1245:-mt-1 font-semibold">
              {statusText}
            </p>
          </div>
        </div>

        {/* "View All" text */}
        <p className="absolute top-2 max-w-1245:text-[10px] max-w-1245:top-1 right-4 text-green-500 text-xs font-semibold cursor-pointer hover:underline">
          View All
        </p>
      </div>
    </div>
  );
}

export default ApplyLeave;
