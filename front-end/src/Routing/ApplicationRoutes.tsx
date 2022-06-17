import { Layout } from "antd";
import {BrowserRouter,  Route, Routes } from "react-router-dom";
import { Home, Saved, Main, NotFound } from "../Pages";

const MainComponent = (props: any) => (
    <Layout>
        <BrowserRouter>
        <Routes>
       <Route path='/' element={<Main />} />
       <Route path='/home' element={<Home />} />
       <Route path='/saved' element={<Saved />} /> 
       <Route path='*' element={<NotFound />} /> 
       </Routes>
       </BrowserRouter>
    </Layout>
)

export default MainComponent;