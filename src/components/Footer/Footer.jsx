import './Footer.css'
import Instagram from '../../assets/Instagram.svg';
import WhatsApp from '../../assets/WhatsApp.svg';
import Gmail from '../../assets/Gmail.svg';

export const Footer = () => {
    return(
        <footer>
            <div>
                <a href='#'><img src={Instagram} alt="" /></a>
            </div>
            <div>
                <a href='#'><img src={WhatsApp} alt="" /></a>
            </div>
            <div>
                <a href='#'><img src={Gmail} alt="" /></a>
            </div>
            
        </footer>
    )
}