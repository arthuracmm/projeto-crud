import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Produtos from './pages/produtos'
import LerMais from './pages/lermais'
import Edit from './pages/edit'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/produtos" element={<Produtos />}/>
        <Route exact path="/lermais" element={<LerMais />}/>
        <Route exact path="/edit" element={<Edit />}/>
      </Routes>
    </Router>
  );
  
}

export default App;
