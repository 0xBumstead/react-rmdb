import React, { useContext } from "react"
import PropTypes from "prop-types"
// Styles
import { Wrapper, Content, StyledLink } from "./BreadCrumb.styles"
// Context
import { LangContext } from "../../context/LangContext"

const BreadCrumb = ({ name }) => {
    const [lang] = useContext(LangContext)

    return (
        <Wrapper>
            <Content>
                <StyledLink to="/">
                    <span>{lang === "fr-FR" ? "Accueil" : "Home"}</span>
                </StyledLink>
                <span>|</span>
                <span>{name}</span>
            </Content>
        </Wrapper>
    )
}

BreadCrumb.propTypes = {
    name: PropTypes.string
}

export default BreadCrumb