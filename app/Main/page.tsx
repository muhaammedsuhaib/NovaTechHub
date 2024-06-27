// Import React and other necessary modules
"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../Navbar/page';
import LogoSlider from '../Slider/page';
import styles from './Main.module.css';
import Link from 'next/link';

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to hold the search term
  const [selectedOption, setSelectedOption] = useState<string>("HTML"); // State to hold the selected dropdown option

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term state as user types
  };

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); // Update selected option state
    setSearchTerm(event.target.value); // Sync search term with selected option
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

  return (
    <>
      <Navbar />
      <LogoSlider />

      <main  className="container-fluid w-full min-h-scree bg-black h-[80vh]"
      style={{
        // backgroundImage: `url('/Laptop.png')`,
        // backgroundSize: 'auto',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'repeat'

      }}>
        <div className="text-center mx-auto">
          <h1 className={styles.title}>Build Coding Knowledge</h1>
          <h6 className={styles.title1}>At the Premier Web Development Hub</h6>
          <form onSubmit={handleSubmit} className="relative w-72 mx-auto">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                className="block w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6 p-2"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <select
                id="currency"
                name="currency"
                value={selectedOption}
                onChange={handleDropdownChange}
                className="w-24 bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-transparent text-sm"
              >
                <option>HTML</option>
                <option>CSS</option>
                <option>JAVASCRIPT</option>
                <option>BOOTSTRAP</option>
              </select>
            </div>
          </form>

          {/* 
          Example of commented-out JSX from original code:

          <div className="button-container mt-8">
            <Link href="./Main">
              <button className={`${styles.button} ml-6`}>
                <img src="/LogoBluebr.png" alt="Icon" className="w-10 h-10" />
                <span className={styles.buttonText}>Get Started</span>
              </button>
            </Link>
          </div>
          */}

        </div>
      </main>
    </>
  );
};

export default Page;
