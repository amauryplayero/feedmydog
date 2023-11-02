'use client';
import React from 'react'
import Image from 'next/image'
import pattieFooter from '../../../public/assets/pattie-footer.png'

type Props = {
  editingComment: boolean,
}

const Footer:React.FC<Props> = ({editingComment}) => {
  
  return (
    <footer className="flex justify-center items-center bg-transparent text-black h-16">
      <p>follow amaury on <a target="blank" href="https://www.linkedin.com/in/amaury-lopez-4048671a8/">linkedin</a></p>
      <div className="absolute bottom-0 right-4 overflow-hidden">
       {/* <Image className={`transition-all w-28 md:w-72 fixed -bottom-14 md:-bottom-${editingComment ? '36' : '36'} left-0 pointer-events-none`} src={pattieFooter} alt="patty melt" height={40} width={200}></Image> */}
       <Image className={`transition-all w-28 md:w-72 fixed ${editingComment ? '-bottom-6' : '-bottom-14'} md:-bottom-${editingComment ? '36' : '34'} left-0 pointer-events-none`} src={pattieFooter} alt="patty melt" height={40} width={200}></Image>
      </div>
    </footer>
  )
}

export default Footer
