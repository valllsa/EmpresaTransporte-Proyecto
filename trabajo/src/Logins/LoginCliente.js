import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../VistaCliente/Estilos.css'; 

function LoginCliente() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/MainCliente');
  };

  return (
    <div className="login-container">
      <h2>¡Ingresa ahora!</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      <div className="register-link">
        <p>¿No tienes una cuenta? <Link to="/registroCliente">¡Regístrate aquí!</Link></p>
      </div>
    </div>
  );
}

export default LoginCliente;
