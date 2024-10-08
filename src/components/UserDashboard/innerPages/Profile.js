import React, { useState, useEffect } from "react";
import { useUpdateUserProfile } from "../../../services/ProfileService";
import axiosInstance from "../../../services/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    office_email: "",
    email: "",
    gender: "",
    date_of_birth: "",
    nationality: 1,
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

    // Update the form data to show the latest updated details
    setFormData(data);  // Use the response data from the server
    console.log("kkk", formData.data);
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
        console.log("Fetched user details:", response.data.data); // Inspect the response
        setFormData(response.data); // Set formData to the response data
      } catch (error) {
        console.error("Error fetching user details", error);
      } finally {
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
    <div className="p-14 pt-4">
      <ToastContainer />
      <h1 className="text-xl font-semibold mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* First Name */}
        <div className="flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="w-full h-full  rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Edit profile picture"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
        </div>
        <div className=" space-y-2">
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
        </div>

        {/* Other fields here */}

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-7 py-2 text-sm font-semibold bg-lime-500 text-white rounded-md shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-200"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
