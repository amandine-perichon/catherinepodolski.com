import React from 'react'
import Page from './components/page'
import ImageLink from './components/image-link'
import { Box } from '@chakra-ui/core'
import styles from './home.module.css'

const HomePage: React.FC = () => <Page>
  <p>Catherine Podolski est céramiste et jardinière de talent, sa maison est nichée dans un renfoncement de la rue de l&apos;hospice communal. Son jardin magnifique forme un ilot propice a la création.</p>

  <Box className={styles['image-links']}>
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Pièces modelées" overlayColor="pink" />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Pièces modelées" overlayColor="pink" />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Pièces modelées" overlayColor="pink" />
    <ImageLink src="http://placekitten.com/500/500" to="/modele" overlayTitle="Pièces modelées" overlayColor="pink" />
  </Box>
</Page>

export default HomePage