// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/Auth/Estilos.css'; // Asegúrate de que la ruta sea correcta

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
         ¡Estamos aquí para ayudarte a simplificar toda la geston!
      </p>
      <div className="bienvenida-buttons">
        <Link to="/login">
          <button className="bienvenida-button">Ingresar</button>
        </Link>
        <Link to="/registro">
          <button className="bienvenida-button">Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

export default PaginaBienvenida;
