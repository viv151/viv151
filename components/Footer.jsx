import React from 'react';
import Link from 'next/link';
import LinkButton from '../components/utils/Button';
import { LogoInstagram, LogoLinkedin, LogoFacebook, LogoYoutube } from 'react-ionicons';

const Footer = () => {
  const LinkTo = ({ title, to }) => (
    <Link href={to} passHref>
      <li>{title}</li>
    </Link>
  );
  return (
    <>
      <footer className="bg-white text-sm sticky top-0 -bottom-96 px-6 lg:px-10 text-lak-blue py-6 lg:py-10 mt-16 flex flex-col md:flex-row  gap-4 md:gap-16 justify-center z-40">
        <div className="w-full lg:w-1/3 ">
          <h2 className="font-[BatmanForeverAlternate] text-2xl mb-2">Lakshya</h2>
          <p className="text-xs lg:text-sm mb-2">
            Lakshya is the only National Level Edu-Tech Fest of L.D. College of Engineering, organised and conveyed by
            Team Robocon LDCE.
          </p>
          <span className="flex gap-2 flex-wrap text-sm">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="https://drive.google.com/file/d/1pt9Cn32fvJErpLdte0Fxw1p5gHmp1PkY/view?usp=sharing">
              Download RuleBook
            </Link>
          </span>
        </div>
        <div className="md:inline hidden lg:block text-sm">
          <h2 className="font-bold mb-2">Links</h2>
          <ul className="flex gap-2 flex-col">
            <Link href="/" passHref>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/events" passHref>
              <li className="cursor-pointer">Events</li>
            </Link>
            <Link href="/contact" passHref>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className=" md:inline hidden lg:block">
          <h2 className="font-bold mb-2">About</h2>
          <ul className="flex gap-2 flex-col">
            <Link href="/about" passHref>
              <li className="cursor-pointer">Lakshya</li>
            </Link>
            <Link href="/team" passHref>
              <li className="cursor-pointer">Our&nbsp;Team</li>
            </Link>
            <Link href="/sponsors" passHref>
              <li className="cursor-pointer">Sponsors</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h2 className="font-bold mb-2">Contact Us</h2>
          <ul className="flex json-center gap-2 flex-col">
            <Link href="tel:8849044180" passHref>
              <li className="cursor-pointer">Phone: +91 8849044180</li>
            </Link>
            <Link href="mailto:lakshyafestldce@gmail.com" passHref>
              <li className="cursor-pointer">Email: lakshyafestldce@gmail.com</li>
            </Link>
            <li className="cursor-pointer">Address: L.D. College Of Engineering, Ahmedabad 380015</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold mb-2">Our Social</h2>
          <ul className="flex gap-4">
            {[
              {
                logo: <LogoLinkedin color="#0B0D47" />,
                href: 'https://www.linkedin.com/company/lakshya-fest-l-d-college-of-engineering',
              },
              { logo: <LogoYoutube color="#0B0D47" />, href: 'https://youtube.com/channel/UC-QylLNstOBJy8RTbc2aaNg' },
              {
                logo: <LogoInstagram color="#0B0D47" />,
                href: 'https://instagram.com/lakshyafest.ldce?utm_medium=copy_link',
              },
              { logo: <LogoFacebook color="#0B0D47" />, href: 'https://m.facebook.com/lakshyafest/?__tn__=C-R' },
            ].map((item, index) => (
              <a key={index} href={item.href} passHref>
                <li>{item.logo}</li>
              </a>
            ))}
          </ul>
        </div>
      </footer>
      <h2 className="w-full text-xs font-light text-lak-blue p-6 pt-0 text-center bg-white">
        Copyright © 2022 Lakshya Fest LDCE®
      </h2>
    </>
  );
};

export default Footer;
