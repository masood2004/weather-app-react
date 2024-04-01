import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Karachi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Moscow",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Berlin",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
