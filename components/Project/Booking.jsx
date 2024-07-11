import Image from 'next/image'
import { default as React } from 'react'

import {
  GrReactjs,
  GrServer,
} from 'react-icons/gr'
import { PiGithubLogoFill } from 'react-icons/pi'

import { GrStarOutline } from 'react-icons/gr'
function Booking() {
  return (
    <div className=' grid-cols-1 container mx-auto w-full grid lg:grid-cols-3 gap-4 mt-24'>
      <div className='relative'>
        <Image
          layout='fill'
          style={{ borderRadius: 12 }}
          src={'/project/booking.webp'}
        />
      </div>
      <div>
        <h1 className='text-8xl font-semibold text-center'>
          BOOKING.
        </h1>
        <h3 className='text-2xl uppercase text-justify'>
          This app is{' '}
          <span className='text-blue-400'>
            similar to Airbnb
          </span>
          , featuring basic functions like booking
          accommodations and listing properties.
          Users can find and book apartments,
          houses, and unique stays from local
          hosts. The app aims to connect
          travellers with quality accommodations
          easily.
        </h3>

        <div className='flex mt-4 gap-4 items-center'>
          <button className='flex items-center rounded-full gap-2 justify-center bg-blue-500 px-8 py-4'>
            <GrStarOutline
              size={30}
              color='yellow'
            />
            <h2 className='text-2xl'>DEMO</h2>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='text-justify z-10 rounded-2xl bg-white text-black p-2 text-xl'>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-black rounded-2xl'>
              <GrReactjs size={30} color='red' />
            </div>
            <h1 className='font-bold'>
              CLIENT - REACT NATIVE
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

        <div className='text-justify z-10 rounded-2xl bg-white text-black p-2 text-xl'>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-black rounded-2xl'>
              <GrServer size={30} color='red' />
            </div>
            <h1 className='font-bold'>
              SERVER - NODEJS
            </h1>
          </div>
          <ul className='uppercase mt-2 divide-y-2 divide-zinc-700 divide-dotted'>
            {TTECH_SERVER.map((x, i) => (
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
      </div>
    </div>
  )
}

export default Booking

const TTECH_CLIENT = [
  'Calling API with Axios.',
  'Enable searching with Google Map (Clustering optimization).',
  'Manage state with Zustand.',
  'Additional features: book room, search, short video, realtime chatting.',
]

const TTECH_SERVER = [
  'Send response to client.',
  'Config Email when user forgot password.',
  'Enable search functionality with multiple conditions for rooms.',
  'Using Mongodb for data storage.',
]
export function createMarkup(dirty) {
  return { __html: dirty }
}
