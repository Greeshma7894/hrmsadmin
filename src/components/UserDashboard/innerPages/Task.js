import { useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSendSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import image from "../Ai Profile image.png"; // Placeholder image

const Task = ({ task }) => {
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  console.log("Task Data:", task);

  const handleVoiceClick = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          console.log("Audio recorded:", audioUrl);
          setAudioChunks([...chunks]);
        };

        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-1245:mx-10 mx-12">
      <div className="flex justify-start max-w-1245:text-[13px] max-w-1245:mt-3 mt-6 text-lg font-semibold">
        <h1 className="ps-2 max-w-1245:ps-0">Task Details</h1>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 mt-3">
        <h1 className="font-semibold text-sm max-w-1245:text-[12px] text-black -mt-1 max-w-1245:-mt-2">
          {task.title}
        </h1>
        <br />
        <p className="text-sm -mt-4 max-w-1245:text-[11px]">{task.description}</p>
        <div className="flex justify-between items-center mt-8 max-w-1245:mt-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 w-7 h-7 rounded-full overflow-hidden">
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-[13px] max-w-1245:text-[11px] text-gray-700">
              <p>Reporting person</p>
              <p className="font-medium -mt-1 text-black">
                {task.reporting_to.map(person => person.name).join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <div className="p-2 rounded-lg">
              <svg
                className="w-5 h-6 max-w-1245:w-4 max-w-1245:h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-[13px] max-w-1245:text-[11px] text-gray-700">
              <p>Deadline</p>
              <p className="font-medium -mt-1 text-black">{new Date(task.completion_time).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 w-full">
        <div className="border w-2/3 max-w-1245:my-2 border-gray-300 rounded-xl p-3 max-w-1245:p-2 my-4 h-[42px] max-w-1245:h-[38px] flex justify-between items-center">
          <p className="text-[13px] font-semibold ps-2 max-w-1245:text-[11px] text-black">
            Update Work Status
          </p>
          <div className="text-gray-600 text-sm rounded-lg max-w-1245:text-[11px]">
            <p className={`font-medium ${task.status === 'Completed' ? 'text-green-500' : task.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
              {task.status}
            </p>
          </div>
        </div>

        <div className="mt-4 max-w-1245:mt-2 w-1/3">
          <button className="w-full bg-lime-500 max-w-1245:h-[36px] max-w-1245:text-xs text-black font-medium py-2 rounded-xl">
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border bg-gray-200 border-gray-300 w-[90%] max-w-1245:w-[88%] rounded-lg flex items-center justify-between h-auto max-h-[100px] px-4 py-2">
          <textarea
            className="flex-grow text-sm max-w-1245:text-[11px] bg-gray-200 resize-none focus:outline-none"
            placeholder="Your comments"
            rows="1"
          ></textarea>
          <div className="flex items-center space-x-3">
            {/* Attachment Icon */}
            <GrAttachment
              className="text-gray-600 text-lg max-w-1245:text-[15px] cursor-pointer"
              onClick={handleAttachmentClick}
            />
            <MdKeyboardVoice
              className={`text-lg max-w-1245:text-[15px] cursor-pointer ${
                isRecording ? "text-lime-500 animate-pulse wave-animation" : "text-gray-600"
              }`}
              onClick={handleVoiceClick}
            />
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log("File selected:", file);
                  // Add your logic to handle the uploaded file here
                }
              }}
            />
          </div>
        </div>

        <div className="cursor-pointer flex items-center justify-center bg-gray-200 rounded-lg p-2 h-[40px] max-w-1245:h-[35px] w-[40px]">
          <IoSendSharp className="text-gray-600 text-lg max-w-1245:text-[15px]" />
        </div>
      </div>

      <div className="mt-2 max-w-1245:mt-1">
        <h2 className="text-sm max-w-1245:text-[11px] font-medium text-black mb-2">
          Recent comments
        </h2>

        <div className="space-y-3 max-w-1245:space-y-2 overflow-y-scroll pr-4 scrollbar-hide">
          <div className="text-black font-medium max-w-1245:text-[10px] text-xs flex justify-center items-center">
            17 Apr, 2024
          </div>
          <div className="flex space-x-2">
            <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full"></div>
            <div className="text-[13px] max-w-1245:text-[10px] bg-lime-100 text-black p-2 px-2 max-w-1245:p-1.5 rounded-md">
              Any doubts?
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full"></div>
            <div className="text-[13px] max-w-1245:text-[10px] text-black bg-lime-100 max-w-1245:p-1.5 p-2 px-3 rounded-md">
              No, all clear.
            </div>
          </div>

          <div className="flex space-x-2 justify-end">
            <div className="text-[13px] max-w-1245:text-[10px] font-medium text-black bg-gray-200 p-2 px-2 rounded-md">
              OK, understood.
            </div>
            <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full"></div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full"></div>
            <div className="text-[13px] max-w-1245:text-[10px] text-black bg-lime-100 max-w-1245:p-1.5 p-2 px-3 rounded-md">
              Did you get the task?
            </div>
          </div>

          <div className="flex space-x-2 justify-end">
            <div className="text-[13px] max-w-1245:text-[10px] font-medium text-black bg-gray-200 p-2 px-2 rounded-md">
              Yes, working on it
            </div>
            <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Task;
