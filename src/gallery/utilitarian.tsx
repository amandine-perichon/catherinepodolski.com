import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera0033 from '../../public/images/utilitarian/cera0033.jpg'
import cera0034 from '../../public/images/utilitarian/cera0034.jpg'
import cera0134 from '../../public/images/utilitarian/cera0134.jpg'
import cera0137 from '../../public/images/utilitarian/cera0137.jpg'
import cera0140 from '../../public/images/utilitarian/cera0140.jpg'
import cera0163 from '../../public/images/utilitarian/cera0163.jpg'
import cera0169 from '../../public/images/utilitarian/cera0169.jpg'
import cera0199 from '../../public/images/utilitarian/cera0199.jpg'
import cera0211 from '../../public/images/utilitarian/cera0211.jpg'
import cera0215 from '../../public/images/utilitarian/cera0215.jpg'
import cera0216 from '../../public/images/utilitarian/cera0216.jpg'
import cera0218 from '../../public/images/utilitarian/cera0218.jpg'
import cera0221 from '../../public/images/utilitarian/cera0221.jpg'
import cera0341 from '../../public/images/utilitarian/cera0341.jpg'
import cera1464639 from '../../public/images/utilitarian/cera1464639.jpg'
import cera1464646 from '../../public/images/utilitarian/cera1464646.jpg'
import cera1464652 from '../../public/images/utilitarian/cera1464652.jpg'
import cera1464654 from '../../public/images/utilitarian/cera1464654.jpg'
import cera1464655 from '../../public/images/utilitarian/cera1464655.jpg'
import cera1656528 from '../../public/images/utilitarian/cera1656528.jpg'
import cera1656533 from '../../public/images/utilitarian/cera1656533.jpg'
import cera1656536 from '../../public/images/utilitarian/cera1656536.jpg'
import cera1747454 from '../../public/images/utilitarian/cera1747454.jpg'
import cera1757521 from '../../public/images/utilitarian/cera1757521.jpg'
import cera1838363 from '../../public/images/utilitarian/cera1838363.jpg'
import cera1898969 from '../../public/images/utilitarian/cera1898969.jpg'
import cera1959590 from '../../public/images/utilitarian/cera1959590.jpg'
import cerachat0902 from '../../public/images/utilitarian/cerachat0902.jpg'

const images = [
  { source: cera0033 },
  { source: cera0034 },
  { source: cera0134 },
  { source: cera0137 },
  { source: cera0140 },
  { source: cera0163 },
  { source: cera0169 },
  { source: cera0199 },
  { source: cera0211 },
  { source: cera0215 },
  { source: cera0216 },
  { source: cera0218 },
  { source: cera0221 },
  { source: cera0341 },
  { source: cera1464639 },
  { source: cera1464646 },
  { source: cera1464652 },
  { source: cera1464654 },
  { source: cera1464655 },
  { source: cera1656528 },
  { source: cera1656533 },
  { source: cera1656536 },
  { source: cera1747454 },
  { source: cera1757521 },
  { source: cera1838363 },
  { source: cera1898969 },
  { source: cera1959590 },
  { source: cerachat0902 }
];

const UtilitarianGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default UtilitarianGalleryPage