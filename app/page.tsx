import React from 'react';
import styles from './Home.module.css';
export default function Home() {
  return (
    <main
      className="container w-full min-h-screen"
      style={{
        backgroundImage: `url('/Home.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="text-start mx-auto">
        <img src="/LogoWhitebr.png" alt="NovaTechHub Logo" className="p-5" width={140} height={'auto'} />
        <h1 className={styles.title}>NovaTechHub <br /> CodeMaster</h1>
      </div>
    </main>
  );
}
