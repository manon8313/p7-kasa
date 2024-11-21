import LogoWhite form '../../LogoWhite.png';  
import './footer.css';





export default function footer() {

    return (
        <footer className='footer'>
            <img className='footer_logo' src={LogoWhite} alt="logo"/>
            <div className='footer_info'>© 2020 Kasa. All rights reserved </div>
        </footer>
        )
}