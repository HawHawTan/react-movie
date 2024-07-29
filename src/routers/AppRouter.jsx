import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageDetails from '../pages/PageDetails';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {



    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/details" element={<PageDetails />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer author={appAuthor} />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter