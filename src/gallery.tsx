import React from 'react'
import Page from './components/page'
// @ts-ignore
import Carousel from '@brainhubeu/react-carousel';

const images = ["http://placekitten.com/500/500", "http://placekitten.com/800/500", "http://placekitten.com/200/300", "http://placekitten.com/3000/3000"]

const GalleryPage: React.FC = () => <Page>
  <Carousel infinite arrows>
    <img src={images[0]} />
    <img src={images[1]} />
    <img src={images[2]} />
  </Carousel>
</Page>

export default GalleryPage