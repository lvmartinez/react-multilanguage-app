import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from './Components/Content';

class App extends Component {

  render(){
    return(

      <Router>

            <Route exact path="/" component={Content} />
            <Route path="/:locale" component={Content} />

      </Router>
    )
  }

}
export default App;
