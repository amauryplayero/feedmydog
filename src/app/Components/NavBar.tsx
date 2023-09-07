import React from 'react'

const NavBar:React.FC = () => {
  return (
    <nav className="w-full flex justify-between h-[60px] bg-white text-black">
        <div>
            <p>feed my dog</p>
        </div>

        <div>
            <ul className="hidden sm:flex w-[200px] text-black">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>



    </nav>
  )
}

export default NavBar