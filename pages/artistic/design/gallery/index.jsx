import {
  collection,
  getDocs,
} from 'firebase/firestore'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import ImageGalleryItem from '../../../../components/ImageGalleryItem'
import { db } from '../../../../firebase'
import { useState } from 'react'
import ImageViewer from '../../../../components/ImageViewer'

const Index = ({ data }) => {
  const [imgClick, setImgClick] = useState(null)
  const handleCloseImageViewer = () => {
    setImgClick(null)
  }

  return (
    <motion.div>
      <motion.div className='flex flex-col items-center'>
        <motion.div className='flex flex-col items-center mb-20'>
          <motion.div className='Enigma-V2 mt-20 sm:mt-10 text-4xl sm:text-6xl  xl:text-7xl'>
            Image Gallery
          </motion.div>
          <motion.div className='CODEINK-Regular mt-3'>
            Cao Hoai Sang
          </motion.div>
        </motion.div>

        <motion.div className='grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-8'>
          {data.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setImgClick(item)
              }}
            >
              <ImageGalleryItem
                image_link={item.image_link}
                name={item.name}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {imgClick ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ImageViewer
              image_link={imgClick.image_link}
              name={imgClick.name}
              onChange={handleCloseImageViewer}
            />
          </motion.div>
        ) : undefined}
      </AnimatePresence>
    </motion.div>
  )
}

export default Index

export const getStaticProps = async () => {
  const docsRef = collection(db, 'imageLinks')

  const snapshots = await getDocs(docsRef)

  const data = snapshots.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return {
    props: {
      data,
    },
  }
}
