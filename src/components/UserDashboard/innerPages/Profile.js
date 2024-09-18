import React, { useState, useEffect } from "react";
import { useUpdateUserProfile } from "../../../services/ProfileService";
import axiosInstance from "../../../services/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    office_email: "",
    email: "",
    gender: "",
    date_of_birth: "",
    nationality: "",
    blood_group: "",
    marital_status: "",
  });

  const [loading, setLoading] = useState(true);

  // Callbacks for success and error handling
  const onSuccess = (data) => {
    // Show success toast
    toast.success("Profile updated successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "text-lime-500",
    });

    // Clear form fields
    setFormData({
      first_name: "",
      middle_name: "",
      last_name: "",
      office_email: "",
      email: "",
      gender: "",
      date_of_birth: "",
      nationality: "",
      blood_group: "",
      marital_status: "",
    });
  };

  const onError = (error) => {
    toast.error("Error updating profile!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Using the hook to get the mutation function
  const { mutate: updateUserProfile, isLoading } = useUpdateUserProfile(
    onSuccess,
    onError
  );

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get("/employee/profile/get");
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details", error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-14 pt-6">
      <ToastContainer />
      <h1 className="text-xl font-semibold mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-[13px] font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="middleName"
              className="block text-[13px] font-medium text-gray-700"
            >
              Middle Name
            </label>
            <input
              id="middleName"
              name="middle_name"
              type="text"
              value={formData.middle_name}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block text-[13px] font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="last_name"
              type="text"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
            />
          </div>
        </div>

        {/* Office Email */}
        <div>
          <label
            htmlFor="officeEmail"
            className="block text-[13px] font-medium text-gray-700"
          >
            Office Email
          </label>
          <input
            id="officeEmail"
            name="office_email"
            type="email"
            value={formData.office_email}
            onChange={handleChange}
            className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
          />
        </div>

        {/* Personal Email */}
        <div>
          <label
            htmlFor="personalEmail"
            className="block text-[13px] font-medium text-gray-700"
          >
            Personal Email
          </label>
          <input
            id="personalEmail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
          />
        </div>

        {/* Gender and Date of Birth */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="gender"
              className="block text-[13px] font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 text-xs"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="dob"
              className="block text-[13px] font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
            />
          </div>
        </div>

        {/* Nationality */}
        <div>
          <label
            htmlFor="nationality"
            className="block text-[13px] font-medium text-gray-700"
          >
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            type="text"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-100 focus:border-transparent sm:text-xs"
          />
        </div>

        {/* Blood Group and Marital Status */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="bloodGroup"
              className="block text-[13px] font-medium text-gray-700"
            >
              Blood Group
            </label>
            <select
              id="blood_group"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 text-xs"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="maritalStatus"
              className="block text-[13px] font-medium text-gray-700"
            >
              Marital Status
            </label>
            <select
              id="marital_status"
              name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              className="mt-1 block w-full border h-[34px] bg-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 text-xs"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
        </div>


        {/* Other fields here */}
        
        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-lime-500 text-white rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-200"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
