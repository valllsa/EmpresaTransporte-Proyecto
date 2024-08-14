import React, { useState } from 'react';

const DescargarCamion = ({ camiones, descargarCamion }) => {
    const [camionSeleccionado, setCamionSeleccionado] = useState(camiones[0]?.id || '');
    const [carga, setCarga] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();

        // Verificar que la carga sea mayor a cero
        const cargaNum = Number(carga);
        if (cargaNum > 0) {
            descargarCamion(Number(camionSeleccionado), cargaNum);
            setCarga(''); // Resetear la carga después de descargar
        } else {
            alert("Por favor, ingresa un valor de carga válido.");
        }
    };

    return (
        <form onSubmit={manejarSubmit}>
            <select value={camionSeleccionado} onChange={(e) => setCamionSeleccionado(e.target.value)}>
                {camiones.map(camion => (
                    <option key={camion.id} value={camion.id}>{camion.matricula}</option>
                ))}
            </select>
            <input 
                type="number" 
                value={carga} 
                onChange={(e) => setCarga(e.target.value)} 
                placeholder="Carga en kg"
                min="0"
            />
            <button type="submit">Descargar</button>
        </form>
    );
};

export default DescargarCamion;
