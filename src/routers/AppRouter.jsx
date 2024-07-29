import React from 'react'

function AppRouter() {



    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header title={appTitle} />
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