import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-orange-600 px-4 py-4 md:px-8">
      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white text-2xl font-serif cursor-pointer mb-2 md:mb-0">FindEvent</h1>
        <div>
          <button className="text-sm border w-20 h-8 text-white cursor-pointer">Login</button>
        </div>
      </div>

      {/* Headline */}
      <div className="text-white mt-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Find Event Jobs or</h2>
        <h2 className="text-2xl md:text-3xl font-semibold">Hire Event Staff Easily!</h2>
      </div>

      {/* Search Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
        <input 
          type="text" 
          className="bg-white rounded px-4 py-2 w-64 max-w-full" 
          placeholder="Job Type" 
        />
        <input 
          type="text" 
          className="bg-white rounded px-4 py-2 w-64 max-w-full" 
          placeholder="Location" 
        />
        <button className="bg-violet-800 text-white px-4 py-2 rounded hover:bg-violet-700 transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
