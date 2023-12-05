"use client"
import React from 'react'

import Image, { StaticImageData } from 'next/image'


type Props = {
  text: String,
  image: string
};

function ThemeBox(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center bg-white shadow-sm w-[500px] h-[500px] rounded-[4rem] p-[20px]'>
      <div className="relative">
        <div className='overflow-hidden max-height-[200px] width-[200px] object-contain '>
          <Image src={props.image} alt="Theme" width={400} height={300} className='max-h-[300px] object-cover'/>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-tranparent" />
      </div>
      <h1 className='w-[80%] text-center text-3xl text-black font-semibold pt-[50px]'>{props.text}</h1>
    </div>
  )
}

export default ThemeBox