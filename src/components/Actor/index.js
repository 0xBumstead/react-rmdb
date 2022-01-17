import React from "react"
import PropTypes from "prop-types"
// Styles 
import { Wrapper, Image, StyledLink } from "./Actor.styles"

const Actor = ({ objectId, name, character, imageUrl }) => (
    <Wrapper>
        <StyledLink to={`/person/${objectId}`}>
            <Image src={imageUrl} alt="actor-thumb" />
            <h3>{name}</h3>
            <p>{character}</p>
        </StyledLink>
    </Wrapper>

)

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actor