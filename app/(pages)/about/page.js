"use client"

import React,{Component} from 'react'
import Nav from "../nav/page"
import Personal from "../../(aboutPages)/personal/page"
import Qualification from "../../(aboutPages)/Qualification/page"
import Skills from "../../(aboutPages)/skills/page"

class MyComponent extends Component {
  componentDidMount(){}

  render(){
    
  function its_perssonal(){
  var element = document.getElementById("qualification");
  element.classList.toggle("dekhajak");
  var element = document.getElementById("skills");
  element.classList.toggle("dekhajak");
  }
  



  return (
    <div className="about">
      <Nav/>
      <p onClick={its_perssonal}>tip de</p>
      <div className="aboutPages w-fit mx-auto mt-5 mb-5">
        <div className="personal_here">
        <Personal/>
        </div>
       <div className="qualification_here"id='qualification'>
       <Qualification/>
       </div>
       <div className="skills_here"id='skills'>
       <Skills/>
       </div>
      </div>
   
    </div>
  )
}
}
export default MyComponent
