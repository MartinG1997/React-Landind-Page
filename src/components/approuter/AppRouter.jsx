import { Route, Routes} from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Inicio } from '../../pages/Inicio/Inicio'
import { Servicios } from '../../pages/Servicios/Servicios'
import { Consulta } from '../../pages/consulta/consulta'


export const AppRouter = () => {
    return(
        <>
            <div className='navigation'>
                <Navbar/>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Inicio/>}/>
                    <Route path='servicios' element={<Servicios/>}/>
                    <Route path='consulta/:reserva' element={<Consulta/>}/>
                </Route>
            </Routes>
        </>
    )
}