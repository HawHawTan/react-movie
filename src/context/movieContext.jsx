import { useState } from "react";

function MovieContext() {

    const [favs, setFavs] = useState("I am the favourite!");

    return (
        <div>
            {favs}
        </div>
    )
}

export default MovieContext;