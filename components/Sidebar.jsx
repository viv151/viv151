import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SiteData from '../SiteData/SidebarData.json';

function Sidebar(props) {
  const toggle = props.toggleValue;
  const route = useRouter();

  function NavLink({ name, to }) {
    return (
      <Link href={to} passHref>
        <li
          className={`px-4 py-6 w-full cursor-pointer hover:bg-white hover:bg-opacity-20 ${
            route.route === to && 'bg-white bg-opacity-10'
          } `}
        >
          {name}
        </li>
      </Link>
    );
  }

  return (
    <div className="absolute w-full md:w-72 h-screen top-0 right-0 flex items-center justify-center text-white bg-white bg-opacity-10 backdrop-blur-[100px]  ">
      <ul className={`w-full text-xl text-center transition-all ease-in duration-100`}>
        {SiteData.sidebarData.map((item, index) => (
          <NavLink key={index} name={item.name} to={item.to} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
