import Events from './Events';
import Codesters from './Codesters.json';
import Chemstrom from './Chemstrom.json';
import Civilusion from './Civilusion.json';
import Electrolution from './Electrolution.json';
import Mechanova from './Mechanova.json';
import MindSpark from './MindSpark.json';
import CarnivalOFun from './CarnivalOFun.json';
import Thumbnail from '../../public/thumbnail.png';

module.exports = {
  techwizards: [
    {
      title: 'CODESTERS',
      description: 'loreum',
      slug: 'codesters',
      events: Codesters,
      thumbnail: 'https://res.cloudinary.com/lakshyafest/image/upload/v1649179094/domains/Comp-min_szeyzn.webp',
    },
    {
      title: 'ELECTROLUTION',
      description: 'loreum',
      slug: 'electrolution',
      events: Electrolution,
      thumbnail: 'https://res.cloudinary.com/lakshyafest/image/upload/v1649179096/domains/EC-ELEC-IC-min_bxtmct.webp',
    },
    {
      title: 'CHEMSTROM',
      description: 'loreum',
      slug: 'chemstrom',
      events: Chemstrom,
      thumbnail: 'https://res.cloudinary.com/lakshyafest/image/upload/v1649179092/domains/Chem-min_xlzhmq.webp',
    },
    {
      title: 'CIVILUSION',
      description: 'loreum',
      slug: 'civilusion',
      events: Civilusion,
      thumbnail:
        'https://res.cloudinary.com/lakshyafest/image/upload/v1649179092/domains/civil-poster_2x-min_o8hbjk.webp',
    },
    {
      title: 'Mechanova',
      description: 'loreum',
      slug: 'mechanova',
      events: Mechanova,
      thumbnail:
        'https://res.cloudinary.com/lakshyafest/image/upload/v1649179100/domains/Mechanical-Auto-min_w9xc5w.webp',
    },
  ],
  zapdos: [
    {
      title: 'MINDSPARK',

      description: 'loreum',
      slug: 'mindspark',
      events: MindSpark,
      thumbnail: Thumbnail,
    },
    {
      title: 'CARNIVAL-O-FUN',

      description: 'loreum',
      slug: 'carnival-o-fun',
      events: CarnivalOFun,
      thumbnail: Thumbnail,
    },
  ],
};
