import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PathProvider } from "./context/PathContext";
import { SearchProvider } from "./context/SearchContext";
import "./CSS/main.css";
ReactDOM.render(
  <React.StrictMode>
    <PathProvider>
      <Router>
        <SearchProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </SearchProvider>
      </Router>
    </PathProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
