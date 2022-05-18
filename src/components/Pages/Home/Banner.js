import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Smile like a one year old kid with no teeth. Laugh like a 90 year old man with one teeth. Have a nice day</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;