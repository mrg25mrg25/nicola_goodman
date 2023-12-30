"use client"
 import React, { Component } from 'react';
 import Image from 'next/image'
import menu from "../../img/menu.png"

 class MyComponent extends Component {

componentDidMount() {

}

  render() {
    function ok(){
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
    }
    function opacity(){
      var element = document.getElementById("opacity");
      element.classList.toggle("blur");
    }
 return (
      <>    
        <div className="nav flex flex-row justify-between px-4 py-2 bg-gray-300">
            <div className="logo uppercase tracking-wider style font-bold bg-gray-200 rounded px-2 py-1">better call nicola</div>
            <div className="menu h-8 w-8" onClick={ok}>
                <Image alt='o' src={menu} onClick={opacity}></Image>
            </div>
        </div>
        <div id="myDIV" className='hidden px-4'>pp</div>

      </>
     );
   }
 }
 
 export default MyComponent;

