import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera0235 from '../../public/images/sdb/cera0235.jpg'
import cera0244 from '../../public/images/sdb/cera0244.jpg'
import cera0245 from '../../public/images/sdb/cera0245.jpg'
import cera0247 from '../../public/images/sdb/cera0247.jpg'
import cera0250 from '../../public/images/sdb/cera0250.jpg'
import cera0251 from '../../public/images/sdb/cera0251.jpg'
import cera0253 from '../../public/images/sdb/cera0253.jpg'
import cera0305 from '../../public/images/sdb/cera0305.jpg'
import cera037 from '../../public/images/sdb/cera037.jpg'
import cera3 from '../../public/images/sdb/cera3.jpg'

const images = [
  { source: cera3 },
  { source: cera0235 },
  { source: cera0244 },
  { source: cera0245 },
  { source: cera0247 },
  { source: cera0250 },
  { source: cera0251 },
  { source: cera0253 },
  { source: cera0305 },
  { source: cera037 },
];

const SDBGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default SDBGalleryPage