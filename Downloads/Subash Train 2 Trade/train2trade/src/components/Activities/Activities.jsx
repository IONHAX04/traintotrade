import React, { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel';


import img1 from '../../assets/pics/new_img/1.png';
import img2 from '../../assets/pics/new_img/2.png';
import img3 from '../../assets/pics/new_img/3.png';

import '../Follow Me/follow.css'

export default function Activities() {

    const images = [img1, img2, img3];
    const [index, setIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(2);

    const handleSlideClick = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, currentSlide]);


    return (
        <div style={{margin: '0px', padding: '0px'}}>
            <div className="carouselContainer d-md-none d-block" data-aos="flip-up" data-aos-delay="500">
                <div className="courses">
                    <p className="context" style={{ fontSize: '30px', fontWeight: 'bolder'}}>CONTEXT</p>
                    <Carousel activeIndex={index} onSelect={setIndex}>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img1}
                                height='600px'
                                width='1200px'
                                alt='Course 1' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img2}
                                height='600px'
                                width='1200px'
                                alt='Course 2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img3}
                                height='600px'
                                width='1200px'
                                alt='Course 3' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>


            <div className="slider d-md-block d-none" id='slider'>
                <p className="context" style={{ fontSize: '30px', fontWeight: 'bolder' }}>CONTEXT</p>

                <input type='radio' name='slide' id='s1' onClick={() => handleSlideClick(1)} checked={currentSlide === 1} />
                <input type='radio' name='slide' id='s2' onClick={() => handleSlideClick(2)} checked={currentSlide === 2} />
                <input type='radio' name='slide' id='s3' onClick={() => handleSlideClick(3)} checked={currentSlide === 3} />

                <label htmlFor="s1" id='slide1' style={{ borderRadius: '20px' }} >
                    <img src={img1} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>
                <label htmlFor="s2" id='slide2' style={{ borderRadius: '20px' }} >
                    <img src={img2} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>
                <label htmlFor="s3" id='slide3' style={{ borderRadius: '20px' }} >
                    <img src={img3} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>
            </div>
        </div>
    )
}
