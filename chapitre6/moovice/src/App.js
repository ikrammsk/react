import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from './components/Home';
import Favorites from './components/Favorites';
import Popular from './components/Popular';
import PopularBtt from './components/PopularBtt';
import Weekly from './components/Weekly';
import WeeklyB from './components/WeeklyB';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">Weekly Battle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular Battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/weekly-battle" component={WeeklyB} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/popular-battle" component={PopularBtt} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;