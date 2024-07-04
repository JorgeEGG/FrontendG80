import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const URL = 'http://localhost:5000/api/clientes/'


const CompEditarClientes = () => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [cedula, setCedula] = useState('') 
    const [correo, setCorreo] = useState('')
    const [numeroContacto, setNumeroContacto] = useState('')
    const [nit, setNit] = useState('')
    const [direccion, setDireccion] = useState('')   
    const navigate = useNavigate()
    const {id} = useParams()
    
    
    // Función editar clientes
    const actualizarClientes = async (e) => {
        e.preventDefault()
        await axios.patch(`${URL}${id}`, {
            nombres: nombres, apellidos: apellidos, cedula: cedula, correo: correo, numeroContacto: numeroContacto, nit: nit, direccion: direccion
        })
        navigate('/clientes')
    }


    useEffect( () => {
        getclientes()
    }, [])


    const getclientes = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setCedula(res.data.cedula)
        setCorreo(res.data.correo)
        setNumeroContacto(res.data.numeroContacto)
        setNit(res.data.nit)
        setDireccion(res.data.direccion)
    }


    return(
        <div>
            <h3>Formulario Editar Clientes</h3>

            <form onSubmit={actualizarClientes}>
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

export default CompEditarClientes