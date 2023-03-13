import React from 'react';
import Layout from '../../layout/Layout';
import PageTitle from '../../components/utils/PageTitle';
import Robotics from '../../SiteData/EventData/Robotics.json';
import EventCard from '../../components/workshop/Eventcard';

function Robotoric() {
  return (
    <Layout title="Robotics">
      <PageTitle title="Robotics" />
      <div className="grid grid-cols-6 gap-2">
        {Robotics.map((item) => (
          <div key={item.slug} className="col-span-6 lg:col-span-2">
            <EventCard href={`/robotics/${encodeURIComponent(item.slug)}`} event={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Robotoric;
