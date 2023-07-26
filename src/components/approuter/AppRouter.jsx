import { Route, Routes} from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Banner } from '../banner/Banner'
import { Contacto } from '../contacto/Contacto'

export const AppRouter = () => {
    return(
        <>
            <div className='navigation'>
                <Navbar/>
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<Banner/>}/>
                    <Route path='contacto' element={<Contacto/>}/>
                </Route>
            </Routes>
        </>
    )
}