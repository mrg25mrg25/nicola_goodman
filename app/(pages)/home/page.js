import React from 'react'
import Nav from "../../(pages)/nav/page"
import Image from 'next/image'
import Nicola from "../../img/nicola (1).jpeg"
import insta from "../../img/instagram.png"
export default function home() {
  return (
    <div className=''>
      <Nav/>
      <div className="home bg-gray-300 px-4 pt-8 sm:grid sm:grid-cols-2 pb-4 "id='opacity'>
        <div className="left-text">
        <div className="text sm:pt-16">
          <p>WEB DEVELOPER</p>
          <p className='capitalize text-4xl font-bold'>hello, it's</p>
          <p className='capitalize text-4xl font-bold'>nicola goodman</p>
        </div>
        <div className="text pb-3">
          <p className=''>I help construction companies to build their online credibility by designing and developing websites</p>
          <p>And I help companies to build their next js or react js apps faster</p>
          <p>And i help them to grow their business and popularity </p>
           <a href="https://www.instagram.com/its_nicolagoodman/" target='_blank'  className="btn flex flex-row gap-2  rounded w-fit px-3 py-2 mt-4 colorme" >
           <p className='capitalize font-bold'>contact me</p>
            <div className="insta_logo">
              <Image alt='img' src={insta} className='h-6 w-6'></Image>
            </div>
            </a>
        </div>
        </div>
        <div className="right-text  flex justify-center items-center">
          <div className="image_here sm:border bg-gray-200 ">
            <div className="image_here_extra_border sm:border sm:px-12 sm:py-12 bg-gray-200">
            <Image alt='' src={Nicola} className='  w-96 h-fit rounded-lg'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
