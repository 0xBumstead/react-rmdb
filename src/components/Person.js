import React, { useContext } from "react"
import { useParams } from "react-router-dom"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config"
// Components
import Grid from "./Grid"
import Spinner from "./Spinner"
import BreadCrumb from "./BreadCrumb"
import PersonInfo from "./PersonInfo"
import Thumb from "./Thumb"
// Hooks
import { usePersonFetch } from "../hooks/usePersonFetch"
// Images
import NoImage from "../images/no_image.jpg"
// Context
import { LangContext } from "../context/LangContext"

const Person = () => {
    const [lang] = useContext(LangContext)
    const { objectId } = useParams()
    const { state: person, loading, error } = usePersonFetch(objectId)

    if (loading) return <Spinner />
    if (error) return <div>{lang === "fr-FR"
        ? "Une erreur s’est produite"
        : "Something went wrong..."}</div>

    return (
        <>
            <BreadCrumb name={person.name} />
            <PersonInfo person={person} />
            <Grid header={lang === "fr-FR" ? "Filmographie" : "Movies"}>
                {person.movies.map(movie => (
                    <Thumb key=
                        {movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        objectId={movie.id}
                    />
                ))}
            </Grid>
        </>
    )
}

export default Person