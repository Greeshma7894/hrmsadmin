import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { VscFolderActive } from "react-icons/vsc";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineManageSearch,
} from "react-icons/md";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { LuClipboardList } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 2,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(26px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#000"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#87db1c",
    width: 25,
    height: 25,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#000"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#7A7A7A" : "#7A7A7A",
    borderRadius: 20 / 2,
  },
}));

const NavbarItem = ({ icon: Icon, label, isActive, size, to }) => (
  <Link
    to={to}
    className={`flex justify-center items-center ${
      isActive ? "border border-2 border-lime-500" : "border-none"
    } rounded-full px-1`}
  >
    {Icon === PersonOutlinedIcon ? (
      <Icon
        style={{ fontSize: size }}
        className={`px-2 ${isActive ? "text-lime-500" : "text-white"}`}
      />
    ) : (
      <Icon
        className={`px-2 ${isActive ? "text-lime-500" : "text-white"}`}
        size={size}
      />
    )}
    {isActive && <span className="pe-4 text-xs text-lime-500">{label}</span>}
  </Link>
);

const Navbar = ({ activePage }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const items = [
    {
      icon: BiHomeAlt2,
      label: "Dashboard",
      key: "dashboard",
      size: 36,
      to: "/dashboard",
    },
    { icon: VscFolderActive, label: "CRM", key: "crm", size: 36, to: "/crm" },
    {
      icon: MdOutlineManageSearch,
      label: "HRMS",
      key: "hrms",
      size: 44,
      to: "/hrms",
    },
    {
      icon: PersonOutlinedIcon,
      label: "Accounts",
      key: "accounts",
      size: 40,
      to: "/accounts",
    },
    {
      icon: LuClipboardList,
      label: "Task Manager",
      key: "task_manager",
      size: 38,
      to: "/taskmanager",
    },
    {
      icon: MdOutlineAdminPanelSettings,
      label: "Admin center",
      key: "admin_center",
      size: 38,
      to: "/admin_center",
    },
    { icon: FiAward, label: "Awards", key: "awards", size: 35, to: "/awards" },
    {
      icon: FaHeadphones,
      label: "Support",
      key: "support",
      size: 33,
      to: "/support",
    },
  ];

  return (
    
    <div className="flex justify-center pb-4 dark:bg-neutral-900 bg-gray-200">
      <div className="flex bg-black justify-between gap-6 rounded-xl py-3 max-w-1245:py-2 min-w-1245:py-3 px-14 items-center  ">
        {items.map(({ icon, label, key, size, to }) => (
          <NavbarItem
            key={key}
            icon={icon}
            label={label}
            isActive={activePage === key}
            size={size}
            to={to}
          />
        ))}

        {/* Notification Icon */}
        <div className="h-10 w-px bg-gray-700"></div>
        <div className="pt-2">
          <button onClick={togglePopup} className="relative focus:outline-none">
            <svg
              className="h-[24px] w-9 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.053-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full">
              3
            </span>
          </button>

          {/* Popup for dummy messages */}
          {/* {isPopupVisible && (
            <div className="absolute right-0 mt-2 w-56 h-20 bg-white border rounded-lg shadow-lg z-50">
              <ul className="p-4">
                <li className="border-b text-black pb-2 mb-3">
                  You have some unread notification
                </li>
              </ul>
            </div>
          )} */}
        </div>

        <div className="mt-1">
          <svg
            className="h-[24px] w-9 -mt-1 text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
          </svg>
        </div>

        {/* Dark Mode Toggle */}
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
            />
          }
        />
        <div className="rounded-full overflow-hidden -mt-1">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            className="w-9 h-9 rounded-full"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
