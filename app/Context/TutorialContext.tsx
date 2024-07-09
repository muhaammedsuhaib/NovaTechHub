"use client"; 

import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

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


interface TutorialContextInterface {
  tutorial: Tutorial[];
  setTutorial: Dispatch<SetStateAction<Tutorial[]>>;
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  showTutorial:String,
  setshwoTutorial:Dispatch<SetStateAction<String>>;
}

const TutorialContext = createContext<TutorialContextInterface | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [tutorial, setTutorial] = useState<Tutorial[]>([]);
  const [mode,setMode]=useState<boolean>(true);
  const [showTutorial,setshwoTutorial]=useState<String>('')
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/gettutorials'); 
        setTutorial(response.data);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    };

    fetchTutorials();
  }, []); 

  return (
    <TutorialContext.Provider value={{ tutorial, setTutorial ,mode,setMode,showTutorial,setshwoTutorial}}>
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
