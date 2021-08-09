import React from 'react';
import './App.css';
import {BrowserRouter, Switch} from "react-router-dom";
import {Header} from "./common/Header";
import {Footer} from "./common/Footer";
import {routes} from "./routes";

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Switch>
      {routes}
    </Switch>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
