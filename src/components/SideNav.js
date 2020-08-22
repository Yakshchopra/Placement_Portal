import React from 'react';
import '../static/SideNav.css';
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function SideNav() {
    return (
        <div className="side-nav">
            <div className="content">
                <img className="logo" src="./images/Srmseal.png" alt="logo" />
                <FontAwesomeIcon className="icon" icon={['fa', 'user-edit']} />
                    <h6 className="overlay-cont">
                        Edit Profile
                    </h6>
                <br />
                <div className="icn"><FontAwesomeIcon className="icon-2" icon={['fa', 'book-open']} /><br /></div>
                <FontAwesomeIcon className="icon-2" icon={['fa', 'trophy']} /><br />
                <FontAwesomeIcon className="icon-2" icon={['fa', 'graduation-cap']} /> <br />
                <FontAwesomeIcon className="icon-2" icon={['fa', 'sign-out-alt']} /> <br />
            </div>
           
        </div>
    )
}

export default SideNav;