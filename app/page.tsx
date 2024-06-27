import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="container-fluid w-full min-h-screen"
      style={{
        backgroundImage: `url('/Home.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="text-start mx-auto">
        <img src="/LogoWhitebr.png" alt="NovaTechHub Logo" className="p-5" width={140} height={'auto'} />
        <h1 className={styles.title}>NovaTechHub <br /> CodeMaster</h1>

        <div className="button-container mt-8">
        <Link href="./Main"><button className={`${styles.button} ml-6`}  >
          <img src="/LogoBluebr.png" alt="Icon" className="w-10 h-10" />
          <span className={styles.buttonText} >Get Started</span>
        </button></Link></div>
      </div>
    </main>
  );
}
