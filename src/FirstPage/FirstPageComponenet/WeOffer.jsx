import React from "react";

const WeOffer = () => {
  const events = [
    "Wedding Planning & Marriage Event Management",
    "Corporate Events & Conferences",
    "Birthday Parties & Private Gatherings",
    "Exhibition & Trade Show Support",
    "Celebrity & VIP Events",
    "Event Staff Hiring Services"
  ];
  const roles = [
    "Event Coordinators & On-ground Managers",
    "Decorators, Hosts/Hostesses & Emcees",
    "Caterers, Security, and Logistics Crew",
    "Shop/Product Promotion Staff",
    "Ushers, Registration Teams, and Support Staff"
  ];

  return (
    <>
    <hr className=" opacity-15"/>
    <h1 className="mt-5 mb-5 text-2xl font-bold">🔍 We Offer</h1>
    
    <ul className="list-disc text-x ml-1 pl-5 ">
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>


    <hr className="mt-5 opacity-25"/>

    <h1 className=" text-2xl my-5 font-bold">Hire skilled and trained professionals for</h1>
    <hr className=" opacity-15 mb-5"/>

    
    <div>
      <h3 className="text-2xl mb-2">Event Staffing Roles Available:</h3>
      <hr className="opacity-15" />
      <ul className=" text-x ml-2" style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
    <hr className=" opacity-20 mt-5"/>
    </>
    
  );
};

export default WeOffer;