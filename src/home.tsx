import React from 'react'
import Page from './components/page'
import ImageLink from './components/image-link'
import { Box } from '@chakra-ui/core'
import styles from './home.module.css'
import PageContent from './components/page-content'
import house from '../public/images/home/house.jpg'
import modele from '../public/images/home/modele.jpg'
import plates from '../public/images/home/plates.jpg'
import collective from '../public/images/home/collective.jpg'

const HomePage: React.FC = () => <Page>
  <Box className={styles['image-links']}>
    <ImageLink
      src={modele}
      to="/modelees"
      overlayTitle="Pièces modelées"
    />
    <ImageLink src={collective} to="/collectives" overlayTitle={`Oeuvres collectives`} />
    <ImageLink src={plates} to="/vaiselle" overlayTitle="Plats, vases et vaiselle" />
    <ImageLink src={house} to="/maison" overlayTitle="Maison et jardin" />
  </Box>
  <PageContent>
    <Box marginTop="20px">
      <p>Catherine Podolski est céramiste et jardinière de talent, sa maison est nichée dans un renfoncement de la rue de l&apos;hospice communal à Watermael-Boitsfort. Son jardin magnifique forme un îlot propice à la création.</p>
    </Box>
  </PageContent>
</Page>

export default HomePage