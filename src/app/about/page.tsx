'use client';
import React from 'react';
import Image from 'next/image'
import NavBar from '../Components/NavBar';
import robot from '../../../public/assets/robot.jpg'


const About: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="bg-white p-8">
      <h1 className='text-black text-4xl font-bold'>Feed my dog</h1>
      <br></br>
      <p className="text-black">This project started as a testament of how real can I make a somewhat complicated idea. Which was: what if my dog
        had a social media where friends and family or even strangers can feed her while leaving a nice message?

        <br></br>
        <br></br>
        
        Many sweat, tears, and kibbles were born out of this project, but it finally came to fruition. I used nextsj for the frontend.
        nodejs, and python for the backend, and a homemade robot controlled by a raspberry pi and a python server for the kibble dispenser.
      </p>
      <br></br>
      <Image className={``} onClick={()=>{console.log('FIRING')}} src={robot} alt="patty melt" height={40} width={500}></Image>

    </div>
    </>
  );
};

export default About;