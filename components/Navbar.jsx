import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SideBar from './Sidebar';
import Portal from './utils/Portal';
import { MenuOutline } from 'react-ionicons';
import SiteData from '../SiteData/NavbarData.json';
import Logo from '../public/laklogo.png';

function Navbar() {
  const [active, setActive] = useState(false);
  const sidebarActive = () => {
    setActive(!active);
  };

  function NavLink({ name, to }) {
    return (
      <Link href={to} passHref>
        <li className="mx-3 md:my-0 hover:text-lak-blue duration-500 hover:underline underline-offset-8 cursor-pointer">
          {name}
        </li>
      </Link>
    );
  }

  return (
    <nav className="py-2 md:py-3 px-6 bg-white shadow-lg flex items-center justify-between sticky w-full top-0 z-50 text-black ">
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image src={Logo} alt="logo" height="40" width="32" objectFit="contain" />
          <span className="cursor-pointer text-lak-blue text-lg md:text-2xl pl-4 font-black font-[BatmanForeverAlternate]">
            LAKSHYA
          </span>
        </div>
      </Link>
      {/* Main Navbar */}
      <div className="flex">
        <ul className="hidden sm:hidden md:flex md:items-center text-md text-lak-blue">
          {SiteData.navbarData.map((item, index) => (
            <NavLink key={index} name={item.name} to={item.to} />
          ))}
        </ul>
        {/* SideBar Slider  */}
        <span onClick={() => setActive(true)} className="text-xl cursor-pointer flex items-center ml-4">
          <MenuOutline width="24px" color="#0B0D47" />
        </span>
        <Portal show={active} onClose={() => setActive(false)}>
          <SideBar />
        </Portal>
      </div>
    </nav>
  );
}

export default Navbar;
