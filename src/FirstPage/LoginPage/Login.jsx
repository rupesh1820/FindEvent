import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      
      <div className="w-full max-w-sm bg-white p-6 rounded-md shadow-md">
        <div>
          <div className="mb-1">
            <label htmlFor="emailOrNumber" className="block text-sm font-medium text-gray-700">
              Email Or Number
            </label>
          </div>
          <div className="border rounded-sm h-10 px-2">
            <input
              type="text"
              placeholder="Email Or Number"
              className="w-full h-full outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
          </div>
          <div className="border rounded-sm h-10 px-2">
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full h-full outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-violet-800 text-white w-40 h-10 rounded-sm hover:bg-violet-600">
            Login
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-violet-700 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
