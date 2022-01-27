import React, { Component } from "react";
import Header from "../src/components/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Employees from "../src/components/employees";
import AboutComponent from "./components/about";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
