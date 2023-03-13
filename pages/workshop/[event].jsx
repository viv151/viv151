import React from 'react';
import Workshops from '../../SiteData/EventData/Workshop.json';
import EventLayout from '../../layout/EventLayout';

function EventPage({ event }) {
  return <EventLayout event={event} />;
}

export async function getStaticPaths() {
  const paths = Workshops.map((workshop) => ({
    params: { event: workshop.slug },
  }));
  return { paths: paths.flat(), fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const workshop = Workshops.filter((item) => item.slug === params.event);

  return {
    props: {
      event: workshop[0], //coz filter returns array
    },
  };
};

export default EventPage;
