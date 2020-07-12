import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from './theme'

import HomePage from './home'
import AboutPage from './about'
import ContactPage from './contact'
import GalleriesPage from './galleries'

import DecorativeGalleryPage from './gallery/decorative'
import CollectiveGalleryPage from './gallery/collective'
import DishesGalleryPage from './gallery/dishes'
import VasesGalleryPage from './gallery/vases'
import HouseGalleryPage from './gallery/house'
import SDBGalleryPage from './gallery/sdb'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/bio"><AboutPage /></Route>
          <Route path="/oeuvres"><GalleriesPage /></Route>
          <Route path="/contact"><ContactPage /></Route>

          {/* Image Galleries */}
          <Route path="/modelees"><DecorativeGalleryPage /></Route>
          <Route path="/collectives"><CollectiveGalleryPage /></Route>
          <Route path="/vaiselle"><DishesGalleryPage /></Route>
          <Route path="/vases"><VasesGalleryPage /></Route>
          <Route path="/maison"><HouseGalleryPage /></Route>
          <Route path="/sdb"><SDBGalleryPage /></Route>

          <Route path="/"><HomePage /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
