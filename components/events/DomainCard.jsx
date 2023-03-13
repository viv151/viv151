import React from 'react';
import Button, { LinkButton } from '../utils/Button';
import Image from 'next/image';
import Link from 'next/link';

function DomainCard({ title, description, thumbnail, href }) {
  console.log(href);
  return (
    <Link href={href} passHref>
      <div className="w-full group lg:w-1/4 md:w-1/2 bg-white flex flex-col items-center p-8 rounded-lg text-center cursor-pointer">
        <div className="transform transition-all group-hover:scale-110 w-44 h-44 mb-4 rounded-full">
          <Image alt="profile" src={thumbnail} width={300} height={300} className="rounded-full" />
        </div>
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="text-base mb-8"># {description}</p>
        <Button type="secondary">Participate </Button>
      </div>
    </Link>
  );
}

export default DomainCard;
