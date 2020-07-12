import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera0033 from '../../public/images/dishes/cera0033.jpg'
import cera0034 from '../../public/images/dishes/cera0034.jpg'
import cera0134 from '../../public/images/dishes/cera0134.jpg'
import cera0137 from '../../public/images/dishes/cera0137.jpg'
import cera0140 from '../../public/images/dishes/cera0140.jpg'
import cera0211 from '../../public/images/dishes/cera0211.jpg'
import cera0215 from '../../public/images/dishes/cera0215.jpg'
import cera0216 from '../../public/images/dishes/cera0216.jpg'
import cera1464639 from '../../public/images/dishes/cera1464639.jpg'
import cera1464646 from '../../public/images/dishes/cera1464646.jpg'
import cera1464652 from '../../public/images/dishes/cera1464652.jpg'
import cera1464654 from '../../public/images/dishes/cera1464654.jpg'
import cera1464655 from '../../public/images/dishes/cera1464655.jpg'
import cera1656528 from '../../public/images/dishes/cera1656528.jpg'
import cera1747454 from '../../public/images/dishes/cera1747454.jpg'
import cera1757521 from '../../public/images/dishes/cera1757521.jpg'
import cera1838363 from '../../public/images/dishes/cera1838363.jpg'
import cera1898969 from '../../public/images/dishes/cera1898969.jpg'
import cera1959590 from '../../public/images/dishes/cera1959590.jpg'
import cerachat0902 from '../../public/images/dishes/cerachat0902.jpg'

const images = [
  // Vaisselle
  { source: cerachat0902 },
  { source: cera1757521 },
  { source: cera1838363 },
  { source: cera1464639 },
  { source: cera0137 },
  { source: cera0140 },
  { source: cera0134 },
  { source: cera0033 },
  { source: cera0034 },

  // Plats
  { source: cera0211 },
  { source: cera0215 },
  { source: cera0216 },
  { source: cera1464646 },
  { source: cera1464652 },
  { source: cera1464654 },
  { source: cera1464655 },
  { source: cera1656528 },
  { source: cera1747454 },
  { source: cera1898969 },
  { source: cera1959590 },
];

const DishesGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default DishesGalleryPage