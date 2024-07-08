"use client";  // Enables use of hooks in server components

import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

// Define the shape of a tutorial object
interface Tutorial {
  _id: string;
  title: string;
  introduction: string;
  whatIs: string;
  statements: string;
  syntax: string;
  comments: string;
  variables: string;
  dataTypes: string;
  __v: number;
}

// Define the shape of the context interface
interface TutorialContextInterface {
  tutorial: Tutorial[];
  setTutorial: Dispatch<SetStateAction<Tutorial[]>>;
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
}

const TutorialContext = createContext<TutorialContextInterface | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [tutorial, setTutorial] = useState<Tutorial[]>([]);
 const [mode,setMode]=useState<boolean>(true)
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/gettutorials'); // Replace with your API endpoint
        setTutorial(response.data);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    };

    fetchTutorials();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <TutorialContext.Provider value={{ tutorial, setTutorial ,mode,setMode}}>
      {children}
    </TutorialContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
