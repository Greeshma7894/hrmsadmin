import React from 'react'
import { FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <div>
      <div className="flex items-center cursor-pointer">
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
  )
}

export default Achievements
