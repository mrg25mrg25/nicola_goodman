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
    <div id='opacity' className=' bg-gray-200 p-4'>
      <div className="text text-center font-bold tracking-wider text-4xl pb-5 ">About Me</div>
      <div className="buttons flex flex-row mx-auto w-fit gap-4 flex-wrap justify-center capitalize cursor-pointer">
        <div className="personal_info border border-blue-400 px-2 py-1 rounded "
        onClick={its_perssonal}>personnal info</div>
        <div className="qualification border border-blue-400 px-2 py-1 rounded">qualification</div>
        <div className="skills border border-blue-400 px-2 py-1 rounded">skills</div>
      </div>
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
   
    </div>
  )
}
}
export default MyComponent
