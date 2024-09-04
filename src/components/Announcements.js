import React, { useEffect, useState } from 'react';
import { FaUsers, FaRocket, FaSuitcaseRolling, FaUmbrellaBeach } from "react-icons/fa";
import { connectWebSocket } from '../services/AnnouncementService';
import { useQuery } from 'react-query';
import { fetchAnnouncements } from '../services/AnnouncementService';
import axios from 'axios';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  //console.log("announcements are", announcements);
  
  // Fetch initial data using REST API
  const { data: initialData, isLoading, error } = useQuery('announcements', fetchAnnouncements, {
    onSuccess: (data) => {
      // Extract announcements array from the response object
      setAnnouncements(data.data);
    },
  });

  // Connect to WebSocket for live updates
  useEffect(() => {
    const socket = connectWebSocket();

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("socket data",data);
      
      setAnnouncements((prevAnnouncements) => {
        // Combine initial announcements with live updates
        const updatedAnnouncements = [...prevAnnouncements, ...data];
        // Remove duplicates if needed (based on a unique identifier like `id`)
        return Array.from(new Set(updatedAnnouncements.map(a => a.id)))
          .map(id => updatedAnnouncements.find(a => a.id === id));
      });
    };

    return () => {
      socket.close();
    };
  }, []);

  if (isLoading) return <p>Loading announcements...</p>;
  if (error) return <p>Error loading announcements.</p>;
  if (!announcements || announcements.length === 0) {
    return <p>No announcements available.</p>;
  }

  return (
    <div className="rounded-lg dark:bg-black bg-white dark:border border-gray-700 flex flex-col overflow-hidden">
      <div className="pl-3 pt-3 text-xs text-gray-500 mb-4 flex justify-between items-center">
        <span className="font-bold max-w-1245:font-semibold max-w-1245:text-[11px]">
          Announcements
        </span>
        <span className="text-xs font-semibold text-green-500 pr-3 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="flex flex-col space-y-2 overflow-y-auto h-full pr-3 scrollbar-hide">
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className={`rounded-lg w-[93%] h-[40%] ml-4 flex items-center p-4 ${
              index % 4 === 0 ? 'bg-violet-100 dark:bg-violet-300' :
              index % 4 === 1 ? 'bg-slate-200 dark:bg-slate-300' :
              index % 4 === 2 ? 'bg-orange-100 dark:bg-orange-200' :
              'bg-rose-100 dark:bg-rose-200'
            }`}
          >
            {index % 4 === 0 && <FaUsers className="text-violet-600 text-3xl max-w-1245:text-3xl mr-4" />}
            {index % 4 === 1 && <FaRocket className="text-slate-500 text-3xl mr-4 max-w-1245:text-3xl" />}
            {index % 4 === 2 && <FaSuitcaseRolling className="text-orange-600 text-3xl max-w-1245:text-3xl mr-4" />}
            {index % 4 === 3 && <FaUmbrellaBeach className="text-rose-600 text-3xl max-w-1245:text-3xl mr-4" />}
            
            <div>
              <h2 className="dark:text-black max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                {announcement.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-800 text-xs max-w-1245:text-[8px]">
                {announcement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
