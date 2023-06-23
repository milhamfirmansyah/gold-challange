import React from "react";
import "./services.css"

function Services() {
    const servicesList = ['Sewa Mobil Dengan Supir di Bali 12 Jam', 'Sewa Mobil Lepas Kunci di Bali 24 Jam', 'Sewa Mobil Jangka Panjang Bulanan', 'Gratis Antar - Jemput Mobil di Bandara', 'Layanan Airport Transfer / Drop In Out'];

    const eclips = ['eclips-1', 'eclips-2', 'eclips-3', 'eclips-4'];

    const servicesDiv = servicesList.map ((item) => (
        <div className="services-list">
            <div className="ceklis-background">
                <div><i class="bi bi-check"></i></div>
            </div>
            <p>{item}</p>
        </div>
    ));

    const eclipsDiv = eclips.map((item) => (
        <div className={item}></div>
    ));

    return (
        <div className="services-wrapper">
            <div className="services-container">
                <div className="services-left">
                    {eclipsDiv}
                    <img src="src/assets/Happy Girl.png" alt="" />
                </div>

                <div className="services-right">
                    <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <p className="services-detail">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>

                    <div className="services-list-container">
                        {servicesDiv}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services