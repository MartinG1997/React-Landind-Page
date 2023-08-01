import { Route, Routes} from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Contacto } from '../contacto/Contacto'
import { Inicio } from '../../pages/inicio/Inicio'

export const AppRouter = () => {
    return(
        <>
            <div className='navigation'>
                <Navbar/>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Inicio/>}/>
                    <Route path='contacto' element={<Contacto/>}/>
                </Route>
            </Routes>
        </>
    )
}