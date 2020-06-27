import Carousel, { CommonProps } from 'react-images'
import React from 'react'
import Page from './components/page'
import { Image } from '@chakra-ui/core'
import styles from './gallery.module.css'

import house from '../public/images/home/house.jpg'
import modele from '../public/images/home/modele.jpg'
import plates from '../public/images/home/plates.jpg'
import collective from '../public/images/home/collective.jpg'
import test from '../public/images/modele/test.jpg'

const images = [{ source: house }, { source: modele }, { source: plates }, {
  source: collective, caption: "An image caption as a string, React Node, or a rendered HTML string",
}, { source: test }];

const View: React.FC<CommonProps & { data: { source: string } }> = ({ data }) => {
  return (
    <div className={styles.view}>
      <Image m="auto" objectFit="contain" height="100%" src={data.source} />
    </div>
  )
}

const GalleryPage: React.FC = () => <Page>
  <Carousel
    hideControlsWhenIdle={false}
    views={images}
    components={{ View, Footer: () => null }}
    styles={{
      container: (base) => ({
        ...base,
        paddingBottom: '20px',
        height: 'initial'
      }),
      navigationNext: (base) => ({
        ...base,
        background: '#a5a4af33',
        color: '#48494a'
      }),
      navigationPrev: (base) => ({
        ...base,
        background: '#a5a4af33',
        color: '#48494a'
      })
    }}
  />
</Page>

export default GalleryPage