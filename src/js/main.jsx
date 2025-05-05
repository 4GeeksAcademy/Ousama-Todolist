import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import "../styles/index.css"; // Tu CSS sencillo

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarTarea(e) {
    if (e.key === "Enter" && texto.trim() !== "") {
      setTareas([...tareas, texto]);
      setTexto("");
    }
  }

  function borrarTarea(index) {
    setTareas(tareas.filter((_, i) => i !== index));
  }

  return (
    <div className="lista-tareas">
      <h1>Mis Tareas</h1>

      <input
        value={texto}
        onChange={(a) => setTexto(a.target.value)}
        onKeyDown={agregarTarea}
        placeholder="Escribe una tarea y presiona Enter"
      />

      <ul>
        {tareas.length === 0 ? (
          <li>No hay tareas pendientes por realizar</li>
        ) : (
          tareas.map((tarea, i) => (
            <li key={i} className="tarea-item">
              {tarea}
              <button className="boton-borrar" onClick={() => borrarTarea(i)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          ))
        )}
      </ul>

      <p>{tareas.length} {tareas.length === 1 ? "tarea pendiente" : "tareas pendientes"}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tareas />
  </React.StrictMode>
);

