import React from "react";
import "./navbar.css";

function Navbar(props) {
    const navList = ['Our Services', 'Why Us', 'Testimonial', 'FAQ'];

    const navListAngker = navList.map((item) => (
        <a href="#">{item}</a>
    ));
    return (
        <div>
            <div className="nav-container">
                <div className="nav-left"></div>

                <div className="nav-right">
                    {navListAngker}
                </div>
            </div>
            <i class="bi bi-list"></i>
        </div>
    );
};

export default Navbar