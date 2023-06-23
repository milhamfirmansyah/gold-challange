import React from 'react'
import './hero.css'
import Cars from '../pages/Cars';

function Hero() {
    return (
        <div className='hero-container'>
            <div className="hero-left">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button>Mulai Sewa Mobil</button>
            </div>

            <div className="hero-right">
                <div className="car-background"></div>
                <img className='car-image' src="https://imagecdn.leasingoptions.co.uk/fit-in/750x500/image/vehicles/pix_png2048/mercedes/eqc/1/5suv%20amglinepremium/mercedes_19eqc400amgln4wdsu1b_lowaggressive.png" alt="" />
            </div>
        </div>
    );
};

export default Hero