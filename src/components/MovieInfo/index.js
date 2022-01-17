import React, { useContext } from "react"
import PropTypes from "prop-types"
import API from "../../API"
// Components
import Thumb from "../Thumb"
import Rate from "../Rate"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config"
// Image
import NoImage from "../../images/no_image.jpg"
// Styles
import { Wrapper, Content, Text, StyledLink } from "./MovieInfo.styles"
// Context
import { UserContext } from "../../context/UserContext"
import { LangContext } from "../../context/LangContext"


const MovieInfo = ({ movie }) => {
    const [lang] = useContext(LangContext)
    const [user, setUser] = useContext(UserContext)
    const movieId = movie.id

    var userRate = "..."
    if (user) {
        const userRates = user.accountRates.results
        for (var i = 0; i < userRates.length; i++) {
            const movieRatedId = userRates[i].id
            if (movieId === movieRatedId) {
                userRate = userRates[i].rating
            }
        }
    }

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movieId, value)
        const accountRates = await API.fetchUserRates(
            user.sessionId,
            user.accountId
        )
        setUser({
            sessionId: user.sessionId,
            accountId: user.accountId,
            username: user.username,
            accountRates: accountRates
        })
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt="movie-thumb" />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>{lang === "fr-FR" ? "RÉSUMÉ" : "PLOT"}</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>{lang === "fr-FR" ? "NOTE MOYENNE" : "RATING"}</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>
                                {lang === "fr-FR" ? (
                                    "RÉALISATION"
                                ) : (
                                    "DIRECTOR" + (movie.directors.length > 1 ? "S" : "")
                                )}
                            </h3>
                            {movie.directors.map(director => (
                                <StyledLink to={`/person/${director.id}`}>
                                    <p key={director.credit_id}>{director.name}</p>
                                </StyledLink>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                            <h3>
                                {lang === "fr-FR" ? "DONNER UNE NOTE" : "RATE MOVIE"}
                            </h3>
                            <p>
                                {(lang === "fr-FR" ? "Votre note : " : "Your rate : ") + userRate}
                            </p>
                            <Rate callback={handleRating} />
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo

