
import React, { useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  return (
    <div class="bg-gradient-to-b from-navy to-dark lg:h-full lg:pt-10 xl:h-screen flex flex-col justify-center items-center w-full lg:w-[100%] xl:w-[100%]">


        <h3 className='font-abc text-white text-3xl lg:text-4xl'>RapiDriver</h3>
        <div className="max-w-lg sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 p-8 rounded-lg shadow-sm shadow-white">

        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Problem Description"
              rows="4"
              className="w-full px-3 py-2 border rounded-md outline-none"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-navy text-white font-semibold py-2 rounded-md hover:bg-green transition duration-300">Submit</button>
        </form>
      </div>
      <div className='  text-white text-3xl flex flex-row  gap-20 pt-10'>
      <FaXTwitter />
      <FaTiktok />
      <FaSquareInstagram />
      <FaLinkedinIn />
      </div>
      <footer className=" mt-8  text-center text-gray-500 sm:w-2/3">
        <p className='font-xyz'>&copy; 2024 <span className='font-abc'>RapiDriv</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactForm;
