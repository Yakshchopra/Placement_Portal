import React from 'react';
import '../static/StudentLogin.css';
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';

function StudentLogin() {
  return (
      <div className="login">
        <div className="top">
            <img className="srm" src="./images/Srmseal.png" alt="logo" /><span className="heading">SRM Placement Portal</span>
        </div>
        <div className="form">
        <FormControl>
             <InputLabel htmlFor="my-input">Email address</InputLabel>
             <Input id="my-input" aria-describedby="my-helper-text" />
             <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>

        </div>
      </div>
  );
}

export default StudentLogin;
