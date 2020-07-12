import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera0163 from '../../public/images/vases/cera0163.jpg'
import cera0169 from '../../public/images/vases/cera0169.jpg'
import cera0199 from '../../public/images/vases/cera0199.jpg'
import cera0218 from '../../public/images/vases/cera0218.jpg'
import cera0221 from '../../public/images/vases/cera0221.jpg'
import cera0341 from '../../public/images/vases/cera0341.jpg'
import cera1656533 from '../../public/images/vases/cera1656533.jpg'
import cera1656536 from '../../public/images/vases/cera1656536.jpg'

const images = [
  // Vases
  { source: cera0199 },
  { source: cera0341 },
  { source: cera0218 },
  { source: cera1656533 },
  { source: cera1656536 },
  { source: cera0163 },
  { source: cera0169 },
  { source: cera0221 }
];

const VasesGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default VasesGalleryPage