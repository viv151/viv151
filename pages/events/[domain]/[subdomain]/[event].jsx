import React from 'react';
import EventLayout from '../../../../layout/EventLayout';
import Domains from '../../../../SiteData/EventData/Domains';
import Events from '../../../../SiteData/EventData/Events';

function EventPage({ event }) {
  return <EventLayout event={event} />;
}

export async function getStaticPaths() {
  const paths = Domains.map((domain) =>
    domain.subdomains.map((subdomain) =>
      subdomain.events.map((event) => ({
        params: { event: event.slug, domain: domain.slug, subdomain: subdomain.slug },
      }))
    )
  );
  return { paths: paths.flat().flat(), fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const event = Events[params.subdomain].filter((event) => event.slug === params.event);
  return {
    props: {
      event: event[0], //coz filter returns array
    },
  };
};

export default EventPage;
