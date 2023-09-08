import { motion } from 'framer-motion'
import Image from 'next/image'
import { openNewWindow } from '../util/utils'

const ResourceItem = ({
  name,
  preview_img_url,
  preview_link,
  dowload_link,
  price,
}) => {
  console.log('1')
  return (
    <>
      <motion.li
        whileHover={{
          filter: 'brightness(140%)',
        }}
        className='bg-black flex flex-col h-[550px] sm:h-[400px] md:h-[550px] text-white'
      >
        <div className='relative grow'>
          <div
            className={`OffBit-101Bold absolute bg-orange-600 top-5 left-0 z-10 flex items-center`}
          >
            <h1 className='text-2xl px-4 pt-1 leading-7'>
              ${price}
            </h1>
          </div>
          <Image
            src={preview_img_url}
            layout='fill'
            alt='item.name'
            objectFit='cover'
            loading='lazy'
            blurDataURL='https://placehold.co/600x400/FFF/png'
            placeholder='blur'
          />
        </div>

        <div className='mt-3'>
          <div className='text-xl font-semibold text-center'>
            {name}
          </div>
          <div className='mt-1 flex items-center justify-center gap-2'>
            <div
              onClick={() =>
                openNewWindow(preview_link)
              }
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='relative inline-flex px-2 items-center justify-center  bg-white font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
              >
                <div className='absolute -inset-0.5 -z-10 bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
                PREVIEW
              </motion.button>
            </div>
            <div
              onClick={() =>
                openNewWindow(dowload_link)
              }
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='relative inline-flex px-2 items-center justify-center  bg-white font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
              >
                <div className='absolute -inset-0.5 -z-10 bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
                FREE DOWLOAD
              </motion.button>
            </div>
          </div>
        </div>
      </motion.li>
    </>
  )
}

export default ResourceItem
