import React from 'react';
import DomainCard from '../../components/events/DomainCard';
import PageTitle from '../../components/utils/PageTitle';
import Layout from '../../layout/Layout';
import EventData from '../../SiteData/EventData/Domains';
import Workshop from '../../public/domain/workshop.webp';
import Robotics from '../../public/domain/robotics.png';
function Events() {
  return (
    <Layout title="Events">
      <PageTitle title="Events" />
      <div className="flex gap-2 flex-col lg:flex-row text-lak-blue  items-center lg:justify-center">
        {EventData.map((item) => (
          <DomainCard
            href={`/events/${encodeURIComponent(item.slug)}`}
            key={item.slug}
            slug={item.slug}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
          />
        ))}
        <DomainCard
          description="workshop"
          href="/workshop"
          slug="workshop"
          title="Workshop"
          // thumbnail="https://drive.google.com/uc?export=view&id=138GnlLcKSMK78DnG7lqBzPCur7mGyu88"
          thumbnail={Workshop}
        />
        <DomainCard
          description="robotics"
          href="/robotics"
          slug="robotics"
          title="Robotics"
          // thumbnail="https://drive.google.com/uc?export=view&id=1UnN9iZOIaIbPIM6tegdN5h48lILJA32N"
          thumbnail={Robotics}
        />
      </div>
    </Layout>
  );
}

export default Events;
