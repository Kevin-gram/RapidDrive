import React, { useState } from 'react';
import image1 from '../images/Kevin (2).jpg';

const DriverProfilePage = ({ drivers }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleDrivers = showAll ? drivers : drivers.slice(0, 6);

  const handleShowAll = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  const DownloadCv = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = true;
    link.click();
  };

  return (
    <div className="bg-navy text-black min-h-screen flex flex-col items-center justify-center w-full pt-20">
      <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center font-xyz text-white">Driver Profiles</h1>
        <p className="text-white bg-green w-full lg:h-32 rounded-lg sm:text-medium lg:text-xl h-38 py-28 mb-10 text-center md:text-xl flex flex-col justify-center mt-5 font-xyz align-center ">
          <strong className='font-bold pb-2'>Vision</strong>At Rapid Driver, our professional drivers are the backbone of our service, embodying reliability, expertise, and dedication. With rigorous screening and training, we ensure they deliver safe and seamless experiences, setting the standard for excellence in transportation services. Join us and experience the difference today..
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {visibleDrivers.map((driver, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img src={driver.image} alt={driver.name} className="w-12 h-12 rounded-full mr-4" />
                <h2 className="text-xl font-bold">{driver.name}</h2>
              </div>
              <p>Gender: {driver.gender}</p>
              <p>Employment Status: {driver.employed ? 'Employed' : 'Not Employed'}</p>
              <p>Experience: {driver.experience}</p>
              <p>Location: {driver.location}</p>
              <p>Desired Job Type: {driver.fullTime ? 'Full Time' : 'Part Time'}</p>
              <p>Availability: {driver.availability}</p>
              <p>Contact Information: {driver.contactInfo}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => DownloadCv(driver.cvUrl)}
              >
                Download CV
              </button>
            </div>
          ))}
        </div>
        {!showAll && drivers.length > 6 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleShowAll}
          >
            See More
          </button>
        )}
        {showAll && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleShowAll}
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

const drivers = [
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'John Doe',
    gender: 'Male',
    employed: true,
    experience: '5+ years',
    location: 'New York, NY',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
  {
    name: 'Kevin Nyiringango',
    gender: 'Male',
    employed:true,
    experience: '5+ years',
    location: 'Kigali, Rwanda',
    fullTime: true,
    availability: 'Flexible',
    contactInfo: 'k.nyiringan@alustudent.com | (250) 787119178',
    image: image1, // Example image URL
    cvUrl: 'https://drive.google.com/file/d/1DCWSmidf-E3bDTuEJENNW3cYpMl9AzmA/view?usp=sharing', // Example CV URL
  },
];

const Driver = () => {
  return (
    <DriverProfilePage drivers={drivers} />
  );
};

export default Driver;
