import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../API"
import Link from "@material-ui/core/Link"
// Components
import Button from "../Button"
// Styles
import { Wrapper, Content } from "./Login.styles"
// Context
import { UserContext } from "../../context/UserContext"
import { LangContext } from "../../context/LangContext"

const Login = () => {
    const [lang] = useContext(LangContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const [_user, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        setError(false)
        try {
            const requestToken = await API.getRequestToken()
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            )
            const accountId = await API.fetchAccount(
                sessionId.session_id
            )
            const accountRates = await API.fetchUserRates(
                sessionId.session_id,
                accountId.id
            )

            setUser({ sessionId: sessionId.session_id, accountId: accountId.id, username, accountRates })
            navigate("/")

        } catch (error) {
            setError(true)
        }
    }

    const handleInput = e => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        if (name === "username") setUsername(value)
        if (name === "password") setPassword(value)
    }

    return (
        <Wrapper>
            <Content>
                {error && <div className="error">
                    {lang === "fr-FR"
                        ? "Nom d’utilisateur ou mot de passe incorrect"
                        : "Username/password incorrect"
                    }
                </div>}
                <label>
                    {lang === "fr-FR" ? "Nom d’utilisateur :" : "Username:"}
                </label>
                <input type="text" value={username} name="username" onChange={handleInput} />
                <label>
                    {lang === "fr-FR" ? "Mot de passe :" : "Password:"}
                </label>
                <input type="password" value={password} name="password" onChange={handleInput} />
                <Button
                    text={lang === "fr-FR" ? "Connexion" : "Login"}
                    callback={handleSubmit}
                />
                <Link
                    href="https://www.themoviedb.org/signup"
                    target="_blank"
                    color="inherit"
                    underline="none"
                >
                    {lang === "fr-FR"
                        ? "Inscription sur la Movie DB"
                        : "Sign up to the Movie DB"
                    }
                </Link>
            </Content>
        </Wrapper>
    )
}

export default Login