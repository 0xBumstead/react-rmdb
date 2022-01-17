import React, { useContext } from "react"
import { Link } from "react-router-dom"
// Images
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
// Styles
import { Wrapper, Content, ReactMovie, StyleSelect, MovieDB, Login, Logout, LogoImg, TMDBLogoImg } from "./Header.styles"
// Context
import { UserContext } from "../../context/UserContext"
import { LangContext } from "../../context/LangContext"

const Header = () => {
    const [user, setUser] = useContext(UserContext)
    const [lang, setLang] = useContext(LangContext)

    const handleSubmit = () => {
        setUser("")
    }

    const handleChange = (langValue) => {
        setLang(langValue)
        sessionStorage.clear()
    }

    return (
        <Wrapper>
            <Content>
                <ReactMovie>
                    <Link to="/">
                        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
                    </Link>
                    <StyleSelect
                        value={lang}
                        onChange={event => handleChange(event.currentTarget.value)}
                    >
                        <option value="en-US">English</option>
                        <option value="fr-FR">Français</option>
                    </StyleSelect>
                </ReactMovie>

                <MovieDB>
                    <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
                    {user ? (
                        <Login>
                            <div>{user.username}</div>
                            <Logout onClick={handleSubmit}>
                                {lang === "fr-FR" ? "Déconnexion" : "Log out"}
                            </Logout>
                        </Login>
                    ) : (
                        <Link to="/login">
                            <span>
                                {lang === "fr-FR" ? "Connexion" : "Log in"}
                            </span>
                        </Link>
                    )}
                </MovieDB>
            </Content>
        </Wrapper>
    )
}

export default Header