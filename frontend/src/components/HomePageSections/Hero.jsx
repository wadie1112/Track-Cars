import React from 'react';
import { useNavigate } from 'react-router-dom';

    const Hero = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/signup');
    };
  return (
        
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Take Control of your Fleet</h1>
      <p className="mb-5">
      Easily differentiate professional and private costs, optimize performance, and drive efficiency—all in one platform.
      </p>
      <button onClick={handleLoginClick} className="btn bg-custom-green text-white ">Get Started</button>
    </div>
  </div>
</div>
);
};

export default Hero;