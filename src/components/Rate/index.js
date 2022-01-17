import React, { useState, useContext } from "react"
// Styles
import { Wrapper, Text, StyledInput, StyledButton } from "./Rate.styles.js"
// Context
import { LangContext } from "../../context/LangContext.js"

const Rate = ({ callback }) => {
    const [lang] = useContext(LangContext)
    const [value, setValue] = useState(5)

    const handleInput = e => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <Wrapper>
                <StyledInput type="range" min="0" max="10" value={value} onChange={handleInput} />
                <Text>{value}</Text>
            </Wrapper>
            <StyledButton onClick={() => callback(value)}>
                {lang === "fr-FR" ? "Noter" : "Rate"}
            </StyledButton>
        </>
    )
}

export default Rate