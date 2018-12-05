import React, { Component } from 'react';
import './Carousel.css';
import pic from './kolbasa.jpg';

class Carousel extends Component{
    render() {
        return(
            <div className="payer-company-info">
                <div className="about-company-title">О компании Индивидуальный предприниматель Швецова Мария
                    Валерьевна
                </div>
                <div className="cards-container">
                    <div className="card-box">
                        <div className="card-img-container">
                            <img src={pic} alt="fisrt-opt" className="card-img" />
                        </div>
                        <div className="card-name">Мясная нарезка</div>
                        <div className="card-cost">1000 руб.</div>
                    </div>
                    <div className="card-box">
                        <div className="card-img-container">
                            <img src={pic} alt="fisrt-opt" className="card-img" />
                        </div>
                        <div className="card-name">Мясная нарезка с сюрпризом</div>
                        <div className="card-cost">1050 руб.</div>
                    </div>
                    <div className="card-box">
                        <div className="card-img-container">
                            <img src={pic} alt="fisrt-opt" className="card-img" />
                        </div>
                        <div className="card-name">Мясное удовольствие</div>
                        <div className="card-cost">1050 руб.</div>
                    </div>
                    <div className="card-box">
                        <div className="card-img-container">
                            <img src={pic} alt="fisrt-opt" className="card-img" />
                        </div>
                        <div className="card-name">Мясное удовольствие +</div>
                        <div className="card-cost">999 руб.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel
