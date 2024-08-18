import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../VistaCliente/Estilos.css'; 

function LoginAdmin() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/MainAdmin');
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
    </div>
  );
}

export default LoginAdmin;
