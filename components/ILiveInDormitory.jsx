import { motion } from 'framer-motion'
import React from 'react'
import {
  imgAnimate,
  imgAnimate_1,
  textAnimate_1,
  textAnimate_2,
} from '../util/framer_motion'
import Image from 'next/image'
import ImageCustom from './ImageCustom'

const ILiveInDormitory = () => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.5 }}
      className='mb-[200px]'
    >
      <motion.div variants={textAnimate_1}>
        <motion.div className='text-2xl lg:text-5xl font-bold tex pb-2 t-center lg:text-left'>
          Mình ở kí túc xá . (2021 - present)
        </motion.div>

        <motion.p
          className=' text-xl lg:text-4xl mt-5 text-justify '
          variants={textAnimate_2}
        >
          {' '}
          Mình chọn ở kí túc xá một phần là vì nó
          rẻ, phần còn lại là mình rất ham dui.
          Được nghe review là nếu thời sinh viên
          mà chưa từng ở kí túc xá thì đã mất đi
          50% thanh xuân rồi
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: '100px' }}
        whileInView={{ opacity: 1, y: 0 }}
        className='flex justify-center
      mb-[100px]
      items-center gap-5 flex-col mt-5 lg:flex-row'
      >
        <motion.div className='w-full h-[300px] lg:h-[700px] relative'>
          <Image
            style={{ borderRadius: '20px' }}
            objectFit='cover'
            loading='lazy'
            src='/kitucxa.jpg'
            layout='fill'
            alt='kituxa'
          />
        </motion.div>

        <motion.div className='w-full h-[300px] lg:h-[700px] relative'>
          <Image
            style={{ borderRadius: '20px' }}
            objectFit='cover'
            loading='lazy'
            src='/family.jpg'
            alt='ktx'
            layout='fill'
          />
        </motion.div>
      </motion.div>

      <motion.div>
        <motion.h1 className='text-2xl lg:text-5xl font-bold '>
          Tớ có những người bạn
        </motion.h1>

        <motion.div
          className='flex flex-col xl:flex-row items-center xl:items-start
        gap-10 justify-center'
        >
          <motion.div className='text-xl lg:text-4xl text-justify my-4 iCielBCOldStyle-Regular'>
            Thật sự thì mình mới để ý đến sự hiện
            diện của những bạn nhỏ này ở nơi mình
            hay lui đến trong khoảng đầu năm nay
            thôi (2023), theo mình được biết thì
            những bạn này 1 phần là mèo hoang, 1
            phần là do những bạn ở đây chuyển ra
            ngoài rồi không mang theo :( Buồn ha.{' '}
            <br></br> <br></br>
            Nhưng cứ như một sự bù đắp, các bạn ở
            đây cũng rất được mọi người thương iu,
            người thì cho ăn, người thì chơi, thậm
            chí còn trò chuyện cùng cơ. Mong rằng
            sau thế hệ của mình, những bạn này vẫn
            sẽ luôn được yêu thương như thế
            <span className='inline-block translate-x-2 translate-y-2'>
              <Image
                width={'40px'}
                height={'40px'}
                src={'/tulipicon.png'}
                alt='tulip'
              />
            </span>
          </motion.div>
          <motion.div className='w-[70vw] h-[47vw] sm:w-[70vw] sm:h-[47vw] xl:w-[30vw] xl:h-[20vw] relative shrink-0'>
            <ImageCustom
              srcName='themeo.png'
              layout='fill'
              objectFit='contain'
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{ staggerChildren: 0.5 }}
          className='mt-10 flex flex-wrap justify-center items-center gap-4 '
        >
          {[1, 2, 3, 4].map((x) => (
            <motion.div
              className='w-[60vw] h-[60vw] lg:w-[30vw] lg:h-[30vw] relative'
              key={x}
              variants={imgAnimate}
            >
              <Image
                style={{ borderRadius: '20px' }}
                src={`/meo_${x}.jpg`}
                layout='fill'
                objectFit='cover'
                loading='lazy'
                alt='meo'
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ILiveInDormitory
