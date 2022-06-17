import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'; 
import {Provider} from 'mobx-react';
import {Layout} from 'antd';
import MainComponent from "./Routing/ApplicationRoutes";

import './App.css';

function App() {
  return (
    <MainComponent />
  );
}

export default App;
