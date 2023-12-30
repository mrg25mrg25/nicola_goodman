import React from 'react'
import Nav from "../../(pages)/nav/page"
import Image from 'next/image'
import Nicola from "../../img/nicola (1).jpeg"
export default function home() {
  return (
    <div className=''>
      <Nav/>
      <div className="home bg-gray-300 px-4 pt-8 sm:grid sm:grid-cols-2 pb-4 "id='opacity'>
        <div className="left-text">
        <div className="text sm:pt-20">
          <p>WEB DEVELOPER</p>
          <p className='capitalize text-4xl font-bold'>hello, it's</p>
          <p className='capitalize text-4xl font-bold'>nicola goodman</p>
        </div>
        <div className="text">
          <p className=''>I help construction companies build their online credibility by designing and developing websites</p>
          <p>And I help companies to build their next js or react apps faster</p>
          <p>And i help them to grow their business and popularity </p>
        </div>
        </div>
        <div className="right-text  flex justify-center items-center">
          <div className="image_here sm:border bg-gray-200">
            <div className="image_here_extra_border sm:border  mt-4 sm:px-12 sm:py-12 bg-gray-200">
            <Image alt='' src={Nicola} className='  w-96 h-fit rounded-lg'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
