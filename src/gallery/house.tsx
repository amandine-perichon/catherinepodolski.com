import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import atelier from '../../public/images/house/atelier.jpg'
import cera0266 from '../../public/images/house/cera0266.jpg'
import cera099 from '../../public/images/house/cera099.jpg'
import cera1272723 from '../../public/images/house/cera1272723.jpg'
import cera1272725 from '../../public/images/house/cera1272725.jpg'
import cera1272733 from '../../public/images/house/cera1272733.jpg'
import cera1626273 from '../../public/images/house/cera1626273.jpg'
import cera1717187 from '../../public/images/house/cera1717187.jpg'
import cera1717189 from '../../public/images/house/cera1717189.jpg'
import cera1717195 from '../../public/images/house/cera1717195.jpg'
import cera1727255 from '../../public/images/house/cera1727255.jpg'
import cera1808008 from '../../public/images/house/cera1808008.jpg'
import cera1848406 from '../../public/images/house/cera1848406.jpg'
import cera1848408 from '../../public/images/house/cera1848408.jpg'
import cera1929204 from '../../public/images/house/cera1929204.jpg'
import cera1939383 from '../../public/images/house/cera1939383.jpg'
import cera1939388 from '../../public/images/house/cera1939388.jpg'
import cera1979782 from '../../public/images/house/cera1979782.jpg'

const images = [
  { source: cera1717187 },
  { source: cera1272723 },
  { source: cera1727255 },
  { source: cera1272725 },
  { source: cera1717189 },
  { source: cera1272733 },
  { source: cera099 },
  { source: cera1626273 },
  { source: cera1717195 },
  { source: cera1848406 },
  { source: cera1848408 },
  { source: cera1808008 },
  { source: cera0266 },
  { source: atelier },
  { source: cera1929204 },
  { source: cera1939383 },
  { source: cera1939388 },
  { source: cera1979782 }
];

const HouseGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default HouseGalleryPage