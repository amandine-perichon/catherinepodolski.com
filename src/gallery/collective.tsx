import Gallery from './gallery'
import Page from '../components/page'
import React from 'react'

import house from '../../public/images/home/house.jpg'
import modele from '../../public/images/home/modele.jpg'
import plates from '../../public/images/home/plates.jpg'
import collective from '../../public/images/home/collective.jpg'
import test from '../../public/images/modele/test.jpg'

const images = [{ source: house }, { source: modele }, { source: plates }, {
  source: collective, caption: "An image caption as a string, React Node, or a rendered HTML string",
}, { source: test }];

const CollectiveGalleryPage: React.FC = () => <Page>
  <Gallery images={images} />
</Page>

export default CollectiveGalleryPage