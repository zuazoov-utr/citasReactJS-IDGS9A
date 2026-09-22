import { useState } from 'react';
import './css/App.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <main className="container">
      <h1 className="titulo">
        Administrador de Citas <span className="titulo-bold">Veterinario</span>
      </h1>
      <button
        type='button'
        className='btn-nueva-cita'
        onClick={() => setVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>
    </main>
  )
}

export default App
