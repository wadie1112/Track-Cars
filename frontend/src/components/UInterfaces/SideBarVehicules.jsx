import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons

const mockVehicles = [
  { id: 1, name: "Toyota Hilux", status: "Active" },
  { id: 2, name: "Ford Ranger", status: "Inactive" },
  { id: 3, name: "Nissan Navara", status: "Active" },
];

const SidebarVehicles = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="Relative z-50 bg-custom-green text-white p-2 rounded-md shadow"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`Relative  z-40 h-full w-64 bg-white border-r border-gray-300 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">Véhicules</h2>
        <ul className="space-y-2">
          {mockVehicles.map((vehicle) => (
            <li
              key={vehicle.id}
              className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 ${
                vehicle.status === "Active" ? "text-green-600" : "text-red-500"
              }`}
            >
              {vehicle.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarVehicles;

