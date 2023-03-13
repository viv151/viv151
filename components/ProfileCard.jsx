import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import Avatar from '../public/person.webp'

function ProfileCard(props) {
  const img = props?.img;
  const name = props?.name;
  const type = props?.type;
  const number = props?.number;
  const ml = props?.ml;
  const ll = props?.ll;
  const il = props?.il;

  function ProfileImage(props) {
    return (
      <div className="flex rounded-full lg:p-0 shadow-2xl">
        <Image className="rounded-full" src={props.link} width="256" height="256" alt="Profile Image" />
      </div>
    );
  }

  function NumLink() {
    return (
      <Link href={number} passHref>
        <li className="cursor-pointer">
          <Phone />
        </li>
      </Link>
    );
  }

  function MailLink() {
    return (
      <Link href={ml} passHref>
        <li className="cursor-pointer">
          <Mail />
        </li>
      </Link>
    );
  }

  function LinkedinLink() {
    return (
      <Link href={ll} passHref>
        <li className="cursor-pointer">
          <Linkedin />
        </li>
      </Link>
    );
  }

  function InstaLink() {
    return (
      <Link href={il} passHref>
        <li className="cursor-pointer">
          <Instagram />
        </li>
      </Link>
    );
  }

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg w-64 flex items-start z-10">
      <div className="flex flex-col items-center text-center p-4 lg:p-8">
        <ProfileImage link={img ? img : Avatar} />
        <h5 className="mt-4 text-xl lg:text-2xl font-medium text-white">{name}</h5>
        <span className="text-xl font-light text-gray-300">{type}</span>
        <ul className="flex items-center justify-between gap-8 mt-5">
          {number && <NumLink />}
          {ml && <MailLink />} 
          {ll && <LinkedinLink />} 
          {il && <InstaLink />}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
