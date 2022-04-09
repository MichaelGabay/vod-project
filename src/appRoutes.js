import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Layout from './comps/layout';
import VodApp from './comps/vodApp'
import PageNotFound404 from './comps/pageNotFound404';
import Info from './comps/info';

export default function AppRoutes() {
    return (

        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='*' element={<PageNotFound404/>}/>
                    <Route index element={<VodApp/>} />
                    <Route path='/search/:searchP' element={<VodApp/>} />
                    <Route path='/search/:searchP/year/:year' element={<VodApp/>} />
                    <Route path='/video/:id' element={<Info/>} />
                    <Route path='/search/:searchP/year/:year/video/:id' element={<Info/>} />
                

                </Route>
            </Routes>
        </Router>
    )
}
