import React from 'react';
import { FaBirthdayCake } from "react-icons/fa";
import { useBirthdayUsers } from '../services/EventService'; // Import the correct hook

const Events = () => {
  const { data: birthdayUsers, isLoading, isError } = useBirthdayUsers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading events</p>;

  // Ensure the data is an array before using .map
  if (!Array.isArray(birthdayUsers)) {
    return <p>No birthday data available.</p>;
  }

  return (
    <div className="">
      <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
        <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
          Upcoming events
        </span>
        <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
        {birthdayUsers.map((user, index) => (
          <div key={index} className="ps-4 flex items-center space-x-2">
            <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
              <FaBirthdayCake className="text-orange-400 w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="dark:text-white text-black font-semibold text-xs max-w-1245:text-[11px]">
                {user.name},{" "}
                <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
                  has Birthday
                </span>
              </span>
              <span className="text-[12px] text-gray-500">
                {new Date(user.date_of_birth).toLocaleDateString()} {/* Adjust date formatting if needed */}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
