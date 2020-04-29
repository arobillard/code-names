import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import Welcome from './pages/Welcome';
import Header from './ui-elements/Header';
import Footer from './ui-elements/Footer';

class Router extends React.Component {

  state = {
    userName: "Adam"
  }

  render() {
    return(
      <BrowserRouter>
        <Header />
        <main id="main" role="main" className="pad-t-b-4">
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/:gamecode' component={App} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }

}

export default Router;