import React from 'react';
import EventCard from '../../../../components/events/EventCard';
import PageTitle from '../../../../components/utils/PageTitle';
import Layout from '../../../../layout/Layout';
import Domains from '../../../../SiteData/EventData/Domains';
import SubDomain from '../../../../SiteData/EventData/SubDomains';

function SubDom({ subdomain }) {
  const { title, events } = subdomain;
  return (
    <Layout title={title}>
      <PageTitle title={title} />
      <div className="grid grid-cols-6 gap-2">
        {events.map((event) => (
          <div key={event.slug} className="col-span-6 md:col-span-3 lg:col-span-2">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = Domains.map((domain) =>
    domain.subdomains.map((subdomain) => ({
      params: { domain: domain.slug, subdomain: subdomain.slug },
    }))
  );
  return { paths: paths.flat(), fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const subdomain = SubDomain[params.domain].filter((item) => item.slug === params.subdomain);
  return {
    props: {
      subdomain: subdomain[0], //coz filter returns array
    },
  };
};

export default SubDom;
