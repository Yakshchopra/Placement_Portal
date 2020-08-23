import React from 'react';
import '../static/Side-info.css';
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideInfo() {
    return (
        <div className="profile">
            <div className="profile-pic"></div>
                <div className="st-name">
                    <h2>
                        Yaksh Chopra
                    </h2>
            </div>
            <div className="personal-info">
                <FontAwesomeIcon className="st-icon" icon={['fa', 'envelope']} />
                <span>yakshchopra@gmail.com</span>
            </div>
            <div className="personal-info">
                <FontAwesomeIcon className="st-icon" icon={['fa', 'phone-alt']} />
                <span>+91-9682567645</span>
            </div>
            <div className="personal-info">
                <FontAwesomeIcon className="st-icon" icon={['fa', 'id-card-alt']} />
                <span>RA1811032010048</span>
            </div>
            <div className="personal-info">
                <FontAwesomeIcon className="st-icon" icon={['fa', 'chalkboard-teacher']} />
                <span>Mr. KC Prabushankar</span>
            </div>
        </div>
    )
}

export default SideInfo;