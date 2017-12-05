import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from 'src/components/Navbar';
import Landing from 'src/components/Landing';
import NotFound from 'src/components/NotFound';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
              <div>
                  <Navbar />
                  <Switch>
                      <Route exact pattern='/' component={Landing} />
                      <Route component={NotFound} />
                  </Switch>
              </div>
          </BrowserRouter>
        )
    }
}

export default App;
