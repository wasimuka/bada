import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Show from './pages/Show/Show';
import ShowForm from './pages/Show/ShowForm';

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Show} />
        <Route path="/show-form" component={ShowForm} />
      </Switch>
    </div>
  );
}

export default App;
