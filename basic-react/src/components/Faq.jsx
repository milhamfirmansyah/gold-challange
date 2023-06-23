import React from "react";
import './faq.css';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from "react-bootstrap";

function Faq() {
    const faqData = [
        {
            question: 'Apa saja syarat yang dibutuhkan?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga autem mollitia, officiis dolorem earum ratione! Suscipit distinctio deserunt provident totam consectetur quod illo eaque, unde mollitia doloribus ad voluptates',
            eventKey: 0
        },
        {
            question: 'Berapa hari minimal sewa mobil lepas kunci?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga autem mollitia, officiis dolorem earum ratione! Suscipit distinctio deserunt provident totam consectetur quod illo eaque, unde mollitia doloribus ad voluptates',
            eventKey: 1
        },
        {
            question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga autem mollitia, officiis dolorem earum ratione! Suscipit distinctio deserunt provident totam consectetur quod illo eaque, unde mollitia doloribus ad voluptates',
            eventKey: 2
        },
        {
            question: 'Apakah Ada biaya antar-jemput?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga autem mollitia, officiis dolorem earum ratione! Suscipit distinctio deserunt provident totam consectetur quod illo eaque, unde mollitia doloribus ad voluptates',
            eventKey: 3
        },
        {
            question: 'Bagaimana jika terjadi kecelakaan',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga autem mollitia, officiis dolorem earum ratione! Suscipit distinctio deserunt provident totam consectetur quod illo eaque, unde mollitia doloribus ad voluptates',
            eventKey: 4
        },
    ];

    const faqReturn = faqData.map((item) => (
        <Accordion.Item eventKey={item.eventKey}>
            <Accordion.Header className="faq-question"><p>{item.question}</p></Accordion.Header>
            <Accordion.Body className="faq-answer">
                {item.answer}
            </Accordion.Body>
        </Accordion.Item>
    ));

    return (
        <div className="faq-wrapper">
            <div className="faq-container">
                <div className="faq-left">
                    <h3>Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className="faq-right">
                    <Container>
                        <Accordion defaultActiveKey="0">
                            {faqReturn}
                        </Accordion>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Faq