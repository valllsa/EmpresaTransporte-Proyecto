import React from 'react';

const ListaCamiones = ({ camiones }) => {
    return (
        <div className='d-flex flex-row'>
            {camiones.map(camion => (
                <div key={camion.id}>
                    <h2>{camion.matricula}</h2>
                    <br></br>
                    <p>Capacidad: {camion.capacidad} kg</p>
                    <p>Carga actual: {camion.cargaActual} kg</p>
                    <p>Consumo: {camion.consumo} gal/km</p>  <br></br>
                </div>
            ))}
        </div>
    );
};

export default ListaCamiones;
