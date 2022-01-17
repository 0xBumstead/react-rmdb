import React, { useContext } from "react"
import { useParams } from "react-router-dom"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config"
// Components
import Grid from "./Grid"
import Spinner from "./Spinner"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Actor from "./Actor"
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch"
// Image
import NoImage from "../images/no_image.jpg"
// Context
import { LangContext } from "../context/LangContext"

const Movie = () => {
    const [lang] = useContext(LangContext)
    const { objectId } = useParams()
    const { state: movie, loading, error } = useMovieFetch(objectId)

    if (loading) return <Spinner />
    if (error) return <div>{lang === "fr-FR"
        ? "Une erreur s’est produite"
        : "Something went wrong..."}</div>

    return (
        <>
            <BreadCrumb name={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header={lang === "fr-FR" ? "Casting" : "Actors"}>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        objectId={actor.id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie