import React from 'react'
import Page from './components/page'
import ImageLink from './components/image-link'

const HomePage: React.FC = () => <Page>
  <p>Catherine Podolski est céramiste et jardinière de talent, sa maison est nichée dans un renfoncement de la rue de l&apos;hospice communal. Son jardin magnifique forme un ilot propice a la création.</p>

  <ImageLink src="http://placekitten.com/200/300" to="/modele" overlayTitle="Pièces modelées" overlayColor="pink" />
</Page>

export default HomePage