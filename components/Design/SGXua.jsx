/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { textAnimate_2 } from '../../util/framer_motion'

const SGXua = () => {
  const list_banner = [
    'hnvd',
    'cbsg',
    'txcm',
    'tn',
  ]

  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      transition={{ staggerChildren: 0.5 }}
      className='mt-20'
    >
      <hr className='mb-[30px] mr-[500px] opacity-50'></hr>
      <motion.p
        variants={textAnimate_2}
        className='text-5xl mb-16 iCielBC1676ModernMap'
      >
        Mình dùng những chất liệu mộc mạc, những
        thanh âm dư vị của
        <b> "Sài Gòn Tân Thời"</b> cũng với chất
        riêng của bản thân để tạo nên những
        poster, những biển hiệu mang đậm dư vị của
        Sài Gòn những năm bao cấp.
      </motion.p>

      <motion.div className='flex gap-3'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.img src='/des.png' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.img src='/bxeo.png' />
        </motion.div>
      </motion.div>

      {list_banner.map((x) => (
        <>
          <motion.div
            key={x}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='mt-3'
          >
            <motion.img src={`/${x}.png`} />
          </motion.div>
        </>
      ))}
    </motion.div>
  )
}

export default SGXua
