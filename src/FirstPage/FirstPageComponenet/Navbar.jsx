import { useNavigate } from 'react-router-dom';

const Navbar = () => {
 const navigate = useNavigate();

  return (
    <div className="bg-orange-600 px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 max-w-[1440px] mx-auto">
      
      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif cursor-pointer text-center md:text-left">
          FindEvent
        </h1>
        <button className="text-sm sm:text-base lg:text-lg border border-white w-24 h-10 text-white rounded hover:bg-white hover:text-orange-600 transition" onClick={()=>navigate('/login')}>
          Login
        </button>
      </div>

      {/* Headline */}
      <div className="text-white mt-8 text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">Find Event Jobs or</h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">Hire Event Staff Easily!</h2>
      </div>

      {/* Search Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
        <input
          type="text"
          className="bg-white rounded px-4 py-3 w-full sm:w-64 lg:w-72 xl:w-80 2xl:w-96 max-w-[1440px]"
          placeholder="Job Type"
        />
        <input
          type="text"
          className="bg-white rounded px-4 py-3 w-full sm:w-64 lg:w-72 xl:w-80 2xl:w-96 max-w-[1440px]"
          placeholder="Location"
        />
        <button onClick={()=>navigate('/login')} className="bg-violet-800 text-white px-6 py-3 rounded hover:bg-violet-700 transition duration-200 w-full sm:w-auto text-base lg:text-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;