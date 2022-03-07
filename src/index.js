import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PathProvider } from "./context/PathContext"
import "./CSS/main.css"
ReactDOM.render(
  <React.StrictMode>
    <PathProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </PathProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
