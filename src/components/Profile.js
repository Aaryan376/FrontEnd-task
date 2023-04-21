import React from "react";
import ProfileImg from '../assets/images/profileImg.png';
import Twitter from '../assets/images/Twitter.png';
import Rectangle1 from "../assets/images/Rectangle1.png";
import Rectangle2 from "../assets/images/Rectangle2.png";
import Rectangle3 from '../assets/images/Rectangle3.png';
import Rectangle4 from '../assets/images/Rectangle4.png';
import Chevron from '../assets/images/Chevron.png';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-card">
            <div className="profile-container">
                <img src={ProfileImg} alt="profile-img" />
                <div className="profile-title">
                    <p className="profile-text">dingaling.eth</p>
                    <p className="profile-subtext">0xadgf....jkld</p>
                </div>
            </div>
            <div className="social-credentials">
                <div className="social-url">
                    <img src={Twitter} alt="twitter-icon" />
                    <p className="subtext">@dingalingts</p>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#1A1A1A" />
                    <path d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 16C12 21.5228 13.7909 26 16 26C18.2091 26 20 21.5228 20 16C20 10.4772 18.2091 6 16 6C13.7909 6 12 10.4772 12 16Z" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 16H26" stroke="#A2A2A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


            </div>
            <p className="user-bio">
                An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes
            </p>
            <div className="communities">
                <p className="community">Common communities (3)</p>
                <div className="community-logo">
                    <img src={Rectangle1} alt="rectangle1" />
                    <img src={Rectangle2} alt="rectangle2" />
                    <img src={Rectangle3} alt="rectangle3" />
                    <img src={Rectangle4} alt="rectangle4" />
                </div>
            </div>

            <div className="skill-container">
                <div className="skill skill1">
                    <p>Art</p>
                    <p>12%</p>
                </div>
                <div className="skill skill2">
                    <p>Utility</p>
                    <p>12%</p>
                </div>
                <div className="skill skill3">
                    <p>PFP</p>
                    <p>12%</p>
                </div>
                <div className="skill skill4">
                    <p>Metaverse</p>
                    <p>12%</p>
                </div>
                <div className="skill skill5">
                    <p>Gaming</p>
                    <p>12%</p>
                </div>
                <div className="skill skill6">
                    <p>PFP</p>
                    <p>12%</p>
                </div>
                <div className="skill skill7">
                    <p>ens</p>
                    <p>12%</p>
                </div>
            </div>
            <button className="subscribe-btn">Subscribe

                <img src={Chevron} alt="chevron-right-arrow" />
            </button>

        </div>
    )
}

export default Profile;