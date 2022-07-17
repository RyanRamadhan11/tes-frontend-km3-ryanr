

import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/images/bg.jpg';
import image2 from '../../assets/images/about-bg.jpg';

import Style from "./style.module.css";

const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={Style.content}>
                        <p>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className={Style.content}>
                        <p>WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;