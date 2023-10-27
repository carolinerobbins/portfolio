import Link from "next/link";
import {useState} from 'react'
import { SlMenu } from "react-icons/sl"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex top-0 z-50 justify-between items-center w-full mb-12 bg-slate-100 bg-opacity-20">
      {/* Name */}
      <h1 className="text-8xl font-bold text-murky-teal ml-4 mt-4">
        <Link href="/">Caroline Robbins</Link>
      </h1>
      {/* Menu */}
      <nav className="text-lg text-murky-teal mr-4 mt-4">
        <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-murky-teal text-2xl">
              <SlMenu />
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:justify-around text-murky-teal">
            <li className="lg:mx-4"><a href="#about">About</a></li>
            <li className="lg:mx-4"><a href="#services">Services</a></li>
            <li className="lg:mx-4"><a href="#experience">Experience</a></li>
            <li className="lg:mx-4"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
