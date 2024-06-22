import React from 'react';

export default function Home() {
  return (
    <main
      className="container w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/Home.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <img src="/LogoWhite.png" alt="NovaTechHub Logo" className="mb-4 mx-auto" width={180} height={37} />
        <h1 className="text-4xl font-bold text-white">NovaTechHub</h1>
      </div>
    </main>
  );
}
