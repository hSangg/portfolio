import { motion } from 'framer-motion'
import { useState } from 'react'
const PhoneNumber = () => {
  const [val, setVal] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  const handleClick = (i) => {
    const randomList = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]

    setVal((pre) => {
      const preList = [...pre]
      const preNumber = preList[i]

      let newRandomNumber
      do {
        newRandomNumber =
          randomList[
            Math.floor(
              Math.random() * randomList.length
            )
          ]
      } while (newRandomNumber === preNumber)

      preList[i] = newRandomNumber
      return preList
    })
  }
  return (
    <div className='mt-10 ml-10'>
      <h1 className='mb-2'>Chọn số điện thoại</h1>
      <div className='flex gap-2'>
        {new Array(10).fill(0).map((x, i) => (
          <div className='flex flex-col gap-2'>
            <input
              readOnly
              value={val[i]}
              className='w-10 h-10 rounded-xl text-2xl text-center bg-slate-700/30 text-white border border-white/20 font-bold'
            />
            <motion.button
              onClick={() => handleClick(i)}
              whileHover={{
                backgroundColor: '#ccc',
              }}
              className='bg-white/10 p-2'
            >
              {' '}
              X
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhoneNumber
