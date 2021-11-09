import React from 'react';
import HeroImg from './assets/hero-img.png';
import StyledHero from './HeroStyles';

function Hero () {
    return(
        <StyledHero>
            <div className="hero-text-container">
                <h1>Hello there <span>!</span>
                    <br />
                    I'm
                    <br />
                    Maria Jimenez
                </h1>
                <p className=""><span>Web developer</span> based in Cordoba, Argentina</p>
            </div>
            <div className="hero-img-container">
                <div className="hero-img-wrapper">
                    <img src={HeroImg} alt="Draw from Picrew by @makowwka"/>
                </div>
            </div>
        </StyledHero>
    )
};

export default Hero;