import React from 'react';
import Image from 'next/image';
import { Mail, Call } from 'react-ionicons';
import Avatar from '../../public/person.webp';
function ContactCard(props) {
  const img = props.img;
  const name = props.name;
  const type = props.type;
  const mail = props.mail;
  const phone = props.phone;

  return (
    <div className="flex lg:text-left items-center w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md flex-col p-4">
      <div className="flex w-full">
        <div className="h-20 w-20 rounded-full shadow-lg">
          <Image src={Avatar} width="300" height="300" alt="Profile Image" />
        </div>
        <div className="ml-4 mt-2">
          <h2 className="mb-2 text-sm md:text-md font-bold tracking-tight decoration-[#F9A602] underline underline-offset-8">
            {type}
          </h2>
          <h4 className="text-lg md:text-2xl lg:text-xl font-medium">{name}</h4>
        </div>
      </div>
      <div className="flex flex-col ml-4 leading-normal w-full">
        <div className="font-normal text-xs text-slate-200">
          <span className="flex gap-2 mt-2 items-center">
            <Mail color="#fff" />
            <a href={`mailto:${mail}`}>{mail}</a>
          </span>
          <span className="flex mt-2 gap-2 items-center">
            <Call color="#fff" />
            <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
