

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
    <div className="px-4 py-6 md:px-12 lg:px-20">
      <hr className="opacity-15" />
      
      <h1 className="mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-orange-700 text-center">
        🔍 We Offer
      </h1>

      <ul className="list-disc text-sm md:text-base lg:text-lg ml-6 mb-6 space-y-2 text-gray-800">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>

      <hr className="opacity-25 my-6" />

      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-orange-700 my-4">
        Hire skilled and trained professionals for
      </h1>
      <hr className="opacity-15 mb-6" />

      <div>
        <h3 className="text-lg md:text-xl mb-3 font-semibold text-gray-900">
          Event Staffing Roles Available:
        </h3>
        <hr className="opacity-15 mb-3" />
        <ul className="list-[square] pl-5 space-y-2 text-sm md:text-base lg:text-lg text-gray-800">
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>

      <hr className="opacity-20 mt-6" />
    </div>
  );
};

export default WeOffer;
