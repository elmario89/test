import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from 'src/components/Shared/Navbar';
import Footer from 'src/components/Shared/Footer';
import Landing from 'src/components/Landing/Landing';
import NotFound from 'src/components/NotFound';
import Winners from 'src/components/Winners';
import Nominees from 'src/components/Nominees';
import AppDetails from 'src/components/AppDetails/AppDetails';
import Jury from 'src/components/Jury';

const App = () => {
    return (
      <div>
          <Navbar />
          <div className='tpa-navbar-outer'>
              <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/winners/:page' component={Winners} />
                  <Route exact path='/nominees/:page' component={Nominees} />
                  <Route path='/appDetails/:id' component={AppDetails} />
                  <Route path='/jury' component={Jury} />
                  <Route component={NotFound} />
              </Switch>
          </div>
          <Footer />
      </div>
    )
};


export default App;
