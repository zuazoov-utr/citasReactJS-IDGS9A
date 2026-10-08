import '../css/paciente.css';

const Paciente = ({
    setVisible,
    pacientes,
    paciente
}) => {

    const handleEditar = () => {
        // Abrir el modal
        setVisible(true);
        // console.log que imprima el array de tarjetas (pacientes)
        console.log(pacientes);
    }

    return (
        <div className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.nombrePaciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}
                >Editar</button>
                <button
                    className="paciente-btn paciente-btn-eliminar"
                >Eliminar</button>
            </div>
        </div>
    );
};

export default Paciente;