import {
  motion,
  useMotionValue,
} from 'framer-motion'
import Folder from './Folder'
const dataFolder = [
  {
    name: 'Tình yêu có nghĩa là gì',
    link: '',
  },
  {
    name: 'resource',
    link: '/resource',
  },
  {
    name: 'gallery',
    link: '/artistic/design/gallery',
  },

  {
    name: '????????',
    link: '???????',
  },
]

const MyProject = () => {
  let mouseX = useMotionValue(0)

  return (
    <div className='relative mb-20'>
      <motion.div
        onMouseMove={(e) => {
          mouseX.set(e.pageX)
        }}
        className='flex gap-2 sm:gap-10 absolute left-[50%] translate-x-[-50%]'
      >
        {dataFolder.map(
          ({ name, link }, index) => (
            <Folder
              mouseX={mouseX}
              name={name}
              src={link}
              key={index}
            />
          )
        )}
      </motion.div>
    </div>
  )
}

export default MyProject
