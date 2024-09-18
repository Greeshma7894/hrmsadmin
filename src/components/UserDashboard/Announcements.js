import React, { useEffect, useState } from "react";
import { FaUsers, FaRocket, FaSuitcaseRolling, FaUmbrellaBeach } from "react-icons/fa";
import { fetchInitialAnnouncements, fetchAnnouncements } from "../../services/AnnouncementService";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch initial data from REST API
    const fetchInitialData = async () => {
      try {
        const initialData = await fetchInitialAnnouncements();
        //console.log('Fetched Announcements:', initialData.data); // Log fetched data
        setAnnouncements(Array.isArray(initialData.data) ? initialData.data : []); // Ensure state is an array
      } catch (error) {
        console.error('Error fetching initial announcements:', error);
        setAnnouncements([]); // Ensure state is an array in case of error
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();

    // Create WebSocket connection and pass a callback to update state
    const socket = fetchAnnouncements((newAnnouncement) => {
      if (newAnnouncement && typeof newAnnouncement === 'object') {
        setAnnouncements((prevAnnouncements) => [
          newAnnouncement,
          ...prevAnnouncements,
        ]);
      }
    });

    // Cleanup WebSocket connection on component unmount
    return () => {
      if (socket && typeof socket.close === 'function') {
        socket.close();
      }
    };
  }, []);

  // Loading state check
  if (isLoading) return <div>Loading...</div>;

  // Check if announcements array has data
  if (!Array.isArray(announcements)) {
    return <div>Error: Invalid announcements data.</div>;
  }

  if (announcements.length === 0) return <div>No announcements available.</div>;

  // Define possible announcement types and icons
  const announcementTypes = [
    { type: "team-meeting", icon: <FaUsers className="text-violet-600 text-3xl" /> },
    { type: "project-launch", icon: <FaRocket className="text-slate-500 text-3xl" /> },
    { type: "trip-update", icon: <FaSuitcaseRolling className="text-orange-600 text-3xl" /> },
    { type: "holiday-update", icon: <FaUmbrellaBeach className="text-rose-600 text-3xl" /> },
  ];

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
        {announcements.map((announcement, index) => {
          // Determine background color and icon based on index
          const backgroundColor = [
            'bg-violet-100 dark:bg-violet-300',
            'bg-slate-200 dark:bg-slate-300',
            'bg-orange-100 dark:bg-orange-200',
            'bg-rose-100 dark:bg-rose-200'
          ][index % 4];

          const icon = announcementTypes.find(
            (type) => type.type === announcement.type
          )?.icon;

          return (
            <div
              key={announcement.id}
              className={`rounded-lg w-[93%] h-[43%] ml-4 flex items-start p-4 ${backgroundColor}`}
            >
              <div className="mr-4">
                {announcement.attachment ? (
                  <img
                    src={announcement.attachment}
                    alt="Attachment"
                    className="w-10 h-10 object-cover rounded"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                {icon}
                <h2 className="dark:text-black max-w-1245:text-[10px] text-black text-sm font-bold max-w-1245:font-semibold">
                  {announcement.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-800 text-xs max-w-1245:text-[8px]">
                  {announcement.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Announcement;
