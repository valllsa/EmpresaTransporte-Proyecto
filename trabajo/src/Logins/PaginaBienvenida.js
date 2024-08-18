// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../VistaCliente/Estilos.css'; 

const PaginaBienvenida = () => {
  return (
    <div className="bienvenida-container">
      <h1>Bienvenido a la Página de Gestión de Camiones</h1>
      <p>Aquí podrás gestionar y controlar los camiones de la empresa de transporte. Desde esta página podrás:</p>
      <ul>
        <li>Ver la lista de camiones.</li>
        <li>Cargar y descargar camiones.</li>
        <li>Encontrar el camión más eficiente para una carga específica.</li>
      </ul>
      <p>Descubre lo que puedes hacer en nuestra pagina usando los botones a continuación.
         ¡Estamos aquí para ayudarte a simplificar toda la gestion!
      </p>
      <div className="bienvenida-buttons">
        <Link to="/LoginCliente">
          <button className="bienvenida-button">Cliente</button>
        </Link>
        <Link to="/LoginAdmin">
          <button className="bienvenida-button">Administrador</button>
        </Link>
        <Link to="/LoginTrans">
          <button className="bienvenida-button">Transportador</button>
        </Link>
        <Link to="/LoginDcamion">
          <button className="bienvenida-button">Dueño Camion</button>
        </Link>
      </div>
    </div>
  );
}

export default PaginaBienvenida;
