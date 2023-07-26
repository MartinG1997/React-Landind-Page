import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Banner } from './components/banner/Banner'
import { Contacto} from './components/contacto/Contacto'
import { AppRouter } from './components/approuter/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
      {/*<BrowserRouter>
        <div className='navigation'>
          <Navbar/>
        </div>
        <div className='container'>
        </div>
        <div className='container'>

        </div>
  </BrowserRouter>*/}
    </>
  )
}

export default App
