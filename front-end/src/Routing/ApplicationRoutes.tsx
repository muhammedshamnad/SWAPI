import { Layout } from "antd";
import {BrowserRouter,  Route, Routes } from "react-router-dom";
import { Home, Saved, NotFound } from "../Pages";

const MainComponent = (props: any) => (
    <Layout>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Layout>
)

export default MainComponent;