"use client"
import {Component} from "react"
import Personal from "../../(aboutPages)/personal/page"
import Qualification from "../../(aboutPages)/Qualification/page"
import Skills from "../../(aboutPages)/skills/page"

class MyComponent extends Component{
  componentDidMount(){}
  render(){
    return(
      <>
      <p>dekha jak</p>
      <div className="them">
        <div className="personal">
          <Personal/>
        </div>
        <div className="qualification">
          <Qualification/>
        </div>
        <div className="skills">
          <Skills/>
        </div>
      </div>
      </>
    )
  }
}

export default MyComponent