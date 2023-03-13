import React from 'react';
import Layout from '../../layout/Layout';
import PageTitle from '../../components/utils/PageTitle';
import WorkShops from '../../SiteData/EventData/Workshop.json';
import EventCard from '../../components/workshop/Eventcard';
function Workshop() {
  return (
    <Layout title="Workshops">
      <PageTitle title="Workshop" />
      <div className="grid grid-cols-6 gap-2">
        {WorkShops.map((item) => (
          <div key={item.slug} className="col-span-6 lg:col-span-2">
            <EventCard href={`/workshop/${encodeURIComponent(item.slug)}`} event={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Workshop;
