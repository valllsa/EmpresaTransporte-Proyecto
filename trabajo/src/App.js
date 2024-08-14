import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Camion from './Paginas/Auth/Camion';
import PaginaBienvenida from './Componentes/PaginaBienvenida'; // Ajusta la ruta según tu estructura

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaBienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Camion" element={<Camion />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
