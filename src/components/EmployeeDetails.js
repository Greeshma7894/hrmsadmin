import React from 'react';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';

const EmployeeDetails = () => {
  return (
    <div className="flex flex-col  w-full mt-0 items-center h-full">
     <div className="relative w-full h-3/4 dark:border border-gray-700 dark:bg-black bg-white p-4 mt-0 rounded-lg">
  <div className="px-2.5">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-2 mb-4">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div>
          <div className="dark:text-white text-black font-bold text-sm">Firos A</div>
          <div className="dark:text-white text-black text-xs">firos@example.com</div>
        </div>
      </div>
      <div className="mt-1">
        <EditIcon className="text-gray-400 bg-gray-700 rounded-full p-1" fontSize="small" />
      </div>
    </div>
    
    <div className="mt-3">
      <h1 className="text-gray-500 font-semibold text-xs mb-6">Primary Details</h1>
      <div className="grid grid-cols-2 gap-4 text-gray-300">
        <div>
          <h1 className="text-gray-500 text-[10px]">First Name</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>John</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Gender</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>Male</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Date of Birth</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>24/08/2002</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Blood Group</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>24/08/1999</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Blood Group</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>O+</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Marital Status</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>Married</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Nationality</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>(555) 123-4567</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-[10px]">Office Details</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>Room 101, Building A</h1>
        </div>
      </div>
    </div>

    <h1 className="absolute bottom-3 right-4 text-green-500 font-semibold text-xs cursor-pointer hover:underline" >
      Your Achievements
    </h1>
  </div>
</div>



<div className="relative w-full  h-2/5 dark:border border-gray-700 dark:bg-black bg-white p-4 mt-4 rounded-lg">
  <div className="">
    <div>
      <h1 className="text-gray-700 font-semibold text-sm dark:text-gray-300">
        Salary Account Details
      </h1>
    </div>
    <div className="flex flex-wrap justify-between mt-2.5">
      <div className="w-1/2 mb-2">
        <h1 className="text-gray-500 mt-3 text-[10px] dark:text-gray-400">
          Account Number
        </h1>
        <h1 className="text-xs font-bold dark:text-white text-black">
          xxxxxxxxxx2255
        </h1>
      </div>
      <div className="w-1/2 mb-2">
        <h1 className="text-gray-500 mt-3 text-[10px] dark:text-gray-400">
          Bank
        </h1>
        <h1 className="text-xs font-bold dark:text-white text-black">
          State Bank of India
        </h1>
      </div>
    </div>
    <div className="flex flex-wrap justify-between mt-2.5">
      <div className="w-1/2 mb-2">
        <h1 className="text-gray-500 mt-1 text-[10px] dark:text-gray-400">
          Branch
        </h1>
        <h1 className="text-xs font-bold dark:text-white text-black">
          State Bank of India
        </h1>
      </div>
      <div className="w-1/2 mb-2">
        <h1 className="text-gray-500 mt-1 text-[10px] dark:text-gray-400">
          IFSC Code
        </h1>
        <h1 className="text-xs font-bold dark:text-white text-black">
          675542722222
        </h1>
      </div>
    </div>
    <h1 className="absolute bottom-4 right-4 text-green-500 font-semibold text-xs cursor-pointer hover:underline">
      Download Salary Slip
    </h1>
  </div>
</div>


    </div>
  );
};

export default EmployeeDetails;
