import SubDomains from './SubDomains';
import Tech from '../../public/domain/tech.webp';
import NonTech from '../../public/domain/nontech.webp';

module.exports = [
  {
    title: 'Techwizards',
    slug: 'techwizards',
    description: 'technical',
    subdomains: SubDomains.techwizards,
    thumbnail: Tech,
  },
  {
    title: 'Zapdos',
    slug: 'zapdos',
    description: 'non-technical',
    subdomains: SubDomains.zapdos,
    thumbnail: NonTech,
  },
];
