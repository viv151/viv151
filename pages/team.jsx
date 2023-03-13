import React, { useState } from 'react';
import PageTitle from '../components/utils/PageTitle';
import Layout from '../layout/Layout';
import ProfileCard from '../components/ProfileCard';
import SiteData from '../SiteData/TeamData.json';
import Carousel from 'react-elastic-carousel';

function Team() {
  const sections = {
    convener: 'CONVENER',
    head: 'HEADS',
    coreTeam: 'CORE-TEAM',
    developer: 'DEVLOPERS',
  };

  const [activeSec, setActiveSec] = useState(Object.keys(sections)[0]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const convenerBody = (
    <>
      <Carousel breakPoints={breakPoints}>
        {SiteData?.convenerData?.map((item, index) => (
          <ProfileCard
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            number={item?.number}
            ml={item.ml}
            ll={item.ll}
            il={item.il}
          />
        ))}
      </Carousel>
    </>
  );

  const conreTeamBody = (
    <>
      <Carousel breakPoints={breakPoints}>
        {SiteData?.coreTeamData?.map((item, index) => (
          <ProfileCard
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            number={item?.number}
            ml={item.ml}
            ll={item.ll}
            il={item.il}
          />
        ))}
      </Carousel>
    </>
  );

  const headBody = (
    <>
      <Carousel breakPoints={breakPoints}>
        {SiteData?.headData?.map((item, index) => (
          <ProfileCard
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            number={item?.number}
            ml={item.ml}
            ll={item.ll}
            il={item.il}
          />
        ))}
      </Carousel>
    </>
  );

  const developerBody = (
    <>
      <Carousel breakPoints={breakPoints}>
        {SiteData.developerData.map((item, index) => (
          <ProfileCard
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            number={item?.number}
            ml={item.ml}
            ll={item.ll}
            il={item.il}
          />
        ))}
      </Carousel>
    </>
  );

  const generateBody = () => {
    switch (sections[activeSec]) {
      case sections.convener:
        return convenerBody;
      case sections.coreTeam:
        return conreTeamBody;
      case sections.head:
        return headBody;
      case sections.developer:
        return developerBody;
      default:
        return null;
    }
  };

  return (
    <Layout title="Team ">
      <PageTitle title="Our Team" />
      <div>
        <div className="flex flex-wrap item-center justify-center gap-2 lg:gap-4 mb-12 text-gray-300">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`inline-block text-lg lg:text-xl px-4 py-2 rounded-full cursor-pointer  ${
                activeSec === key ? ' bg-orange-600 font-semibold text-white shadow-lg' : ''
              } `}
              onClick={() => setActiveSec(key)}
            >
              {sections[key]}
            </div>
          ))}
        </div>
        <div className="flex item-center ">{generateBody()}</div>
      </div>
    </Layout>
  );
}

export default Team;
