import { BannerImgDer } from "../../components/BannerImgDer/BannerImgDer"
import { BannerImgIzq } from "../../components/BannerImgIzq/BannerImgIzq"
import Masajes from '../../assets/Masajes.jpg';

export const Servicios = () => {
    return(
        <>
            <div className='container'>
                <BannerImgIzq img ={Masajes} titulo={'Masajes a domicilio'} descripcion={'Nuestro servicio básico consta de un masaje a domicilio en una sesión de una hora. En ella se trabaja la zona posterior del cuerpo desde los pies hasta el cuello, todo esto con un suave sonido para ambientalizar y un delicado aroma, por lo cual son 3 servicios en 1.'}/>
            </div>
            <div className='container'>
                <BannerImgDer img ={Masajes} titulo={'Regalonea a alguien'} descripcion={'También puedes consultarnos por los diferentes regalos que tenemos, estos son uno o más sesiones de masajes que ofrecemos. Consultanos.'}/>
            </div>
        </>
    )
}