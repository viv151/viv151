import React from 'react';
import PageTitle from '../components/utils/PageTitle';
import Layout from '../layout/Layout';
import ContactCard from '../components/contact/ContactCard';
import Form from '../components/contact/Form';
import SiteData from '../SiteData/Contact.json';

function Contact() {
  return (
    <Layout title="Contact Us">
      <PageTitle title="Contact" />
      <div className="flex mx-4 flex-col md:flex-row gap-4">
        <div className="flex w-full lg:w-1/3 items-center gap-4 flex-col">
          {SiteData.contactData.map((item, index) => (
            <ContactCard
              img={item.img}
              name={item.name}
              type={item.type}
              mail={item.mail}
              phone={item.phone}
              key={index}
            />
          ))}
        </div>
        <div className="w-full lg:w-2/3">
          <Form />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
