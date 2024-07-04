
import './App.css'

// importamos las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// el componente se importa automáticamente
import CompMostrarClientes from './componentes/CompMostrarClientes'
import CompAgregarClientes from './componentes/CompAgregarClientes'
import CompEditarClientes from './componentes/CompEditarClientes'

function App() {

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/clientes' element={<CompMostrarClientes />}/>
                    <Route path='/clientes/agregar' element={<CompAgregarClientes />}/>
                    <Route path='/clientes/editar/:id' element={<CompEditarClientes />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
