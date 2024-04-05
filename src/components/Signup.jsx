import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    phoneNumber: '',
    educationBackground: '',
    languagesSpoken: '',
    gender: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!formData.age) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      errors.age = 'Age must be a valid number';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!formData.educationBackground) {
      errors.educationBackground = 'Education background is required';
    }
    if (!formData.languagesSpoken) {
      errors.languagesSpoken = 'Languages spoken is required';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // You can handle form submission here, e.g., send data to server
      setSuccessMessage('Signup successful!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-navy">
     
      <div className="max-w-md w-full bg-slate-100 p-8 rounded-lg shadow-lg">
      <h1 className='text-black font-abc text-3xl text-center'>Rapid driver</h1>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 h-82">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          {/* Add similar input fields for Last Name, Email, Password, and Confirm Password */}
          {/* Age */}
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.age ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          {/* Phone Number */}
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.phoneNumber ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
          {/* Education Background */}
          <input
            type="text"
            name="educationBackground"
            value={formData.educationBackground}
            onChange={handleChange}
            placeholder="Education Background"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.educationBackground ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          />
          {errors.educationBackground && (
            <p className="text-red-500 text-xs mt-1">{errors.educationBackground}</p>
          )}
          {/* Languages Spoken */}
          <input
            type="text"
            name="languagesSpoken"
            value={formData.languagesSpoken}
            onChange={handleChange}
            placeholder="Languages Spoken"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.languagesSpoken ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          />
          {errors.languagesSpoken && (
            <p className="text-red-500 text-xs mt-1">{errors.languagesSpoken}</p>
          )}
          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.gender ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.confirmPassword ? 'border-red-500 focus:ring-red-600' : 'focus:ring-blue-600'
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Sign Up
            </button>
            {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupForm;
  
