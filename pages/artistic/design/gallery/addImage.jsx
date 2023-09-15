import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { db, storage } from '../../../../firebase'
import { UserAuth } from '../../../../context/AuthContext'
import {
  addDoc,
  collection,
} from 'firebase/firestore'

const AddImage = () => {
  const [image, setImage] = useState(null)

  const { isAuthor, googleSignIn, logOut } =
    UserAuth()

  const handleUpload = async () => {
    if (image) {
      const name = image.name
      const storageRef = ref(
        storage,
        `gallery/${name}`
      )
      const uploadTask = uploadBytesResumable(
        storageRef,
        image
      )

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => console.log(error),
        () => {
          getDownloadURL(
            uploadTask.snapshot.ref
          ).then((url) => {
            addDoc(collection(db, 'imageLinks'), {
              ...dataUpload,
              image_link: url,
              name,
            })
          })

          alert('succ')
        }
      )
    }
  }

  return (
    <>
      {isAuthor ? (
        <div>
          <input
            type='file'
            onChange={(e) => {
              setImage(e.target.files[0])
            }}
          />
          <button onClick={() => handleUpload()}>
            upload
          </button>
        </div>
      ) : (
        <motion.button
          initial={{ y: -11, display: 'none' }}
          animate={{
            y: 0,
            opacity: 1,
            display: 'block',
          }}
          exit={{
            opacity: 0,
            y: -10,
            display: 'none',
          }}
          className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          onClick={() => googleSignIn()}
        >
          login
        </motion.button>
      )}
    </>
  )
}

export default AddImage
