import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
            Enter Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="mt-2 w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
            Enter Number
          </label>
          <input
            type="number"
            maxLength="10"
            pattern='[0-9] {10}'

            placeholder="Enter Number"
            className="mt-2  w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Enter Email
          </label>
          <input
            type="email"
            required
            placeholder="Enter Email"
            className="mt-2 w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            placeholder="Enter City"
            className="mt-2 w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="State" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            placeholder="Enter State"
            className="mt-2 w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ZipCode" className="block text-sm font-medium text-gray-700">
            ZipCode
          </label>
          <input
            type="text"
            placeholder="Enter ZipCode"
            className="mt-2 w-full h-10 border rounded-sm px-3 outline-none"
          />
        </div>

        <button className="w-full bg-violet-800 text-white h-10 mt-4 rounded-xl hover:bg-violet-600 transition">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Signup;
