import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './testimonial.css'

function Testimonial() {

    const testiData = [
        {
            photo: 'src/assets/photo-1.png',
            rating: 5,
            review: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”`,
            name: 'John Dee 32, Bromo',
        },
        {
            photo: 'src/assets/photo-1.png',
            rating: 5,
            review: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”`,
            name: 'John Dee 32, Bromo',
        },
        {
            photo: 'src/assets/photo-2.png',
            rating: 5,
            review: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”`,
            name: 'John Dee 32, Bromo',
        },
    ];


    const testiReturn = testiData.map ((item) => (
        <Carousel.Item className="testi-wrapper">
            <div className="testi-container">
                <div className="testi-photo">
                    <img src={item.photo} alt="" />
                </div>
                <div className="testi-review">
                    <div className="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div><p className="comment">{item.review}</p></div>
                    <div><p className="name">{item.name}</p></div>
                </div>
            </div>
        </Carousel.Item>
    ))

    return (
        <div className="testimonial-wrapper">
            <h3 className="testi-header">Testimonial</h3>
            <p className="testi-text">Berbagai review positif dari para pelanggan kami</p>
            <Carousel>
                {testiReturn}
            </Carousel>
        </div>
    );
};

export default Testimonial