import React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { GrReactjs } from 'react-icons/gr'
import { PiGithubLogoFill } from 'react-icons/pi'
import { HiServer } from 'react-icons/hi2'

import { GrStarOutline } from 'react-icons/gr'

const TTech = () => {
  return (
    <div className='grid-cols-1 container mx-auto w-full grid lg:grid-cols-3 gap-4 mt-4'>
      <div className='rounded-2xl col-span-1 lg:col-span-3 bg-black flex flex-col gap-4 font-semibold uppercase mx-auto text-justify text-xl'>
        <div>
          <Image
            width={50}
            height={50}
            src={'/project/logo_ttech.webp'}
          />
          <motion.h1
            whileInView={{ scale: [0.2, 1] }}
            className='flex text-8xl'
          >
            TTECH.{' '}
          </motion.h1>
        </div>

        <div>
          This website{' '}
          <span className='text-blue-300'>
            sells tech products similar to Samsung
            and Apple
          </span>
          , allowing users to search, sort, and
          purchase gadgets like phones, tablets,
          and accessories. It features detailed
          product descriptions, secure payment
          options, and ensures a seamless shopping
          experience for tech enthusiasts.
        </div>

        <div className='flex gap-4 items-center'>
          <button className='flex items-center rounded-full gap-2 justify-center bg-blue-500 px-8 py-4'>
            <GrStarOutline
              size={30}
              color='yellow'
            />
            <h2 className='text-2xl'>DEMO</h2>
          </button>
        </div>
      </div>

      <div className='text-justify z-10 rounded-2xl bg-white text-black p-2 text-xl'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-black rounded-2xl'>
            <GrReactjs size={30} color='red' />
          </div>
          <h1 className='font-bold'>
            CLIENT - NEXTJS
          </h1>
        </div>
        <ul className='uppercase mt-2 divide-y-2 divide-zinc-700 divide-dotted'>
          {TTECH_CLIENT.map((x, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={createMarkup(
                x
              )}
            ></li>
          ))}
        </ul>

        <button className='flex items-center mt-4 rounded-3xl gap-2 justify-center bg-black p-[12px]'>
          <PiGithubLogoFill
            size={24}
            color='white'
          />
        </button>
      </div>

      <div className='relative'>
        <div>
          <Image
            layout='fill'
            style={{
              borderRadius: 12,
            }}
            src={'/project/ttech.webp'}
          />
        </div>
      </div>

      <motion.div
        whileInView={{
          opacity: [0.2, 1],
          x: [20, 0],
        }}
        className='text-justify z-10 rounded-2xl bg-white text-black p-2 text-xl'
      >
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-black rounded-2xl'>
            <HiServer size={30} color='red' />
          </div>
          <h1 className='font-bold'>
            SERVER - ASP.NET
          </h1>
        </div>
        <ul className='uppercase mt-2 divide-y-2 divide-zinc-700 divide-dotted'>
          {TTECH_BACKEND.map((x, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={createMarkup(
                x
              )}
            ></li>
          ))}
        </ul>

        <button className='flex items-center mt-4 rounded-3xl gap-2 justify-center bg-black p-[12px]'>
          <PiGithubLogoFill
            size={24}
            color='white'
          />
        </button>
      </motion.div>
    </div>
  )
}

export default TTech

const TTECH_CLIENT = [
  'Call API with <b>Axios</b> (Config request/response).',
  'Authentication with <b>JWT</b>.',
  'Using <b>Firebase</b> to perform Google login.',
  'Animation with <b>Farmer-Motion</b>, using Tailwind css framework.',
  'Integrate VNPAY for checkout in a Node.js application.',
]

const TTECH_BACKEND = [
  'Send response to client.',
  'Implement <b>pagination</b> for product list responses.',
  'Enable search functionality with multiple conditions for products.',
  'Using <b>MySQL</b> for data storage.',
  '<b>Integrate VNPAY</b> for checkout in a Node.js application.',
]

export function createMarkup(dirty) {
  return { __html: dirty }
}
