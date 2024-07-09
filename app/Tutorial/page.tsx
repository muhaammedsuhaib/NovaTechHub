"use client";
import React from 'react';
import { useAppContext } from '../Context/TutorialContext';
import Navbar from '../Navbar/page';
import LogoSlider from '../Slider/page';

const Tutorial: React.FC = () => {
  const { tutorial, mode, setMode } = useAppContext();

  console.log(tutorial,'werty');
  
  
  const tuto = "JavaScript";
  const getTutorial = tutorial.filter((tutorial) => tutorial.title === tuto);
  
  return (
    <>
      <div className='w-full h-[100vh'>
        <Navbar />
        <LogoSlider/>
        {getTutorial.map((item, index) => (<>
        <div key={index} className="w-full text-center p-16">
          <h1 className='text-3xl'>{item.title} Tutorial</h1>
          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Introduction:</p>
            <p>{item.introduction}</p> </div>

          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>What is:</p>
            <p>{item.whatIs}</p> </div>
            
          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Statements:</p>
            <p>{item.statements}</p> </div>

          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Syntax:</p>
            <p>{item.syntax}</p> </div>

          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Comments:</p>
            <p>{item.comments}</p> </div>

          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Variables:</p>
            <p>{item.variables}</p> </div>

          <div className={`${mode?'bg-white text-black':'bg-black text-white '}`}> 
            <p className='text-start font-bold'>Data Types:</p>
            <p>{item.dataTypes}</p> </div>

        </div>        
        </>
        ))}
      </div>
    </>
  );
}

export default Tutorial;
