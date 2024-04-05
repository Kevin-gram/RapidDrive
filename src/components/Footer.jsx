import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear previous error when user starts typing
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.contactNumber.trim() || formData.contactNumber.trim().length !== 10 || !/^\d+$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Contact Number should be a 10-digit number';
    }
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData); // You can handle form submission here
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="bg-gradient-to-b from-navy to-dark lg:h-full lg:pt-10 xl:h-screen flex flex-col justify-center items-center w-full lg:w-[100%] xl:w-[100%]">
      <h3 className='font-abc text-white text-3xl lg:text-4xl'>RapiDriver</h3>
      <div className="max-w-lg sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 p-8 rounded-lg shadow-sm shadow-white">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} id='about' className=''>
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-3 py-2 border rounded-md outline-none ${errors.fullName ? 'border-red-500' : ''}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-3 py-2 border rounded-md outline-none ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className={`w-full px-3 py-2 border rounded-md outline-none ${errors.contactNumber ? 'border-red-500' : ''}`}
            />
            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Problem Description"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md outline-none ${errors.description ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <button type="submit" className="w-full bg-navy text-white font-semibold py-2 rounded-md hover:bg-green transition duration-300">Submit</button>
        </form>
      </div>
      <div className='  text-white text-3xl flex flex-row  gap-20 pt-10'>
        <FaTwitter />
        <FaTiktok />
        <FaInstagramSquare />
        <FaLinkedinIn />
      </div>
      <footer className="mt-8  text-center text-white sm:w-2/3 ">
        <p className='font-xyz'>&copy; 2024 <span className='font-abc'>RapiDriv</span>. All   rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactForm;
