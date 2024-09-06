import React from 'react'
import { FaDownload } from "react-icons/fa";

const SalaryDetails = () => {
  return (
    <div>
      <div className=" flex  items-center justify-between">
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
    </div>
  )
}

export default SalaryDetails
