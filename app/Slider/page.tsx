// components/LogoSlider.js or components/LogoSlider.tsx
"use client";
import React from 'react';
import './style.css'
import { useAppContext } from '../Context/TutorialContext';

const LogoSlider: React.FC = () => {
  const { tutorial, mode, setMode } = useAppContext();

    return (
      <div className={`logos relative overflow-auto ${!mode?'bg-white text-black':'bg-black text-white'} sidebar`}>
        <div className="absolute top-0 left-0 w-16 h-full bg-transparent from-transparent to-white"></div>
        <div className="absolute top-0 right-0 w-16 h-full to-white"></div>
        
        <div className="logo_items whitespace-nowrap animate-slides">

        {tutorial.map((tutorial,index) => (
                  <button key={index}  type="button"
                  className="p-2 hover:text-black hover:bg-gray-200">{tutorial.title} </button>
                ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;
  