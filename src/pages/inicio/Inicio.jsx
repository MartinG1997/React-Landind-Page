import './Inicio.css'
import Masajes from '../../assets/Masajes.jpg';
import { Card } from '../../components/Card/Card';

export const Inicio = () => {
    return(
        <>
            <div className='container'>
                <div className=''>
                    <img  className='border' src={Masajes} alt="" />
                </div>
                <div className='subcontainer'>
                    <h1>Hola mundo</h1>
                    <p>
                        Escapa del estrés de la vida cotidiana con nuestros masajes relajantes y descontracturantes, todo en la comodidad
                        de tu hogar. Déjate envolver por una suave presión, delicados aromas y una agradable melodía para relajar cuerpo y mente.
                    </p>
                </div>
            </div>
            <div className='card-container spacea'>
                <Card UrlImagen={Masajes} Titulo={"Tipos de masajes"} Descripcion={"En RelaxIA realizamos masajes relajantes y descontracturantes con una sesión de aromaterapia. Descubre los beneficios para tu bienestar."}/>
                <Card UrlImagen={Masajes} Titulo={"Servicios"} Descripcion={"Nuestro principal servicio son masajes a domicilio, pero también puedes regalarlos a quien desees."}/>
                <Card UrlImagen={Masajes} Titulo={"Contáctanos"} Descripcion={"Consulta todos los medios de contacto y elige el que más te convenga."}/>
                <Card UrlImagen={Masajes} Titulo={"Contáctanos"} Descripcion={"Consulta todos los medios de contacto y elige el que más te convenga."}/>
            </div>
        </>
    )
}