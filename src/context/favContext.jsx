import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
    // const [favs, setFavs] = useState(localStorage.getItem('movieData') || ["test"]);
    const [favs, setFavs] = useState([]);


    // what does this do?
    // may need separate states for movie objext and stringified movie objects

    useEffect(() => {
        const movieDataString = JSON.stringify(favs);
        localStorage.setItem("movieData", movieDataString);
    }, [favs])

    return (
        <FavContext.Provider value={{ favs, setFavs }}>
            {children}
        </FavContext.Provider>
    )
}


