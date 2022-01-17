import React from "react"
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Components
import Header from "./components/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import Person from "./components/Person"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
//Context
import UserProvider from "./context/UserContext"
import LangProvider from "./context/LangContext"
// Styles
import { GlobalStyle } from "./GlobalStyle"

const App = () => (
  <Router>
    <LangProvider>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:objectId" element={<Movie />} />
          <Route path="/person/:objectId" element={<Person />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </LangProvider>
  </Router>
)

export default App
