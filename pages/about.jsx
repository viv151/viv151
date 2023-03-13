import Image from 'next/image';
import React from 'react';
import PageTitle from '../components/utils/PageTitle';
import Layout from '../layout/Layout';
import Logo from '../public/logo.png';

export default function About() {
  return (
    <Layout title="About">
      <PageTitle title="About us" />
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 flex gap-4 flex-col text-lg lg:text-xl text-justify font-light text-gray-300 leading-normal">
          <p>
            Conveyed and organised by <b>The Robocon Club of LDCE</b> Lakshya is the annual
            <b> Edu-Tech Festival of L.D. College of Engineering Ahmedabad </b> which is being held for the last 8 years
            with a unique theme every year. It is a perfect blend of exciting technical and non-technical events and
            workshops unfolding out of a box of techniques challenges learning and lots of excitement.
          </p>
          <p>
            Every year an unique theme is decided and the main event is organised in accordance with the theme. This
            year the Theme of the Lakshya – 2022 is <b>“Anāgata”</b> and is scheduled from 28th to 30th April.
          </p>
          <p>
            This year we bring you <b>“Anāgata”</b> for Lakshya &apos;22 where we want to instill the idea that the
            relation between humans and technology is key to boundless eventuality of transforming notions to reality in
            almost every applicable field; like the early beginnings of quantum computing and the new and emerging
            virtual reality.
          </p>
          <p>
            The future has power to unlock an embodied internet that you are inside of rather than just looking at.
            Creating a virtual world can fulfil all human requisites from necessities to recreational activities.
            Encouraging the effort of creating a circumferential that is a mere replica of reality to explore the
            virtual world. Understanding the mysteries which are not yet discovered by humankind and overcoming the
            limitations of space and supplies by being ingenious. Web 3.0, blockchain network, VR/AR these are all
            inextricable parts of future which adds up and take us a step closer, to a &lsquo;reality beyond
            reality&rsquo;.
          </p>
          <p>
            All in all, the technology holds the power through which humankind can bring numerous dreams to reality
            though technology is still fenced to the potentialities discovered and we’ve to walk a long path, the path
            of opportunities beyond our limits by bringing virtuality to the dream of great beyond.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start ">
          <div className="flex sticky top-28 mb-8 lg:mb-0">
            <Image className="" src={Logo} alt="Logo" layout="intrinsic" height="400" objectFit="contain" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
