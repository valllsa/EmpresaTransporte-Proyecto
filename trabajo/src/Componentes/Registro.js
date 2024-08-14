import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Paginas/Auth/Estilos.css'

function Registro() {
  const [name,setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí va la lógica de registro
    console.log('Usuario registrado:', user);
    navigate('/login'); // Redirige a la página de login después de registrarse
  };

  return (
    <div className='register-container'>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>

        <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
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
        <input
        type="password"
        placeholder="Confirme Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
