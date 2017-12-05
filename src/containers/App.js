import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Navbar from 'src/components/Navbar';
import Landing from 'src/components/Landing/Landing';
import NotFound from 'src/components/NotFound';
import Winners from 'src/components/Winners'


const App = () => {
    return (
      <div>
          <Navbar/>
          <div className='tpa-navbar-outer'>
              <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/winners' component={Winners} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </div>
    )
};


export default App;
