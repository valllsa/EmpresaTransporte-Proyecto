import React from 'react';

const ListaCamiones = ({ camiones }) => {
    return (
        <div>
            {camiones.map(camion => (
                <div key={camion.id}>
                    <h2>{camion.matricula}</h2>
                    <p>Capacidad: {camion.capacidad} kg</p>
                    <p>Carga actual: {camion.cargaActual} kg</p>
                    <p>Consumo: {camion.consumo} gal/km</p>
                </div>
            ))}
        </div>
    );
};

export default ListaCamiones;
