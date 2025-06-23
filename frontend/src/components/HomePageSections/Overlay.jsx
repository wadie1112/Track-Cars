import React from "react";
import { X } from "lucide-react";
import Truck from '../../assets/Trucks.jpg';
const SlideOverlay = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      
      <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${Truck})` }}>
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 z-10">

       
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white z-30"
            >
              <X size={24} />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SlideOverlay;
