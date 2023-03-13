import React from 'react';
import AllSponsors from '../SiteData/Sponsors.json';
import Image from 'next/image';
import Link from 'next/link'
import Layout from '../layout/Layout';
import PageTitle from '../components/utils/PageTitle';

function Sponsors() {
  return (
    <Layout title="Sponsors">
      <PageTitle title="Sponsors" />
      <div className="flex flex-wrap justify-center">
        {AllSponsors.single.map((item) => (
          <div className="p-2 md:p-5 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.name}>
            <h2 className="text-center italic text-gray-300 font-light text-md">{item.title}</h2>
            <Link href={item?.link} passHref>
              <div className="flex items-start justify-center p-8 lg:p-4 relative transform transition-all hover:scale-[1.03] rounded-lg">
                <Image width={300} height={200} layout="intrinsic" objectFit="contain" src={item.image} alt={item.name} />
              </div>
            </Link>
          </div>
        ))}
        <div>
          <h2 className="text-center italic text-gray-300 font-light text-md">{AllSponsors.tech[0]}</h2>
          <div className="flex flex-wrap justify-center">
            {AllSponsors.tech.slice(1).map((item) => (
              <div className="p-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.name}>
                <Link href={item?.link} passHref>
                  <div className="flex items-start justify-center p-8 lg:p-4 relative transform transition-all hover:scale-[1.03] rounded-lg">
                    <Image width={400} height={300} layout="intrinsic" objectFit="contain" src={item.image} alt={item.name} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-center italic text-gray-300 font-light text-md">{AllSponsors.workshop[0]}</h2>
          <div className="flex flex-wrap justify-center">
            {AllSponsors.workshop.slice(1).map((item) => (
              <div className="p-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.name}>
                <Link href={item?.link} passHref>
                  <div className="flex items-start justify-center p-8 lg:p-4 relative transform transition-all hover:scale-[1.03] rounded-lg">
                    <Image width={400} height={300} layout="intrinsic" objectFit="contain" src={item.image} alt={item.name} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-center italic text-gray-300 font-light text-md">{AllSponsors.food[0]}</h2>
          <div className="flex flex-wrap justify-center">
            {AllSponsors.food.slice(1).map((item) => (
              <div className="p-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.name}>
                <Link href={item?.link} passHref>
                  <div className="flex items-start justify-center p-8 lg:p-4 relative transform transition-all hover:scale-[1.03] rounded-lg">
                    <Image width={400} height={300} layout="intrinsic" objectFit="contain" src={item.image} alt={item.name} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-center italic text-gray-300 font-light text-md">{AllSponsors.stall[0]}</h2>
          <div className="flex flex-wrap justify-center">
            {AllSponsors.stall.slice(1).map((item) => (
              <div className="p-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.name}>
                <Link href={item?.link} passHref>
                  <div className="flex items-start justify-center p-8 lg:p-4 relative transform transition-all hover:scale-[1.03] rounded-lg">
                    <Image width={400} height={300} layout="intrinsic" objectFit="contain" src={item.image} alt={item.name} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sponsors;
