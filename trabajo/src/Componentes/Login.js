import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Paginas/Auth/Estilos.css'; // Asegúrate de que este archivo esté importado

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirige directamente a la página de camiones sin validar credenciales
    navigate('/Camion');
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
        <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
      </div>
    </div>
  );
}

export default Login;
