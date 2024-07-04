import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const URL = 'http://localhost:5000/api/clientes/'

const CompAgregarClientes = () =>{
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [cedula, setCedula] = useState('')
    const [correo, setCorreo] = useState('')
    const [numeroContacto, setNumeroContacto] = useState('')
    const [nit, setNit] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate()


    // Función agregar clientes
    const guardarClientes = async (e) => {
        e.preventDefault()
        await axios.post(URL, {
            nombres: nombres, apellidos: apellidos, cedula: cedula, correo: correo, numeroContacto: numeroContacto, nit: nit,
            direccion: direccion
        })
        navigate('/clientes')
    }

    return(
        <div>
            <h3>Formulario Guardar Clientes</h3>

            <form onSubmit={guardarClientes}>
                <div className='mb-3'>
                    <label className='form-label'>Nombres</label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type='text' className='form-control' />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Apellidos</label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} type='text' className='form-control' />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Documento</label>
                    <input value={cedula} onChange={(e) => setCedula(e.target.value)} type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)} type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Teléfono</label>
                    <input value={numeroContacto} onChange={(e) => setNumeroContacto(e.target.value)} type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>NIT</label>
                    <input value={nit} onChange={(e) => setNit(e.target.value)} type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Dirección</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type='text' className='form-control' />
                </div>
                    
                <button type='submit' className='btn btn-primary'>Guardar</button>               
            </form>
        </div>
    )
}

export default CompAgregarClientes