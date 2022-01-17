import { useState, useEffect, useContext } from "react"
import API from "../API"
import { isPersistedState } from "../helpers"
// Context
import { LangContext } from "../context/LangContext"

export const usePersonFetch = personId => {
    const [lang] = useContext(LangContext)
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                setLoading(true)
                setError(false)

                const person = await API.fetchPerson(personId, lang)
                const credits = await API.fetchPersonMovies(personId)

                setState({
                    ...person,
                    movies: credits.cast,
                })
                setLoading(false)

            } catch (error) {
                setError(false)
            }
        }

        const sessionState = isPersistedState(personId)
        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return
        }

        fetchPerson()
    }, [personId, lang])

    // Write to sessionStorage

    useEffect(() => {
        sessionStorage.setItem(personId, JSON.stringify(state))
    }, [personId, lang, state])

    return { state, loading, error }
}