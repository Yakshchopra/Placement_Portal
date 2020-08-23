import React from 'react';
import '../static/StudentLogin.css';
import {makeStyles,FormControl,TextField, InputLabel,Input,FormHelperText,Button } from '@material-ui/core';



function StudentLogin() {

  return (
      <div className="login">
        <div className="top">
            <img className="srm" src="./images/Srmseal.png" alt="logo" /><span className="heading">SRM Placement Portal</span>
        </div>
        <div className="form">
        <h1 class="frm-txt">Login</h1>
      <form>
        <div className="category-active">Student</div>
        <div className="category-1">Faculty</div>
        <div className="category-2">Admin</div>
        <FormControl>
             <div><TextField required id="outlined-basic" type="text" label="Register Number" variant="outlined" /></div>
             <div class="input"><TextField required id="outlined-basic" type="Password" label="Password" variant="outlined" /></div>
            <Button className="submit" type="submit" variant="contained" color="primary" href="#">
                Submit
            </Button>
        </FormControl>
      </form>

        </div>
      </div>
  );
}

export default StudentLogin;
