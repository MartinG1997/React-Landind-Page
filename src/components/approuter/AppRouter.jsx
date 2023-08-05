import { Route, Routes} from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Contacto } from '../contacto/Contacto'
import { Inicio } from '../../pages/inicio/Inicio'
import { Servicios } from '../../pages/Servicios/Servicios'

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
                </Route>
            </Routes>
        </>
    )
}