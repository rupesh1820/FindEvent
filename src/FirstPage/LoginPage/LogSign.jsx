import React, { useState } from 'react';
import Login from './Login';
import Signup from './signUpPage/Signup';

const LogSign = () => {
 const [btnTaped, setBtnTaped] = useState('Login')
 

  return (
    <div className="min-h-screen -mt-8 -ml-8 -mr-8 bg-gray-100">
      <div className="bg-orange-600 px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 max-w-[1440px] mx-auto">
        {/* Top Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif cursor-pointer text-center md:text-left">
            FindEvent
          </h1>
        </div>

        {/* Center Section with Buttons and Login */}
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          <div className="flex justify-center gap-6 bg-violet-800 text-white rounded-md w-full max-w-xs py-2">
            <button className="w-1/2" onClick={()=>setBtnTaped('Login')}>Login</button>
            <button className="w-1/2" onClick={()=>setBtnTaped('SignUp')}>SignUp</button>
          </div>

          <div className="w-full max-w-sm bg-white rounded-b-md shadow-md px-4 py-6">
            {btnTaped==='Login'? <h2 className='text-2xl'>Wellcome To Login</h2> : <h2 className='text-2xl'>SignUp</h2>}
            {btnTaped ==='Login'? <Login></Login> : <Signup/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogSign;
