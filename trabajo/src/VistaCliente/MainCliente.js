import React, { useState } from 'react';

const camiones = [
    { id: 1, placa: 'ABC123', capacidad: 1000, gasolina: 0.20 },  // Menor capacidad, menor consumo
    { id: 2, placa: 'DFG456', capacidad: 3000, gasolina: 0.25 },
    { id: 3, placa: 'HIJ789', capacidad: 5000, gasolina: 0.30 },
    { id: 4, placa: 'KLM098', capacidad: 10000, gasolina: 0.35 },  // Mayor capacidad, mayor consumo
  ];

const ClienteInterfaz = () => {
  const [peso, setPeso] = useState('');
  const [destino, setDestino] = useState('');
  const [solicitudEstado, setSolicitudEstado] = useState(null);
  const [camionRecomendado, setCamionRecomendado] = useState(null);

  const handleSolicitudSubmit = () => {
    // Aquí iría la lógica para enviar la solicitud al backend
    setSolicitudEstado('Solicitud enviada con éxito. El estado de la entrega se actualizará pronto.');
  };

  const handleConsultaEstado = () => {
    // Aquí iría la lógica para consultar el estado de la solicitud
    setSolicitudEstado('Tu solicitud está en tránsito.');
  };

  const recomendarCamion = (peso) => {
    const camion = camiones.find(c => peso <= c.capacidad);
    setCamionRecomendado(camion || 'No hay camiones disponibles para este peso.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1>Cliente</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Solicitud de Servicios</h2>
        <div>
          <label htmlFor="peso">Peso:</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => {
              setPeso(e.target.value);
              recomendarCamion(e.target.value);
            }}
            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="destino">Destino:</label>
          <input
            type="text"
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
          />
        </div>
        <button
          onClick={handleSolicitudSubmit}
          style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Realizar Solicitud
        </button>
      </div>

      <div>
        <h2>Consultar Estado de Solicitud</h2>
        <button
          onClick={handleConsultaEstado}
          style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Consultar Estado
        </button>
        {solicitudEstado && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h3>Estado de la Solicitud:</h3>
            <p>{solicitudEstado}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Recomendación de Camión</h2>
        {camionRecomendado && (
          <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h3>Camión Recomendado:</h3>
            <p>{camionRecomendado.placa || camionRecomendado}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClienteInterfaz;
