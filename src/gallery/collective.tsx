import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import cera7169 from '../../public/images/collective/cera7169.jpg'
import cera0176 from '../../public/images/collective/cera0176.jpg'
import cera0268 from '../../public/images/collective/cera0268.jpg'
import cera0272 from '../../public/images/collective/cera0272.jpg'
import cera0273 from '../../public/images/collective/cera0273.jpg'
import cera0288 from '../../public/images/collective/cera0288.jpg'
import cera0317 from '../../public/images/collective/cera0317.jpg'
import cera0321 from '../../public/images/collective/cera0321.jpg'
import cera0323 from '../../public/images/collective/cera0323.jpg'
import cera0329 from '../../public/images/collective/cera0329.jpg'
import cera0331 from '../../public/images/collective/cera0331.jpg'
import cera0334 from '../../public/images/collective/cera0334.jpg'

const images = [
  { source: cera7169, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0288, caption: 'D. Vandendriessche, Ann Cape et Catherine Podolski' },
  { source: cera0176, caption: 'C. Michiels et Catherine Podolski' },
  { source: cera0268, caption: 'D. Vandendriessche, Ann Cape et Catherine Podolski' },
  { source: cera0272, caption: 'D. Vandendriessche, Ann Cape et Catherine Podolski' },
  { source: cera0273, caption: 'D. Vandendriessche, Ann Cape et Catherine Podolski' },
  { source: cera0317, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0321, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0323, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0329, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0331, caption: 'D. Vandendriessche et Catherine Podolski' },
  { source: cera0334, caption: 'D. Vandendriessche et Catherine Podolski' },
];

const CollectiveGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default CollectiveGalleryPage