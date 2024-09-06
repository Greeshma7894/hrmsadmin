import React from "react";
import { FaBirthdayCake, FaUserTie, FaUserPlus } from "react-icons/fa";
import {
  useBirthdayUsers,
  useWorkAnniversaryUsers,
  useNewJoinees,
} from "../../services/EventService";

const Events = () => {
  const {
    data: birthdayUsers,
    isLoading: isLoadingBirthday,
    isError: isErrorBirthday,
  } = useBirthdayUsers();
  const {
    data: workAnniversaryUsers,
    isLoading: isLoadingAnniversary,
    isError: isErrorAnniversary,
  } = useWorkAnniversaryUsers();
  const {
    data: newJoinees,
    isLoading: isLoadingNewJoinees,
    isError: isErrorNewJoinees,
  } = useNewJoinees();

  if (isLoadingBirthday || isLoadingAnniversary || isLoadingNewJoinees)
    return <p>Loading...</p>;
  if (isErrorBirthday || isErrorAnniversary || isErrorNewJoinees)
    return <p>Error loading events</p>;

  const renderEvent = (users, icon, eventLabel) =>
    users.map((user, index) => (
      <div key={index} className="ps-4 flex items-center space-x-2">
        <div className="relative w-10 h-10 overflow-hidden bg-orange-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="dark:text-white text-black font-semibold text-xs max-w-1245:text-[11px]">
            {user.name},{" "}
            <span className="text-[12px] text-gray-600 max-w-1245:text-[10px]">
              {eventLabel}
            </span>
          </span>
          <span className="text-[12px] text-gray-500">
            {eventLabel.includes("Birthday")
              ? new Date(user.date_of_birth).toLocaleDateString()
              : eventLabel.includes("Work Anniversary")
              ? `${
                  new Date().getFullYear() - new Date(user.years).getFullYear()
                } years`
              : `${user.department} Department`}
          </span>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col h-full">
      <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
        <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
          Upcoming Events
        </span>
        <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="space-y-4 overflow-y-scroll h-full scrollbar-hide">
        {/* Employees who have Birthday this month */}
        {birthdayUsers &&
          renderEvent(
            birthdayUsers,
            <FaBirthdayCake className="text-orange-400 w-6 h-6" />,
            "has Birthday"
          )}

        {/* Employee who have work anniversary */}
        {workAnniversaryUsers &&
          renderEvent(
            workAnniversaryUsers,
            <FaUserTie className="text-violet-600 dark:text-violet-500 w-6 h-6" />,
            "has Work Anniversary"
          )}

        {/* NewJoinee */}
        {newJoinees &&
          renderEvent(
            newJoinees,
            <FaUserPlus className="text-rose-600 dark:text-rose-400 w-6 h-6" />,
            "is a New Joinee"
          )}
      </div>
    </div>
  );
};

export default Events;
