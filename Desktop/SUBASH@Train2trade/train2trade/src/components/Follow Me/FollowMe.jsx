import React, { useState, useEffect } from 'react';

import img1 from '../../assets/pics/new_img/1.png';
import img2 from '../../assets/pics/new_img/2.png';
import img3 from '../../assets/pics/new_img/3.png';

import youtube from '../../assets/cards/f-youtube.webp'

import youtubes from '../../assets/social/youtube.png'
import insta from '../../assets/social/instagram.png'
import twitter from '../../assets/social/twitter.png'
import telegram from '../../assets/social/telegram.png'

import socialTele from '../../assets/cards/tele.jpeg'
import socialtwitter from '../../assets/cards/1twitter.png'
import socialYoutube from '../../assets/cards/youtube.png'
import socialInsta from '../../assets/cards/insta.png'


import './follow.css'


export default function FollowMe() {

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
        <div className="activityContent">
            <div className='activities'>
                <p style={{ fontSize: '28px', fontWeight: 'bold' }} data-aos="zoom-in-up" data-aos-delay="0">CONNECT WITH ME</p>
                <div className="cardActivities">
                    <div className="cardIntro" data-aos="fade-right" data-aos-delay="200">
                        <img src={socialtwitter}
                            style={{
                                objectFit: 'cover',
                                height: '240px',
                                width: '268px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={twitter}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Twitter</p>
                        </div>
                        <a href="https://twitter.com/subu_thetrader" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro" data-aos="fade-right" data-aos-delay="100">
                        <img src={socialInsta}
                            style={{
                                objectFit: 'cover',
                                height: '240px',
                                width: '268px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={insta}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Instagram</p>
                        </div>
                        <a href="https://www.instagram.com/traintotrade_t2t/" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro" data-aos="fade-left" data-aos-delay="100">
                        <img src={socialYoutube}
                            style={{
                                objectFit: 'fill',
                                height: '240px',
                                width: '268px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={youtubes}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Youtube</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCuvzF0q40j9N51QHGCZvvHA" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro" data-aos="fade-left" data-aos-delay="200">
                        <img src={socialTele}
                            style={{
                                objectFit: 'fill',
                                height: '240px',
                                width: '268px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts" id='telegram'>
                            <img src={telegram}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Telegram</p>
                        </div>
                        <a href="https://t.me/+AolXn1wGGd4zM2M1" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
