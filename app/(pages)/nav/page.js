"use client"
 import React, { Component } from 'react';
 import Image from 'next/image'
import menu from "../../img/menu.png"
import Link from 'next/link';
import close from "../../img/close.png"

class MyComponent extends Component {
componentDidMount() {}

  render() {
    function ok(){
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
    }

 return (
      <>    
        <div className="nav flex flex-row justify-between px-4 py-2 bg-gray-300">
             <p className='logo uppercase tracking-wider style font-bold bg-gray-200 rounded px-2 py-1'> better call nicola</p>
            <div className="menu h-8 w-8" onClick={ok}>
                <Image alt='o' src={menu} ></Image>
            </div>
        </div>
      
        <div id="myDIV" className=' nav-list hidden px-4 capitalize flex flex-col p-4 flex flex-row gap-2 '>
          <div className="home border border-gray-800 rounded w-fit px-2 py-1">
            <Link href="../home" >home</Link>
          </div>
          <div className="about border border-gray-800 rounded w-fit px-2 py-1">
            <Link href="../about">about</Link>
          </div>
          <div className="conatct border border-gray-800 rounded w-fit px-2 py-1">
            <Link href="../contact">contact</Link>
          </div>
      
        </div>
      </>
     );
   }
 }
 
 export default MyComponent;

