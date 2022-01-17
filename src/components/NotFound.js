import React, { useContext } from "react"
// Context
import { LangContext } from "../context/LangContext"

const NotFound = () => {
    const [lang] = useContext(LangContext)

    return (
        <div>{lang === "fr-FR" ? "Aucun résultat" : "Not found"}</div>
    )
}

export default NotFound