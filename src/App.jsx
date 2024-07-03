
import './App.css'

// importamos las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// el componente se importa automáticamente
import CompMostrarClientes from './componentes/CompMostrarClientes'

function App() {

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/clientes' element={<CompMostrarClientes />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
