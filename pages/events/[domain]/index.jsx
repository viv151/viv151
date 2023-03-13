import React from 'react';
import SubDomCard from '../../../components/events/SubDomCard';
import PageTitle from '../../../components/utils/PageTitle';
import Layout from '../../../layout/Layout';
import Domains from '../../../SiteData/EventData/Domains';

function Domain({ domain }) {
  const { title, slug, description, subdomains } = domain;

  return (
    <Layout title={title + ' | Lakshya'}>
      <PageTitle title={title} />
      <div className="grid grid-cols-6 text-white gap-4 ">
        {subdomains.map((item, index) => (
          <div className="col-span-6 md:col-span-3 " key={item.slug}>
            <SubDomCard item={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = Domains.map((domain) => ({
    params: { domain: domain.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const domain = Domains.filter((domain) => domain.slug === params.domain);

  return {
    props: {
      domain: domain[0], //coz filter returns array
    },
  };
};

export default Domain;
