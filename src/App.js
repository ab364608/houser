import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';

//Components
import Header from './Components/Header/Header';
import routes from './routes'
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <HashRouter>
      <Header />
      {routes}
    </HashRouter>
  );
}

export default App;
