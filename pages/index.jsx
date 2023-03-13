import Link from 'next/link';
import React from 'react';
import { LinkButton } from '../components/utils/Button';
import Layout from '../layout/Layout';
import PopImg from '../components/utils/PopImg';
import AllSponsors from '../SiteData/Sponsors.json';

export default function Home() {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      {loading ? (
        <>
          <Layout title="Lakshya 2022">
            <main className="text-center flex items-center justify-center flex-col">
              <div className="flex items-center justify-center">
                <div id="hero" className="animate-fade-in-down">
                  <h2 className="pt-16 pb-12 lg:text-8xl text-5xl font-bold text-center font-[BatmanForeverAlternate] tracking-wide">
                    Lakshya <span className="font-[BatmanForeverOutline]">2022</span>
                  </h2>
                  <h2 className=" text-4xl lg:text-7xl mb-16">28-29-30 April</h2>
                  <div className="flex flex-col lg:flex-row justify-center w-full lg:w-1/2 mx-auto text-center gap-4 mb-32">
                    <Link href="/events" passHref>
                      <LinkButton size="full" type="primary">
                        Participate Now
                      </LinkButton>
                    </Link>
                    <Link href="/about" passHref>
                      <LinkButton size="full" type="transparent">
                        About Us
                      </LinkButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="m-auto">
                <div className="flex justify-center items-center mb-12">
                  <span className="border-b-2 flex-1" />
                  <span className="lg:mx-4 mx-2 text-xl lg:text-3xl">Sponsored By</span>
                  <span className="border-b-2  flex-1" />
                </div>
                <div className="flex flex-wrap">
                  {AllSponsors.home.map((item, index) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
                      <h6 className="text-sm lg:text-lg  text-gray-300 font-light">{item.title}</h6>
                      <div className="pb-8 px-8">
                        <PopImg item={item} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/sponsors" passHref>
                    <LinkButton size="lg" type="transparent">
                      Other Sponsors
                    </LinkButton>
                  </Link>
                </div>
              </div>
            </main>
          </Layout>
        </>
      ) : (
        <div id="bg-video" className="h-screen flex items-center justify-center">
          <video
            onEnded={() => {
              setLoading(true);
            }}
            className="object-contain lg:object-cover"
            autoPlay
            muted
          >
            <source
              src={'https://drive.google.com/uc?export=download&id=1MSDewG04fOYfm6YVdt-kEZNuZTyBSqlw'}
              type="video/mp4"
            ></source>
          </video>
        </div>
      )}
    </>
  );
}
