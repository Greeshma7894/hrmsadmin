import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt2 } from "react-icons/bi";
import { VscFolderActive } from "react-icons/vsc";
import { MdOutlineAdminPanelSettings, MdOutlineManageSearch } from "react-icons/md";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { LuClipboardList } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";

const NavbarItem = ({ icon: Icon, label, isActive, size, to }) => (
  <Link
    to={to}
    className={`flex justify-center  items-center ${isActive ? 'border border-2 border-emerald-300' : 'border-none'} rounded-full px-1`}
  >
    {Icon === PersonOutlinedIcon ? (
      <Icon
        style={{ fontSize: size }}
        className={`px-2 ${isActive ? 'text-emerald-300' : 'text-white'}`}
      />
    ) : (
      <Icon
        className={`px-2 ${isActive ? 'text-emerald-300' : 'text-white'}`}
        size={size}
      />
    )}
    {isActive && (
      <span className='pe-4 text-xs text-emerald-300'>
        {label}
      </span>
    )}
  </Link>
);

const Navbar = ({ activePage }) => {
  const items = [
    { icon: BiHomeAlt2, label: "Dashboard", key: "dashboard", size: 36, to: "/dashboard" },
    { icon: VscFolderActive, label: "CRM", key: "crm", size: 36, to: "/crm" },
    { icon: MdOutlineManageSearch, label: "HRMS", key: "hrms", size: 44, to: "/hrms" },
    { icon: PersonOutlinedIcon, label: "Accounts", key: "accounts", size: 40, to: "/accounts" },
    { icon: LuClipboardList, label: "Task Manager", key: "task_manager", size: 38, to: "/taskmanager" },
    { icon: MdOutlineAdminPanelSettings, label: "Admin center", key: "admin_center", size: 38, to: "/admin_center" },
    { icon: FiAward, label: "Awards", key: "awards", size: 35, to: "/awards" },
    { icon: FaHeadphones, label: "Support", key: "support", size: 33, to: "/support" },
  ];

  return (
    <div className='flex justify-center mt-3 mb-2 dark:bg-black bg-white '>
      <div className='flex bg-gray-900 justify-between gap-8 rounded-xl py-2 px-6 items-center'>
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
      </div>
    </div>
  );
};

export default Navbar;
