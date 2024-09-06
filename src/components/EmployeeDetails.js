import React from "react";
import { useQuery } from "react-query";
import { fetchUserProfile } from "../services/ProfileService";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";

import ApplyLeave from "./ApplyLeave";
import SalaryDetails from "./SalaryDetails";
import Achievements from "./Achievements";

const EmployeeDetails = () => {
  const { data, error, isLoading } = useQuery("userProfile", fetchUserProfile);
  //const token = localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6NCwiUHJpdmlsZWdlIjoxLCJSb2xlIjoiRU1QTE9ZRUUiLCJpYXQiOjE3MjQ5MDUyNDl9.q6IMwNwcK6-Ld4Pi-aUA8eiIegpX8Ao47ellXqfZEWU")
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching user profile: {error.message}</div>;

  // Render user profile data when available
  console.log("data is", data);
  //console.log("token is",token)
    
  // console.log('Is Data Defined:', data !== undefined);
  // console.log('Is Data Empty:', !data || Object.keys(data).length === 0);
  // console.log("greeshma",data.first_name);

  return (
    <div className="flex flex-col w-full mt-0 items-center h-full">
      <div className="relative w-full h-[59%] max-w-1245:h-[57%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-0 rounded-lg">
        <div className="px-2.5">
          <div className="flex max-w-1245:-mt-2 items-start justify-between">
            <div className="flex items-start space-x-2 mb-4">
              <Avatar
                alt="Remy Sharp"
                src={data.image || "/static/images/avatar/1.jpg"}
              />
              <div>
                <div className="dark:text-white max-w-1245:font-semibold text-black font-bold text-sm">
                  {data.first_name} {data.middle_name} {data.last_name}
                </div>
                <div className="dark:text-white max-w-1245:text-[9px] text-black text-xs">
                  {data.email}
                </div>
              </div>
            </div>
            <div className="mt-1  max-w-1245:mt-1">
              <EditIcon
                className="text-gray-400 bg-gray-700 rounded-full p-1"
                fontSize="small"
              />
            </div>
          </div>

          <div className="max-w-1245:mt-1 mt-5">
            <h1 className="text-gray-500  max-w-1245:font-semibold max-w-1245:text-[10px] min-w-1245:font-semibold min-w-1245:text-xs mb-4 max-w-1245:mb-8">
              Primary Details
            </h1>
         
          <div className="max-w-1245:-mt-6 min-w-1245:-space-y-1">
            <div className="grid grid-cols-2 gap-4 mt-2 text-gray-300">
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1  min-w-1245:text-xs text-gray-500 text-[10px] lg:text-xs">
                  First Name
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.first_name}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Gender
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.gender}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Date of Birth
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold max-w-1245:text-[10px] min-w-1245:font-semibold dark:text-white text-black">
                  {new Date(data.date_of_birth).toLocaleDateString()}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Blood Group
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.blood_group}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Marital Status
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.marital_status}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Nationality
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.nationality}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 text-[10px] lg:text-xs">
                  Designation
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] min dark:text-white text-black">
                  {data.designation} 
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
                  {data.office_ph_no}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] min-w-1800:mt-5 max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Office Email
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.office_email}
                </h1>
              </div>
              <div>
                <h1 className="max-w-1245:text-[10px] max-w-1245:-mt-1 text-gray-500 md:text-[10px] lg:text-xs">
                  Personal Number
                </h1>
                <h1 className="text-xs max-w-1245:font-semibold min-w-1245:font-semibold max-w-1245:text-[10px] dark:text-white text-black">
                  {data.ph_no}
                </h1>
              </div>
            </div>
          </div>

          <h1 className="absolute min-w-1245:bottom-2 max-w-1245:bottom-2 max-w-1245:text-[10px] right-4 text-green-500 font-semibold text-xs cursor-pointer hover:underline">
            View more
          </h1>
        </div>
        </div>
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg">
        <ApplyLeave />
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg  items-center justify-between">
        <SalaryDetails />
      </div>

      <div className="relative w-full h-[12%] dark:border border-gray-700 dark:bg-black bg-white p-4 mt-2 top-1 max-w-1245:mt-2 rounded-lg flex items-center cursor-pointer">
        <Achievements />
      </div>
    </div>
  );
};

export default EmployeeDetails;