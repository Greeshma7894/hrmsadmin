import React from "react";
import { ImProfile } from "react-icons/im"; // Import contact icon
import { BsCalendarDate } from "react-icons/bs"; // Import date icon
import { FaUpload } from "react-icons/fa";

const Task = () => {
  return (
    <div>
      <div className="flex justify-start mt-6 mx-12 text-lg font-semibold">
        <h1>Task Details</h1>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 mx-12 mt-4">
        <h1 className="font-semibold text-sm text-black">Send mail to client</h1>
        <br />
        <p className="text-sm -mt-2">
          In Publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a type
          face without relying on meaningful content.
        </p>
        <div class="flex justify-around items-center mt-8">
          <div class="flex items-center space-x-2">
            <div class="bg-gray-200 p-2 rounded-lg">
              <svg
                class="w-6 h-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.67 0-8 1.334-8 4v1h16v-1c0-2.666-5.33-4-8-4z"
                />
              </svg>
            </div>
            <div class="text-[13px] text-gray-700">
              <p>Reporting person</p>
              <p class="font-medium text-black">Riyas V</p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <div class="bg-gray-200 p-2 rounded-lg">
              <svg
                class="w-6 h-6  text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="text-[13px] text-gray-700">
              <p>Deadline</p>
              <p class="font-medium text-black">17 Apr, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-gray-200 border-gray-300 rounded-lg p-3 mx-12 my-4">
        <p className="text-sm ml-8" contentEditable="true">
          Work Status*
        </p>
      </div>

      <div className="border border-gray-300 rounded-xl p-3 mx-12 my-4 flex items-center">
        <div className="bg-gray-300 rounded-lg p-2">
          <FaUpload className="text-gray-600" />
        </div>
        <p className="text-sm font-semibold ml-4 text-black">Upload Work Images</p>
      </div>
      <div className="border bg-gray-200 border-gray-300 rounded-lg mx-12 w-64 flex h-[80px]">
        <p className="text-sm mt-3 ml-6">Comments</p>
      </div>
      <div className="mt-2 ml-24">
      <h2 class="text-sm font-medium text-black mb-2">Recent comments</h2>
      <div class="space-y-4">
        <div class="text-black font-medium text-xs ml-24">17 Apr, 2024</div>
        <div class="flex space-x-2">
          <div class="bg-gray-200 w-9 rounded-full"></div>
          <div class="text-sm bg-gray-100 text-black p-2 rounded-md ">Any doubts?</div>
        </div>
        <div class="flex space-x-2">
          <div class="bg-gray-200 w-9 rounded-full"></div>
          
          <div class="text-sm text-black bg-gray-100 p-2 rounded-md ">No, all clear.</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Task;
