import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
const API = import.meta.env.VITE_API_KEY;

function PageDetails() {
    const [movie, setMovie] = useState(null)
	const { id } = useParams()

	useEffect( () => {
		const getMovie = async () => {
			const result = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${API}` )
			const json = await result.json()
            
			setMovie(json)
		}

		getMovie()
	} , [])


	return (
		<div>
			<h1>{movie && movie.title}</h1>
			<p>{movie && movie.overview}</p>
		</div>
	)
}

export default PageDetails