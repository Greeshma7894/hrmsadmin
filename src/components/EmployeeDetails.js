import React from 'react';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';

const EmployeeDetails = () => {
  return (
    <div>
    <div className="left-12 rounded-lg dark:bg-black bg-white relative dark:border border-gray-700  w-80 p-1">
      <div className="flex flex-col items-start">
        <div className="mt-4 ml-5 flex items-start space-x-2 mb-4">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div>
            <div className="dark:text-white text-black font-bold text-sm">Firos A</div>
            <div className="dark:text-white text-black text-xs">firos@example.com</div>
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <EditIcon className="text-gray-400 bg-gray-700 rounded-full p-1" fontSize="small" />
        </div>
        <div className="mt-3 ml-5">
          <p className="text-gray-500 font-semibold text-xs mb-6">Primary Details</p>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="text-gray-500 text-[10px]">First Name</p>
              <p className='text-xs font-bold dark:text-white text-black'>John</p>
            </div>
            <div>
              <p className="text-gray-500  text-[10px]">Gender</p>
              <p className='text-xs font-bold dark:text-white text-black'>Male</p>
            </div>
            <div>
              <p className="text-gray-500  text-[10px]">Date of Birth</p>
              <p className='text-xs font-bold dark:text-white text-black'>24/08/2002</p>
            </div>
            <div>
              <p className="text-gray-500  text-[10px]">Blood Group</p>
              <p className='text-xs font-bold dark:text-white text-black'>24/08/1999</p>
            </div>
            <div>
              <p className="text-gray-500  text-[10px]">Blood Group</p>
              <p className='text-xs font-bold dark:text-white text-black'>O+</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px]">Marital Status</p>
              <p className='text-xs font-bold dark:text-white text-black'>Married</p>
            </div>
           
            <div>
              <p className="text-gray-500  text-[10px]">Nationality</p>
              <p className='text-xs font-bold dark:text-white text-black'>(555) 123-4567</p>
            </div>
            <div>
              <p className="text-gray-500  text-[10px]">Office Details</p>
              <p className='text-xs font-bold dark:text-white text-black'>Room 101, Building A</p>
            </div>
           
          </div>
          <div className="mt-6">
            <p className="text-green-500 font-bold text-xs ps-36" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>Your Achievements</p>
          </div>
        </div> 
      </div>
    </div>
    <div className=" ml-12  dark:border border-gray-700 dark:bg-black bg-white p-3 w-80 mt-4 h-[180px]  rounded-lg">
    <div className=" px-2.5">
      <div>
        <h1 className="text-gray-700 font-semibold h-4 text-sm">Salary Account Details</h1>
      </div>
      <div className="flex justify-between mt-2.5">
        <div>
          <h1 className="text-gray-500  mt-3 text-[10px]">Account number</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>xxxxxxxxxx2255</h1>
        </div>
        <div>
          <h1 className="text-gray-500  mt-3 text-[10px]">Bank</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>State Bank of India</h1>
        </div>
      </div>
      <div className="flex justify-between mt-2.5">
        <div>
          <h1 className="text-gray-500 mt-1  text-[10px]">Branch</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>State Bank of India</h1>
        </div>
        <div className="pe-3">
          <h1 className="text-gray-500 mt-1  text-[10px]">IFSC Code</h1>
          <h1 className='text-xs font-bold dark:text-white text-black'>675542722222</h1>
        </div>
      </div>
      <div className="flex justify-end pt-8 text-green-500 font-semibold text-xs">
        <h1 className='text-xs -mt-3'>Download Salary Slip</h1>
      </div>
    </div>
        </div>
</div>
  );
}

export default EmployeeDetails;
