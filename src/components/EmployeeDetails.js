import React from "react";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import { FaDownload } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const EmployeeDetails = () => {
  return (
    <div className="flex flex-col w-full mt-0 items-center h-full">
      <div className="relative w-full  h-[59%] max-w-1245:h-[57%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-0 rounded-lg">
        <div className="px-2.5">
          <div className="flex max-w-1245:-mt-2 items-start  justify-between">
            <div className="flex  items-start space-x-2 mb-4">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div>
                <div className="dark:text-white max-w-1245:font-semibold text-black font-bold text-sm">
                  Firos A
                </div>
                <div className="dark:text-white max-w-1245:text-[9px] text-black text-xs">
                  firos@example.com
                </div>
              </div>
            </div>
            <div className="mt-1 max-w-1245:mt-1">
              <EditIcon
                className="text-gray-400 bg-gray-700 rounded-full p-1"
                fontSize="small"
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-gray-500 max-w-1245:font-semibold max-w-1245:text-[10px] min-w-1245:font-semibold min-w-1245:text-xs mb-8">
              Primary Details
            </h1>
          </div>
          <div className=" max-w-1245:-mt-6 min-w-1245:-space-y-1">
            <div className="grid  grid-cols-2 gap-4 text-gray-300">
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 min-w-1245:text-xs text-gray-500 text-[10px] lg:text-xs">
                  First Name
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  John
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Gender
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  Male
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Date of Birth
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold max-w-1245:text-[10px] min-w-1245:font-semibold dark:text-white text-black">
                  24/08/2002
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Blood Group
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  A+
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Blood Group
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  O+
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Marital Status
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  Married
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Nationality
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  (555) 123-4567
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Office Details
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] min dark:text-white text-black">
                  Room 101, Building
                </h1>
              </div>
            </div>

            {/* Fields to show only on min-w-1440 */}
            <div className="hidden min-w-1800:grid grid-cols-2 gap-4 text-gray-300 mt-4">
              <div>
                <h1 className="min-w-1245:text-[10px] min-w-1800:mt-5 max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Office Number
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  9841254785
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] min-w-1800:mt-5 max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Office Email
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  firos@teqbae.com
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Personal Number
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  (555) 123-4567
                </h1>
              </div>
            </div>
          </div>

          <h1 className="absolute min-w-1245:bottom-2 max-w-1245:bottom-2 max-w-1245:text-[10px] right-4 text-green-500 font-semibold text-xs cursor-pointer hover:underline">
            View more
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg">
        {/* Button and leave status section */}
        <div className="max-w-1245:mt-1 flex rounded-lg h-full items-center mt-1">
          <div>
            <button className="bg-lime-500 dark:text-black text-white max-w-1245:text-xs px-3 py-2 -mt-1 rounded-lg flex items-center text-xs">
              Apply Leave
            </button>
          </div>
          <div className="flex flex-col ml-2">
            <p className="dark:text-gray-300 max-w-1245:-mt-2  max-w-1245:text-[10px] text-gray-800 text-xs -mt-1">
              Previous leave Status
            </p>
            <p className="dark:text-white max-w-1245:text-xs max-w-1245:font-semibold  text-black text-base -mt-1 max-w-1245:-mt-1 font-semibold">
              Approved
            </p>
          </div>
        </div>

        {/* "View All" text */}
        <p className="absolute top-2 max-w-1245:text-[10px] max-w-1245:top-1 right-4 text-green-500 text-xs font-semibold">
          View All
        </p>

        {/* "Pending Leaves" and "Leave Info" texts */}
        <div className="dark:bg-black bg-white top-3 w-full rounded-xl dark:border border-gray-800 p-4 h-2/6 relative mt-2">
          <div className="font-bold text-xs text-gray-500 -mt-3 flex">
            Pending Leaves
          </div>
          <div className="absolute top-2 right-4 text-green-500 text-xs font-semibold">
            Leave Info
          </div>
        </div>
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg flex items-center justify-between">
        <div className="flex max-w-1245:-ml-1 items-center">
          <FaDownload className="text-gray-600 text-2xl ml-1" />
          <div className="dark:text-white  text-black ml-3">
            <h3 className="font-semibold max-w-1245:text-xs">Salary Slip</h3>
            <p className="text-xs max-w-1245:text-[9px] dark:text-gray-300 text-gray-800">
              Download your latest salary slip
            </p>
          </div>
        </div>
        <button className="max-w-1245:-mt-1 max-w-1245:-mr-2 max-w-1245:text-[10px] dark:text-black text-xs bg-lime-500 text-white max-w-1245:px-2 px-3 py-2 rounded-lg flex items-center">
          Download
        </button>
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg flex items-center cursor-pointer">
        <FaTrophy className=" text-yellow-400 max-w-1245:text-2xl text-3xl ml-2" />
        <div className="dark:text-white text-black ml-4">
          <h3 className="font-semibold max-w-1245:text-xs">
            View Achievements
          </h3>
          <p className="text-xs dark:text-gray-300 max-w-1245:text-[10px] text-gray-800">
            Click here to see your achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
