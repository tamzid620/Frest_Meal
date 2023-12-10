import aboutPhoto from "../../../../public/images/contactUs.jpg";
import hrIcon from "../../../../public/icons/hr.svg";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Reservation = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phoneNo: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventType: "",
    numbOfPeople: "",
    eventInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // post method ---------------------
  axios.post("https://backend.ap.loclx.io/api/add-reservation", formData)
    .then((res) => {
      console.log("Response from the server:", res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500
      });
      
      // Reset the form
      setFormData({
        clientName: "",
        email: "",
        phoneNo: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        eventType: "",
        numbOfPeople: "",
        eventInfo: "",
      });
    })
    .catch((error) => {
      
      Swal.fire({
        position: "center",
        icon: "error",
        title: console.error("Error submitting form:", error),
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  return (
    <div>
      {/* title section */}
      <div
        style={{
          backgroundImage: `url(${aboutPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
        className="flex justify-center"
      >
        {/* overlay */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold"
          >
            Reservation
          </h1>
          <img src={hrIcon} alt="Divider" />
        </div>
      </div>

      {/* information section */}
      <div className="mx-auto mt-8 p-4 max-w-full ">
        <form
          onSubmit={handleSubmit}
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-transparent"
        >
              <div className="mb-4 grid grid-cols-2 gap-4">

          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="clientName"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="clientName"
              type="text"
              placeholder="Full Name"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </div>

          {/*Email Input */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

              </div>

          <div className="mb-4 grid grid-cols-2 gap-4">

          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="phoneNo"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNo"
              type="tel"
              placeholder="Phone Number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Event Date Input */}
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="eventDate"
            >
              Event Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventDate"
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>
          </div>

          {/* StartTime and EndTime Inputs */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                className="block  text-white text-sm font-bold mb-2"
                htmlFor="startTime"
              >
                Start Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startTime"
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block  text-white text-sm font-bold mb-2"
                htmlFor="endTime"
              >
                End Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endTime"
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">

          {/* Type of Event Selector */}
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="eventType"
            >
              Type of Event
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="birthday">Corporate Lunch</option>
              <option value="wedding">Family Event</option>
              <option value="wedding">Meeting / Presentation</option>
              <option value="wedding">Wedding</option>
              <option value="wedding">Birthday party</option>
              <option value="wedding">Other</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Number of People Input */}
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="numbOfPeople"
            >
              Number of People
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numbOfPeople"
              type="number"
              name="numbOfPeople"
              value={formData.numbOfPeople}
              onChange={handleChange}
              required
            />
          </div>
          </div>

          {/* Additional Information Input */}
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="eventInfo"
            >
              Additional Information
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full pt-2 pb-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="eventInfo"
              placeholder="Additional Information"
              name="eventInfo"
              value={formData.eventInfo}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-yellow-500 text-gray-500 hover:bg-yellow-500 hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
