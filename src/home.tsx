import React from 'react'
import Page from './components/page'
import ImageLink from './components/image-link'
import { Box } from '@chakra-ui/core'
import styles from './home.module.css'
import PageContent from './components/page-content'

const HomePage: React.FC = () => <Page>
  <Box className={styles['image-links']}>
    <ImageLink
      src="http://placekitten.com/500/500"
      to="/modele"
      overlayTitle="Pièces modelées"
      overlayColor="#504a8494"
    />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Plats, vases et vaiselle" overlayColor="#504a8494" />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Oeuvres collectives" overlayColor="#504a8494" />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Maison et jardin" overlayColor="#504a8494" />
  </Box>
  <PageContent>
    <Box marginTop="20px">
      <p>Catherine Podolski est céramiste et jardinière de talent, sa maison est nichée dans un renfoncement de la rue de l&apos;hospice communal à Watermael-Boitsfort. Son jardin magnifique forme un ilot propice a la création.</p>
    </Box>
  </PageContent>
</Page>

export default HomePage