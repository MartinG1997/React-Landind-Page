import { BannerImgDer } from "../../components/BannerImgDer/BannerImgDer"
import { BannerImgIzq } from "../../components/BannerImgIzq/BannerImgIzq"
import Masajes from '../../assets/Masajes.jpg';

export const Servicios = () => {
    return(
        <>
            <div className='container'>
                <BannerImgIzq img ={Masajes} titulo={'Hola mundo'} descripcion={'Escapa del estrés de la vida cotidiana con nuestros masajes relajantes y descontracturantes, todo en la comodidad de tu hogar. Déjate envolver por una suave presión, delicados aromas y una agradable melodía para relajar cuerpo y mente.'}/>
            </div>
            <div className='container'>
                <BannerImgDer img ={Masajes} titulo={'Hola mundo'} descripcion={'Escapa del estrés de la vida cotidiana con nuestros masajes relajantes y descontracturantes, todo en la comodidad de tu hogar. Déjate envolver por una suave presión, delicados aromas y una agradable melodía para relajar cuerpo y mente.'}/>
            </div>
        </>
    )
}