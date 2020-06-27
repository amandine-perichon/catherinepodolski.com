import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera0011 from '../../public/images/decorative/cera0011.jpg'
import cera0030 from '../../public/images/decorative/cera0030.jpg'
import cera004 from '../../public/images/decorative/cera004.jpg'
import cera0069 from '../../public/images/decorative/cera0069.jpg'
import cera0096 from '../../public/images/decorative/cera0096.jpg'
import cera0114 from '../../public/images/decorative/cera0114.jpg'
import cera0136 from '../../public/images/decorative/cera0136.jpg'
import cera0149 from '../../public/images/decorative/cera0149.jpg'
import cera0159 from '../../public/images/decorative/cera0159.jpg'
import cera0164 from '../../public/images/decorative/cera0164.jpg'
import cera0171 from '../../public/images/decorative/cera0171.jpg'
import cera0299 from '../../public/images/decorative/cera0299.jpg'
import cera030 from '../../public/images/decorative/cera030.jpg'
import cera1626249 from '../../public/images/decorative/cera1626249.jpg'
import cera1626250 from '../../public/images/decorative/cera1626250.jpg'
import cera1636361 from '../../public/images/decorative/cera1636361.jpg'
import cera1747456 from '../../public/images/decorative/cera1747456.jpg'
import cera1797948 from '../../public/images/decorative/cera1797948.jpg'

const images = [
  { source: cera1626249 },
  { source: cera1626250 },
  { source: cera1636361 },
  { source: cera1747456 },
  { source: cera1797948 },
  { source: cera0159 },
  { source: cera0164 },
  { source: cera0171 },
  { source: cera0299 },
  { source: cera0149 },
  { source: cera004 },
  { source: cera0011 },
  { source: cera0030 },
  { source: cera0069 },
  { source: cera0096 },
  { source: cera0114 },
  { source: cera0136 },
  { source: cera030 }
];

const DecorativeGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default DecorativeGalleryPage