import React from "react";
import "./footer.css"

function Footer() {
    const infoList = {
        address: 'Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000',
        email: 'binarcarrental@gmail.com',
        contact: '081-233-334-808',
    };

    const sectionList = ['Our Services', 'Why Us', 'Testimonial', 'FAQ'];

    const section = sectionList.map((item) => (
        <p>{item}</p>
    ));

    const socmedIcon = [<i class="bi bi-facebook"></i>, <i class="bi bi-instagram"></i>, <i class="bi bi-twitter"></i>,<i class="bi bi-envelope"></i>, <i class="bi bi-twitch"></i>];

    const socmed = socmedIcon.map((icon) => (
        <div className="icon-background">
            <a href="#">{icon}</a>
        </div>
    ));

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-info">
                    <p>{infoList.address}</p>
                    <p>{infoList.email}</p>
                    <p>{infoList.contact}</p>
                </div>

            <div className="section-list">
                {section}
            </div>

            <div className="socmed-container">
                <p>Contact With Us</p>
                <div className="icon-container">
                    {socmed}
                </div>
            </div>

                <div className="footer-binar">
                    <p>Copyright Binar 2022</p>
                    <div className="logo"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer