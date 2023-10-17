'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import kibbles from '../../../public/assets/kibble.png'
import menu from '../../../public/assets/menu.png'
import closeIcon from '../../../public/assets/close.png'
import { usePathname } from 'next/navigation';

const NavBar:React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMobileMenu = () =>{
    setIsMenuOpen(prev => !prev);
  }


  return (
    <div className="w-full flex justify-between h-[60px] bg-gradient-to-r to-[#c66ec6] from-pink-400 text-black px-8">
      {isMenuOpen && <>
      <div className="absolute bg-black/75 h-screen w-screen left-0 top-0 z-[10]" onClick={toggleMobileMenu}>
        <button onClick={toggleMobileMenu} className="absolute right-8 w-8 top-4">
          <Image onClick={toggleMobileMenu} className="cursor-none " src={closeIcon} alt="close icon"></Image>
        </button>
        <ul onClick={toggleMobileMenu} className="relative top-60 left-0 w-full h-40 flex flex-col items-center justify-between">
            <li className={`rounded px-3 text-white text-2xl`}> <a href="/">Home</a></li>
            <li className={`rounded px-3 text-white text-2xl`}><a href="/about">About</a></li>
            <li className={`rounded px-3 text-white text-2xl`}><a href="/">Contact</a></li>
        </ul>
      </div>
      </>}

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
            
            {isMenuOpen ? <></> : <button className="sm:hidden" onClick={toggleMobileMenu}>
              <Image priority src={menu} className='w-8' alt="burger menu"></Image>
            </button>
            }
        </div>
    </div>
  )
}

export default NavBar