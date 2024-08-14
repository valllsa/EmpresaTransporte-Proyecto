import React, { useState } from 'react';

const MejorCamion = ({ camiones, encontrarMejorCamion }) => {
    const [carga, setCarga] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        const mejorCamion = encontrarMejorCamion(Number(carga));
        alert(`El mejor camión es: ${mejorCamion}`);
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input 
                type="number" 
                value={carga} 
                onChange={(e) => setCarga(e.target.value)} 
                placeholder="Carga en kg"
                min="0"
            />
            <button type="submit">Buscar mejor camión</button>
        </form>
    );
};

export default MejorCamion;
