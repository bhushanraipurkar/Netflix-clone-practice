import React from 'react';
import Toon from "../data/toon.png";
import "./fake.css";
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";

function FakePage() {
  return <div>
      
      <div className='main__fake__div'>
      <h1 className='h1__font'><span style={{color:"red"}}>#404</span> Error</h1>
      <h3 className='h3__font'>This page is not Longer !!</h3>
      
</div>
  </div>
}

export default FakePage;
