import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Frame from '../components/utils/Frame';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.png" />
        <meta title="description" content="TechFest of L.D. College of Engineering" />
        <meta name={title} content={description} />
      </Head>

      <Navbar />
      <Frame>{children}</Frame>
      <Footer />
    </>
  );
};

export default Layout;
