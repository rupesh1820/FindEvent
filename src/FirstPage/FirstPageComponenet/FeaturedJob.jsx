import React from 'react';


const FeaturedJob = () => {
  const jobs = [
    { img: '/image/birthday.jpg', title: "Birthday Organizing" },
    { img: '/image/celebrity.webp', title: "Celebrity & VIP Event Organizing" },
    { img: '/image/corporate.jpg', title: "Corporate Event Organizing" },
    { img: '/image/promotion.jpg', title: "Marketing Event" },
    { img: '/image/wedding.jpg', title: "Wedding Organizing" },
    { img: '/image/secuirity.png', title: "Event Security" },
  ];

  return (
    <div className="bg-violet-800 rounded-2xl px-4 py-6 md:px-10 lg:px-16">
      <h1 className="text-white text-2xl font-semibold mb-4">🎯 Featured Jobs</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {jobs.map((job, index) => (
<div
  key={index}
  className="bg-white rounded-2xl transition-transform duration-300 ease-in-out overflow-hidden shadow-md hover:scale-105"
>
  <img
    className="w-full h-24 object-cover"
    src={job.img}
    alt={job.title}
  />
  <div className="bg-yellow-300 text-violet-800 text-xs text-center px-2 py-2 h-10 flex items-center justify-center font-medium">
    {job.title}
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
