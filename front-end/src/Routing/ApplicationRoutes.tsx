import { Layout } from "antd";
import {BrowserRouter,  Route, Routes } from "react-router-dom";


const MainComponent = (props: any) => (
    <Layout>
        <BrowserRouter>
        <Routes>
       <Route path='/' element={<div>Root</div>} />
       <Route path='/home' element={<div>Home</div>} />
       <Route path='/saved' element={<div>Saved</div>} /> 
       <Route path='*' element={<div>Not found</div>} /> 
       </Routes>
       </BrowserRouter>
    </Layout>
)

export default MainComponent;