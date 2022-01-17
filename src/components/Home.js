import React, { useContext } from "react"
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"
// Components
import HeroImage from "./HeroImage"
import Grid from "./Grid"
import Thumb from "./Thumb"
import Spinner from "./Spinner"
import SearchBar from "./SearchBar"
import Button from "./Button"
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch"
// Image
import NoImage from "../images/no_image.jpg"
// Styles
import styled from "styled-components"
// Context
import { LangContext } from "../context/LangContext"

const Wrapper = styled.div`
    background: #000000;
    margin: auto auto -20px auto;
`

const Home = () => {
    const [lang] = useContext(LangContext)
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch()

    if (error) return <div>{lang === "fr-FR"
        ? "Une erreur s’est produite"
        : "Something went wrong..."}</div>

    return (
        <>
            <Wrapper>
                {!searchTerm && state.results[0] ? (
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        id={state.results[0].id}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                ) : null}
                <SearchBar setSearchTerm={setSearchTerm} />
                <Grid header={lang === "fr-FR" ? (
                    searchTerm ? "Résultats de recherche" : "Films populaires"
                ) : (
                    searchTerm ? "Search results" : "Popular Movies")}>
                    {state.results.slice(1, 2000).map(movie => (
                        < Thumb key=
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
                {loading && <Spinner />}
                {state.page < state.total_pages && !loading && (
                    <Button
                        text={lang === "fr-FR" ? "Plus de résultats" : "Load more"}
                        callback={() => setIsLoadingMore(true)}
                    />
                )}
            </Wrapper>
        </>
    )
}

export default Home



