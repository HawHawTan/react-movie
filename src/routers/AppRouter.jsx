import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageDetails from '../pages/PageDetails';
import PageNotFound from '../pages/PageNotFound';
import { APP_FOLDER_NAME } from '../globals/globalVariables';

function AppRouter() {
    return (
        <BrowserRouter basename={`/curtain-drop`}>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/details/:id" element={<PageDetails />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
