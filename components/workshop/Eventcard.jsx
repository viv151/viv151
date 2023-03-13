import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function EventCard({ event, href }) {
  const { query } = useRouter();
  const { title, description, thumbnail, slug } = event;
  return (
    <Link href={href} passHref>
      <div className="relative group rounded-lg overflow-hidden cursor-pointer">
        <div className="flex">
          <Image
            className="transform transition-all group-hover:scale-105"
            alt="profile"
            layout="intrinsic"
            src={thumbnail}
            width={1000}
            height={600}
          />
        </div>
        <div className="absolute top-0 left-0 p-6 bg-gradient-to-br from-black to-transparent w-full h-full">
          <h2 className="font-bold text-2xl mb-4 capitalize">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
