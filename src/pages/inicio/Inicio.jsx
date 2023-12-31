import './Inicio.css'
import Masajes from '../../assets/Masajes.jpg';
import { Card } from '../../components/Card/Card';
import { BannerImgIzq } from '../../components/BannerImgIzq/BannerImgIzq';
import { BannerImgDer } from '../../components/BannerImgDer/BannerImgDer';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export const Inicio = () => {
    return(
        <>
            <div className='container'>
                <BannerImgIzq img ={Masajes} subtitulo={'Lo único que una IA no puede hacer'} titulo={'RelaxIA'} descripcion={'Escapa del estrés de la vida cotidiana con nuestros masajes relajantes y descontracturantes, todo en la comodidad de tu hogar. Déjate envolver por una suave presión, delicados aromas y una agradable melodía para relajar cuerpo y mente.'}/>
            </div>
            <div className='card-container spacea'>
                <Card UrlImagen={Masajes} Titulo={"Tipos de masajes"} Descripcion={"En RelaxIA realizamos masajes relajantes y descontracturantes con una sesión de aromaterapia. Descubre los beneficios para tu bienestar."}/>
                <Card UrlImagen={Masajes} Titulo={"Servicios"} Descripcion={"Nuestro principal servicio son masajes a domicilio, pero también puedes regalarlos a quien desees."}/>
                <Card UrlImagen={Masajes} Titulo={"Contáctanos"} Descripcion={"Consulta todos los medios de contacto y elige el que más te convenga."}/>
            </div>
            <div>
                <Contact/>
            </div>
            
            <Footer/>
        </>
    )
}