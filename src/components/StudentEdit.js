import React from 'react';
import SideNav from './SideNav';
import SideInfo from './SideInfo';
import '../static/StudentEdit.css';

function StudentEdit() {
    return (
        <div>
           <SideNav />
           <SideInfo />
           <div className="dash-1">
                <h2 className="welcome container">welcome Yaksh!</h2>
                <h2 className="dash-1-cont container">Educational details</h2>
                <h2 className="dash-1-cont container">Skillset</h2>
                <h2 className="dash-1-cont container">Certifications</h2>
                <h2 className="dash-1-cont container">Placement Details</h2>
           </div>
        </div>
    )
}

export default StudentEdit;
