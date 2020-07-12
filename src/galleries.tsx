import React from 'react'
import Page from './components/page'
import PageContent from './components/page-content'
import { Stack, Box } from '@chakra-ui/core'
import styles from './home.module.css'
import house from '../public/images/home/house.jpg'
import modele from '../public/images/home/modele.jpg'
import plates from '../public/images/home/plates.jpg'
import collective from '../public/images/home/collective.jpg'
import ImageLink from './components/image-link'

const GalleriesPage: React.FC = () => <Page>
  <PageContent>
    <Stack spacing={5}>
      <Box className={styles['image-links']}>
        <ImageLink
          src={modele}
          to="/modelees"
          overlayTitle="Pièces modelées"
        />
        <ImageLink src={collective} to="/collectives" overlayTitle="Oeuvres collectives" />
        <ImageLink src={plates} to="/vaiselle" overlayTitle="Plats et vaiselle" />
        <ImageLink src={plates} to="/vases" overlayTitle="Vases" />
        <ImageLink src={house} to="/maison" overlayTitle="Maison et jardin de Catherine" />
        <ImageLink src={house} to="/sdb" overlayTitle="Salles de bain et cuisines" />
      </Box>
    </Stack>
  </PageContent>
</Page >

export default GalleriesPage