import React from 'react';
// Import Icons

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServiceSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock Icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork Icon"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm Icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="Money Icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="imga">
                <img src={home2} alt="Camera"/>
            </div>
        </div>
    )
}

export default ServiceSection;