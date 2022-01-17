import React, { useState, createContext } from 'react'

export const LangContext = createContext()

const LangProvider = ({ children }) => {
    const [state, setState] = useState(undefined)

    return (
        <LangContext.Provider value={[state, setState]}>{children}</LangContext.Provider>
    )
}

export default LangProvider