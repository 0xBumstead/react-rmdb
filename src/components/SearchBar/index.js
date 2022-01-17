import React, { useState, useEffect, useRef, useContext } from "react"
import PropTypes from "prop-types"
// Styles
import { Wrapper, Content } from "./SearchBar.styles"
// Image
import searchIcon from "../../images/search-icon.svg"
// Context
import { LangContext } from "../../context/LangContext"

const SearchBar = ({ setSearchTerm }) => {
    const [lang] = useContext(LangContext)
    const [state, setState] = useState("")
    const initial = useRef(true)

    useEffect(() => {
        if (initial.current) {
            initial.current = false
            return
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 1000)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder={lang === "fr-FR" ? "Rechercher un film" : "Search Movie"}
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar