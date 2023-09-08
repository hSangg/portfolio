import {
  collection,
  getDocs,
} from 'firebase/firestore'
import { motion } from 'framer-motion'
import ImageGalleryItem from '../../../../components/ImageGalleryItem'
import { db } from '../../../../firebase'

const Index = ({ data }) => {
  console.log(data)
  return (
    <motion.div>
      <motion.div>
        <motion.div className='head'></motion.div>
        <motion.div className='gallery grid grid-cols-10'>
          {data.map((item, index) => (
            <ImageGalleryItem
              key={index}
              image_link={item.image_link}
              name={item.name}
            />
          ))}
        </motion.div>
      </motion.div>
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
