'use client';
import React from 'react'
import Image from 'next/image'
import kibbles from '../../../public/assets/kibble.png'
import { usePathname } from 'next/navigation';

const NavBar:React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-between h-[60px] bg-gradient-to-r to-[#c66ec6] from-pink-400 text-black px-8">
        <div className="flex items-center overflow-hidden">
          <div className='absolute -left-20 h-[60px] overflow-y-hidden'>
              <Image priority className="w-[350px] relative rotate-90 -top-32 -left-12" src={kibbles} alt="patty melt" height={40} width={200}></Image>
          </div>

          <p className="text-3xl font-bold text-white ml-20">Feed my dog</p>
        </div>

        <div className="flex items-center">
            <ul className="hidden sm:flex w-[400px] text-white justify-evenly text-xl font-medium">
                <li className={`rounded px-3 ${pathname === '/' ? 'bg-[#c15bc3]' : '' }`}> <a href="/">Home</a></li>
                <li className={`rounded px-3 ${pathname === '/about' ? 'bg-[#c15bc3]' : '' }`}><a href="/about">About</a></li>
                <li className={`rounded px-3 ${pathname === '/contact' ? 'bg-[#c15bc3]' : '' }`}><a href="/">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar