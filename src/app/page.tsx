"use client";
import HomePage from "./pages/HomePage";
import Head from 'next/head';
// import WebcamStream from './Components/WebcamStream';
import { useEffect } from 'react';

export default function Page() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <main className="bg-white">
       <Head>
        <title>Webcam Image Streaming</title>
      </Head>
      <HomePage/>
    </main>
  )
}
