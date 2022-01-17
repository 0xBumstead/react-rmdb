import React, { useContext } from "react"
import PropTypes from "prop-types"
// Components
import Thumb from "../Thumb"
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config"
// Image
import NoImage from "../../images/no_image.jpg"
// Styles
import { Wrapper, Content, Text } from "./PersonInfo.styles"
// Context
import { LangContext } from "../../context/LangContext"

const PersonInfo = ({ person }) => {
    const [lang] = useContext(LangContext)

    return (
        <Wrapper backdrop={person.profile_path}>
            <Content>
                <Thumb
                    image={
                        person.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt="person-thumb" />
                <Text>
                    <h1>{person.name}</h1>
                    <h3>{lang === "fr-FR" ? "BIOGRAPHIE" : "BIOGRAPHY"}</h3>
                    <p>{person.biography}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}

PersonInfo.propTypes = {
    person: PropTypes.object
}

export default PersonInfo

