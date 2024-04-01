import React, { useState } from 'react';
import '../components/jobs.css'
const JobListingPage = ({ jobs }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleJobs = showAll ? jobs : jobs.slice(0, 6);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-navy job text-white text-center min-h-screen flex flex-col items-center justify-center py-8">
      <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg z-10">
        <h1 className="text-4xl font-bold mb-8 font-xyz">Driver Job Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {visibleJobs.map((job, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg text-black transition-transform transform hover:scale-90">
              <h2 className="text-xl font-bold mb-2">{job.companyName}</h2>
              <p className="text-lg mb-2">{job.category}</p>
              <p>Age Range: {job.ageRange}</p>
              <p>Experience Required: {job.experience}</p>
              <p>Salary: {job.salary}</p>
              <p>{job.fullTime ? 'Full Time' : 'Part Time'}</p>
             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'> Apply </button>
            </div>
            
          ))}
        </div>
        {!showAll && jobs.length > 6 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleShowAll}
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

// Example job listings
const jobs = [
  {
    companyName: 'Example Company 1',
    category: 'Category 1',
    ageRange: '21-45',
    experience: '2+ years',
    salary: '$50,000 - $70,000',
    fullTime: true,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
  {
    companyName: 'Example Company 2',
    category: 'Category 2',
    ageRange: '25-50',
    experience: '3+ years',
    salary: '$60,000 - $80,000',
    fullTime: false,
  },
 
];

const JobPage = () => {
  return (
    <JobListingPage jobs={jobs} />
  );
};

export default JobPage;
