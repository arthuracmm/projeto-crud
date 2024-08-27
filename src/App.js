import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home/home'
import Produtos from './pages/Produtos/produtos'
import Sobre from './pages/Sobre/sobre'
import Edit from './pages/Edit/edit'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/produtos" element={<Produtos />}/>
        <Route exact path="/sobre" element={<Sobre />}/>
        <Route exact path="/edit" element={<Edit />}/>
      </Routes>
    </Router>
  );
  
}

export default App;
