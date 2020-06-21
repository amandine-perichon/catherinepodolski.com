import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from './theme'
import '@brainhubeu/react-carousel/lib/style.css';

import HomePage from './home'
import AboutPage from './about'
import ContactPage from './contact'
import GalleryPage from './gallery'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
          <Route path="/gallery"><GalleryPage /></Route>

          <Route path="/"><HomePage /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
