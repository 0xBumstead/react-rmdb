import React, { useContext } from "react"
import PropTypes from "prop-types"
// Helper
import { calcTime, convertMoney } from "../../helpers"
// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles"
// Context
import { LangContext } from "../../context/LangContext"

const MovieInfoBar = ({ time, budget, revenue }) => {
    const [lang] = useContext(LangContext)

    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>{(lang === "fr-FR" ? "Durée : " : "Running time: ") + calcTime(time)}s</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>{(lang === "fr-FR" ? "Recettes : " : "Revenue: ") + convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar