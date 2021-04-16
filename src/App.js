import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import University1 from './components/University1';

import University2 from './components/University2';
import University3 from './components/University3';
import University4 from './components/University4';
import University5 from './components/University5';
import University6 from './components/University6';

import Home from './components/Home';
import CambridgeImages from './components/cambridgepictures';
import OxfordImages from './components/oxfordpictures';
import HarvardImages from './components/harvardpictures';
import StanfordImages from './components/stanfordpictures';
import CaliforniaImages from './components/californiapictures';
import LondonImages from './components/londonpictures';

function App() {
  return (
    
      <BrowserRouter>
     
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/university' exact component={University1}/>
      <Route path='/university2' exact component={University2}/>
      <Route path='/university3' exact component={University3}/>
      <Route path='/university4' exact component={University4}/>
      <Route path='/university5' exact component={University5}/>
      <Route path='/university6' exact component={University6}/>
    
      <Route path='/cambridgepictures' exact component={CambridgeImages}/>
      <Route path='/oxfordpictures' exact component={OxfordImages}/>
      <Route path='/harvardpictures' exact component={HarvardImages}/>
      <Route path='/stanfordpictures' exact component={StanfordImages}/>
      <Route path='/californiapictures' exact component={CaliforniaImages}/>
      <Route path='/londonpictures' exact component={LondonImages}/>
      </Switch>
      </BrowserRouter>
    
  );
}

export default App;
