import { useState, useEffect, useContext } from "react"
import API from "../API"
import { isPersistedState } from "../helpers"
import { LangContext } from "../context/LangContext"

export const useMovieFetch = movieId => {
    const [lang] = useContext(LangContext)
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true)
                setError(false)

                const movie = await API.fetchMovie(movieId, lang)
                const credits = await API.fetchCredits(movieId)
                // get directors only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                )

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                setLoading(false)

            } catch (error) {
                setError(false)
            }
        }

        const sessionState = isPersistedState(movieId)
        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return
        }

        fetchMovie()
    }, [movieId, lang])

    // Write to sessionStorage

    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, lang, state])

    return { state, loading, error }
}