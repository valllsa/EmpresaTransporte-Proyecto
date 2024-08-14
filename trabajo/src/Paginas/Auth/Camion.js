import React, { useState } from "react";
import ListaCamiones from "./ListaCamiones";
import CargarCamion from "./CargarCamion";
import DescargarCamion from "./DescargarCamion";
import MejorCamion from "./MejorCamion";
import "./Estilos.css";

const Camion = () => {
  const [camiones, setCamiones] = useState([
    {
      id: 1,
      matricula: "ABC123",
      capacidad: 5000,
      cargaActual: 0,
      consumo: 0.3,
    },
    {
      id: 2,
      matricula: "DEF456",
      capacidad: 7000,
      cargaActual: 0,
      consumo: 0.4,
    },
    {
      id: 3,
      matricula: "GHI789",
      capacidad: 6000,
      cargaActual: 0,
      consumo: 0.35,
    },
    {
      id: 4,
      matricula: "JKL012",
      capacidad: 10000,
      cargaActual: 0,
      consumo: 0.3,
    },
  ]);

  const [activeTab, setActiveTab] = useState("lista");

  const cargarCamion = (id, carga) => {
    setCamiones((prevCamiones) =>
      prevCamiones.map((camion) => {
        if (camion.id === id) {
          if (camion.cargaActual + carga <= camion.capacidad) {
            return { ...camion, cargaActual: camion.cargaActual + carga };
          } else {
            alert("La carga excede la capacidad del camión.");
          }
        }
        return camion;
      })
    );
  };

  const descargarCamion = (id, carga) => {
    setCamiones((prevCamiones) =>
      prevCamiones.map((camion) => {
        if (camion.id === id) {
          if (camion.cargaActual - carga >= 0) {
            return { ...camion, cargaActual: camion.cargaActual - carga };
          } else {
            alert(
              "No se puede descargar más de lo que está cargado en el camion."
            );
          }
        }
        return camion;
      })
    );
  };

  const encontrarMejorCamion = (carga) => {
    const camionesDisponibles = camiones.filter(
      (camion) => camion.capacidad >= carga
    );
    if (camionesDisponibles.length === 0) {
      return "No hay ningún camión disponible";
    }
    camionesDisponibles.sort((a, b) => a.consumo - b.consumo);
    return camionesDisponibles[0].matricula;
  };

  const renderTabContent = () => {
    if (activeTab === "lista") {
      return (
        <>
            <ListaCamiones camiones={camiones} />
          <div className="form-container">
              <CargarCamion camiones={camiones} cargarCamion={cargarCamion} />
              <DescargarCamion
                camiones={camiones}
                descargarCamion={descargarCamion}
              />
            </div>
        </>
      );
    } else if (activeTab === "mejor") {
      return (
        <MejorCamion
          camiones={camiones}
          encontrarMejorCamion={encontrarMejorCamion}
        />
      );
    }
  };

  return (
    <div className="container">
      <h1>Gestión de Empresa de Transporte</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("lista")}>
          Lista de Camiones y Carga/Descarga
        </button>
        <button onClick={() => setActiveTab("mejor")}>Mejor Camión</button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Camion;
