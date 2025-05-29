import React from 'react';


const Descriptionpage = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-8 lg:px-16">
      <img 
        src=' /image/Event.jpg'
        className="w-full max-w-4xl h-auto rounded-lg shadow-md object-cover" 
        alt="Event Planning" 
      />
      <p className="mt-6 text-base md:text-lg lg:text-xl text-center text-gray-700 leading-relaxed max-w-3xl">
        Are you passionate about events, organizing unforgettable experiences, or looking to hire dedicated event professionals?
        Whether you're planning a wedding, promotional campaign, corporate event, or shop inauguration — we connect event
        organizers with talented event staff to bring your vision to life.
      </p>     
    </div>
  );
};

export default Descriptionpage;
