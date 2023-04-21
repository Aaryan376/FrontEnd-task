import React from 'react';
import NFT1 from '../assets/images/NFT1.png';
import NFT2 from '../assets/images/NFT2.png';
import NFT3 from '../assets/images/NFT3.png';
import NFT4 from '../assets/images/NFT4.png';
import NFT5 from '../assets/images/NFT5.png';
import Diamond from '../assets/images/diamond.png';
import './Cards.css';

const Cards = () => {
    return (
        <div className='card-container2'>
            <div className='card2'>
                <div className='image-container'>
                    <img src={NFT1} alt="" />
                </div>


                <p className='title'>Azuki #9839</p>
                <div className='details1'>
                    <p className='title-start'>Bought</p>
                    <p className='title'>02.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className='details2'>
                    <p className='title-start'>Floor</p>
                    <p className='title'>12.74 <img src={Diamond} alt="" /> <span>+21.6%</span></p>
                </div>
            </div>
            <div className='card2'>
                <img src={NFT2} alt="" />
                <p className='title'>MAYC #9839</p>
                <div className='details1'>
                    <p className='title-start'>Bought</p>
                    <p className='title'>02.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className='details2'>
                    <p className='title-start'>Floor</p>
                    <p className='title'>12.74 <img src={Diamond} alt="" /> <span>+21.6%</span></p>
                </div>
            </div>
            <div className='card2'>
                <img src={NFT3} alt="" />
                <p className='title'>MoonBirds #9839</p>
                <div className='details1'>
                    <p className='title-start'>Bought</p>
                    <p className='title'>02.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className='details2'>
                    <p className='title-start'>Floor</p>
                    <p className='title'>12.74 <img src={Diamond} alt="" /> <span>+21.6%</span></p>
                </div>
            </div>
            <div className='card2'>
                <img src={NFT4} alt="" />
                <p className='title'>Otherdeed #9839</p>
                <div className='details1'>
                    <p className='title-start'>Bought</p>
                    <p className='title'>02.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className='details2'>
                    <p className='title-start'>Floor</p>
                    <p className='title'>12.74 <img src={Diamond} alt="" /> <span>+21.6%</span></p>
                </div>
            </div>
            <div className='card2'>
                <img src={NFT5} alt="" />
                <p className='title'>Cryptoz #9839</p>
                <div className='details1'>
                    <p className='title-start'>Bought</p>
                    <p className='title'>02.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className='details2'>
                    <p className='title-start'>Floor</p>
                    <p className='title'>12.74 <img src={Diamond} alt="" /> <span>+21.6%</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cards;