import '../css/formulario.css';
import { useState } from 'react';

const Formulario = ({
    visible,
    setVisible
}) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    /**
     * Actividad
     * Crear 5 nuevos states
     * Crear 5 nuevos inputs
     *  - Nombre propietario
     *  - Correo
     *  - Telefono
     *  - Fecha Alta
     *  - Sintomas (descripcion)
     * Types
     *  - date
     *  - tel
     *  - email
     * Inputs
     *  - input
     *  - textarea
     */

    return (
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                <div className='formulario-contenido'>
                    <h1 className='formulario-titulo'>Nueva <span className='formulario-titulo-bold'>Cita</span></h1>
                    <button
                        className='btn-cerrar-modal'
                        onClick={() => setVisible(false)}
                    >
                        <span className='btn-texto-cerrar-modal'>Cerrar</span>
                    </button>

                    <form>
                        <div className='formulario-campo'>
                            <label
                                htmlFor="paciente"
                                className='formulario-label'
                            >Nombre Paciente</label>
                            <input
                                id='paciente'
                                type='text'
                                className='formulario-input'
                                placeholder='Perrito Pet'
                                value={nombrePaciente}
                                onChange={(e) => setNombrePaciente(e.target.value)}
                            />
                        </div>
                        <div className='formulario-campo'>
                            <label
                                htmlFor="nombrePropietario"
                                className='formulario-label'
                            >Nombre Propietario</label>
                            <input
                                id='nombrePropietario'
                                type='text'
                                className='formulario-input'
                                placeholder='Juan Perez'
                                value={nombrePropietario}
                                onChange={(e) => setNombrePropietario(e.target.value)}
                            />
                        </div>
                        <div className='formulario-campo'>
                            <label
                                htmlFor="correo"
                                className='formulario-label'
                            >Correo</label>
                            <input
                                id='correo'
                                type='email'
                                className='formulario-input'
                                placeholder='correo@correo.com'
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className='formulario-campo'>
                            <label
                                htmlFor="telefono"
                                className='formulario-label'
                            >Telefono</label>
                            <input
                                id='telefono'
                                type='tel'
                                className='formulario-input'
                                placeholder='Telefono (449 111 22 33)'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                        <div className='formulario-campo'>
                            <label
                                htmlFor="fechaAlta"
                                className='formulario-label'
                            >Fecha Alta</label>
                            <input
                                id='fechaAlta'
                                type='date'
                                className='formulario-input'
                                placeholder='17/10/26'
                                value={fechaAlta}
                                onChange={(e) => setFechaAlta(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Formulario;