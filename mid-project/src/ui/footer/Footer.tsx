import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';


interface Props { }


export const Footer = (props: Props) => {

    return (
        <div className="uu">

            <div className="main-content">
                <div className="left box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>Make your home design with us</p>
                        <div className="social">
                            <a href="#"><span className="fab fa-facebook-f"></span></a>
                            <a href="#"><span className="fab fa-twitter"></span></a>
                            <a href="#"><span className="fab fa-instagram"></span></a>
                            <a href="#"><span className="fab fa-youtube"></span></a>
                            <a href="#"><span className="fab fa-telegram"></span></a>
                            <a href="#"><span className="fab fa-vk"></span></a>
                        </div>
                    </div>
                </div>
                <div className="center box">
                    <h2>Address</h2>
                    <div className="content">
                        <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">  Almaty, Tole bi, 59</span>
                        </div>
                        <div className="phone">
                            <span className="fas fa-phone-alt"></span>
                            <span className="text">  +771 786 54 65</span>
                        </div>
                        <div className="email">
                            <span className="fas fa-envelope"></span>
                            <span className="text">  dreamhouse@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <h2>Partners</h2>
                    <div className="content">
                   
                        <div className="p3">
                        <span className="fas fa-layer-group"></span>
                            <span className="text">  SmithGr  </span>
                        </div>
                        <div className="p4">
                        <span className="fas fa-layer-group"></span>
                            <span className="text">   ​​ZG Design</span>
                        </div>
                        <div className="p5">
                        <span className="fas fa-layer-group"></span>
                            <span className="text">Arkitektur</span>
                        </div>
                        <div className="p6"> 
                        <span className="fas fa-layer-group"></span>
                            <span className="text"> Desiderio</span>
                        </div>
                       

                            
                    </div>
                </div>
            </div>
        </div>

    );
};
