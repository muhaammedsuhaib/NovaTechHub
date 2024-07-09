"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../Navbar/page";
import LogoSlider from "../Slider/page";
import styles from "./Main.module.css";
import { useAppContext } from "../Context/TutorialContext";

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to hold the search term
  const [selectedOption, setSelectedOption] = useState<string>("HTML"); // State to hold the selected dropdown option

  const { tutorial, mode, setMode } = useAppContext();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term state as user types
  };

  const handleSuggestionClick = (title: string) => {
    setSearchTerm(title); // Set the search term to the clicked suggestion
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search functionality here, e.g., fetch data based on searchTerm
    console.log("Search term:", searchTerm);
    // You can add more logic here, like redirecting to search results page or updating state
  };

  useEffect(() => {
    // Print the search term whenever the selected option changes
    console.log("Search term:", searchTerm);
  }, [selectedOption]);

  // Filter tutorials based on the search term
  const filteredTutorials = tutorial.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className={`w-full h-[100vh] ${
          mode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <Navbar />
        <LogoSlider />

        <div className="text-center mx-auto">
          <h1 className={styles.title} onClick={() => setMode(!mode)}>
            Build Coding Knowledge
          </h1>
          <h6 className={`${styles.title1} font-bold`}>At the Premier Web Development Hub</h6>
          <form onSubmit={handleSubmit} className="relative w-72 mx-auto">
            <div
              className={`flex items-center  ${
                mode ? "bg-white text-black" : "bg-black text-white"
              }`}
              style={{borderRadius:'20px',width:'100%'}}
            >
<input
          type="text"
          placeholder="Search..."
          className=" w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={searchTerm}
          onChange={handleSearchChange}
        />
                
            </div>
            {searchTerm && (
              <ul className={`absolute z-10 w-full h-[200px] overflow-auto text-start ${styles.suggetion}`} >
                {filteredTutorials.map((tutorial) => (
                  <li
                    key={tutorial._id}
                    className={`p-2 cursor-pointer ${mode?'hover:bg-gray-200':'hover:text-black hover:bg-white'}`}
                    onClick={() => handleSuggestionClick(tutorial.title)}
                  >
                    {tutorial.title}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <a href="/Tutorial">
          <h1 className={`underline mt-10 font-bold ${searchTerm&& 'hidden'}`}>Not Sure Where To Begin?</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
