import './Footer.css';
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo2} alt="" />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices ipsum neque, at condimentum eros pharetra sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer venenatis congue interdum. Phasellus nulla odio, pellentesque vitae diam in, sollicitudin blandit nibh. Quisque nec purus dui. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.instagram} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy police</li>
            </ul>

        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+995 597757027</li>
            <li>foodgood@gmail.com</li>
        </ul>

        </div>
        </div>
<hr/>
<p className='footer-copyright'> Copyright 2024 © FoodGood.com - All Right Reserved</p>
    </div>
    
  )
}

export default Footer