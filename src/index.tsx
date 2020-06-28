import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from './theme'

import HomePage from './home'
import AboutPage from './about'
import ContactPage from './contact'

import DecorativeGalleryPage from './gallery/decorative'
import CollectiveGalleryPage from './gallery/collective'
import UtilitarianGalleryPage from './gallery/utilitarian'
import HouseGalleryPage from './gallery/house'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/contact"><ContactPage /></Route>

          {/* Image Galleries */}
          <Route path="/modelees"><DecorativeGalleryPage /></Route>
          <Route path="/collectives"><CollectiveGalleryPage /></Route>
          <Route path="/vaiselle"><UtilitarianGalleryPage /></Route>
          <Route path="/maison"><HouseGalleryPage /></Route>

          <Route path="/"><HomePage /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
