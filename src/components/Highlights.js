import React from "react";
import One from '../assets/images/1.png';
import Two from '../assets/images/2.png';
import Three from '../assets/images/3.png';
import Four from '../assets/images/4.png';
import Five from '../assets/images/5.png';
import Diamond from '../assets/images/diamond.png'
import './Highlights.css';
import Cards from "./Cards";

const Highlights = () => {
    return (
       
        <div className="card-container">
            <div className="card">
                <div className="title-container">
                    <img src={Five} alt="" />
                    <div className="title-text-container">
                        <p className="title">ENS Linked</p>
                        <p className="ens">ENS Linked</p>
                    </div>
                </div>
                <div className="detail1">
                    <p className="title-start">dingaling.eth</p>
                    <p className="title">1.82 <img src={Diamond} alt="" /></p>
                </div>
                <div className="detail2">
                    <p className="title-start">2 months agp</p>
                    <p className="title2">+200XP</p>
                </div>
            </div>
            <div className="card">
                <div className="title-container">
                    <img src={One} alt="" />
                    <div className="title-text-container">
                        <p className="title">Best Flip</p>
                        <p className="sold1">Sold</p>
                    </div>
                </div>
                <div className="detail1">
                    <p className="title-start">CryptoPunk #2131</p>
                    <p className="title">98.5 <img src={Diamond} alt="" /></p>
                </div>
                <div className="detail2">
                    <p className="title-start">10 days agp</p>
                    <p className="title2">+150XP</p>
                </div>
            </div>
            <div className="card">
                <div className="title-container">
                    <img src={Two} alt="" />
                    <div className="title-text-container">
                        <p className="title">Should have...</p>
                        <p className="mint">Mint</p>
                    </div>
                </div>
                <div className="detail1">
                    <p className="title-start">Rare Apepo #6974</p>
                    <p className="title">98.5 <img src={Diamond} alt="" /></p>
                </div>
                <div className="detail2">
                    <p className="title-start">10 days agp</p>
                    <p className="title2">+200XP</p>
                </div>
            </div>
            <div className="card">
                <div className="title-container">
                    <img src={Three} alt="" />
                    <div className="title-text-container">
                        <p className="title">First NFT bought</p>
                        <p className="bought">Bought</p>
                    </div>
                </div>
                <div className="detail1">
                    <p className="title-start">BAYC #7925</p>
                    <p className="title">98.5 <img src={Diamond} alt="" /></p>
                </div>
                <div className="detail2">
                    <p className="title-start">10 days agp</p>
                    <p className="title2">+10XP</p>
                </div>
            </div>
            <div className="card">
                <div className="title-container">
                    <img src={Four} alt="" />
                    <div className="title-text-container">
                        <p className="title">Paper Handed</p>
                        <p className="sold2">Sold</p>
                    </div>
                </div>
                <div className="detail1">
                    <p className="title-start">Moonbird #7866</p>
                    <p className="title">98.5 <img src={Diamond} alt="" /></p>
                </div>
                <div className="detail2">
                    <p className="title-start">10 days agp</p>
                    <p className="title2">+200XP</p>
                </div>
            </div>
            <Cards/>
        </div>
    )
}

export default Highlights;