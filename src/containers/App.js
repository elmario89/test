import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Navbar from 'src/components/includes/Navbar';
import Footer from 'src/components/includes/Footer';
import Landing from 'src/components/Landing/Landing';
import NotFound from 'src/components/NotFound';
import Winners from 'src/components/Winners';
import Nominees from 'src/components/Nominees';

const App = () => {
    return (
      <div>
          <Navbar />
          <div className='tpa-navbar-outer'>
              <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/winners' component={Winners} />
                  <Route exact path='/nominees' component={Nominees} />
                  <Route component={NotFound} />
              </Switch>
          </div>
          <Footer />
      </div>
    )
};


export default App;
