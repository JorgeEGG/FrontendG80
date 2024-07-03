import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const URL = 'http://localhost:5000/api/clientes/'

const CompMostrarClientes = () => {

    const[clientes, setClientes] = useState([])

    useEffect(() => {
        mostrarClientes()
    }, [])


    // creamos la función mostrar clientes
    const mostrarClientes = async() => {
        const datos = await axios.get(URL)
        setClientes(datos.data)
    }


    // Función eliminar clientes
    const eliminarClientes = async(id) => {
        await axios.delete(`${URL}${id}`)
        mostrarClientes()
    }


    return(

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/clientes/agregar' className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i> </Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>Nombres Cliente</th>
                                    <th>Apellidos Cliente</th>
                                    <th>Documento Cliente</th>
                                    <th>Correo Cliente</th>
                                    <th>Teléfono Cliente</th>
                                    <th>NIT</th>
                                    <th>Dirección</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cli, index) => (
                                    <tr key={index}>
                                        <td>{cli.nombres}</td>
                                        <td>{cli.apellidos}</td>
                                        <td>{cli.cedula}</td>
                                        <td>{cli.correo}</td>
                                        <td>{cli.numeroContacto}</td>
                                        <td>{cli.nit}</td>
                                        <td>{cli.direccion}</td>
                                        <td>
                                            <Link to={`/clientes/editar/${cli._id}`} className="btn btn-primary mt-2 mb-2" > <i className="fa-solid fa-pen-to-square"></i> </Link>
                                            <button onClick={() => eliminarClientes(cli._id)} className="btn btn-danger" > <i className="fa-solid fa-trash"></i> </button>
                                        </td>
                                    </tr>
                                )                                                      
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarClientes