import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Layout } from 'antd';
import MainComponent from "./Routing/ApplicationRoutes";

import RootStore from '../src/Store/rootStore';

import { Header } from 'antd/lib/layout/layout';
import Sidebar from './Components/Sidebar';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Provider {...RootStore}>
      <BrowserRouter>
      <Header className='text-light'>SWAPI</Header>
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <MainComponent />
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
