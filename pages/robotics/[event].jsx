import React from 'react';
import Robotics from '../../SiteData/EventData/Robotics.json';
import EventLayout from '../../layout/EventLayout';

function EventPage({ event }) {
  return <EventLayout event={event} />;
}

export async function getStaticPaths() {
  const paths = Robotics.map((workshop) => ({
    params: { event: workshop.slug },
  }));
  return { paths: paths.flat(), fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const robotic = Robotics.filter((item) => item.slug === params.event);

  return {
    props: {
      event: robotic[0], //coz filter returns array
    },
  };
};

export default EventPage;
