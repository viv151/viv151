import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function SubDomCard({ item }) {
  const route = useRouter();
  const { title, description, thumbnail, slug } = item;

  return (
    <a href={`/events/${route.query.domain}/${encodeURIComponent(slug)}`} passHref>
      <div className="w-full group relative rounded-lg overflow-hidden">
        <div className="p-5 transition-all w-full h-full bg-gradient-to-br from-black to-transparent group-hover:from-transparent absolute bottom-0 left-0 z-20 uppercase">
          <h2 className="font-bold group-hover:opacity-0 text-2xl decoration-[#F9A602] underline underline-offset-8">
            {title}
          </h2>
        </div>
        <div className="flex relative transform transition-all rounded-lg overflow-hidden">
          <Image
            className="rounded-tr-lg rounded-tl-lg"
            alt="profile"
            objectFit="cover"
            layout="intrinsic"
            priority
            src={thumbnail}
            // src={Thumbnail}
            width={1000}
            height={710}
          />
        </div>
      </div>
    </a>
  );
}

export default SubDomCard;
