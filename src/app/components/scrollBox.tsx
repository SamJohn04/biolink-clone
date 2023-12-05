"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    text: String,
    image: string
  };

function ScrollBox(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center bg-[#0a0a0a] border-[#2c2c2c] border-[1px] w-[500px] h-[500px] rounded-[4rem] p-[20px] text-white'>
      <div className="relative">
        <div className='overflow-hidden max-height-[200px] width-[200px] object-contain '>
          <Image src={props.image} alt="Theme" width={400} height={300} className='max-h-[300px] object-cover'/>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#131313] to-tranparent" />
      </div>
      <h1 className='w-[80%] text-center text-3xl text-white font-semibold pt-[50px]'>{props.text}</h1>
    </div>
  )
}

export default ScrollBox