import {
  addDoc,
  collection,
} from 'firebase/firestore'
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import Image from 'next/image'
import { useState } from 'react'
import { db, storage } from '../../../firebase'

import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import { UserAuth } from '../../../context/AuthContext'

const AddItem = () => {
  const { user, googleSignIn, logOut } =
    UserAuth()

  console.log(user)

  const [dataUpload, setDataUpload] = useState({
    name: '',
    preview_link: '',
    dowload_link: '',
    preview_img_url: '',
    price: '',
    image_name: '',
  })

  const [progressUpload, setProgressUpload] =
    useState(0)
  const [image, setImage] = useState(null)

  const handleUpload = async () => {
    if (image) {
      const name = image.name
      console.log(name)
      const storageRef = ref(
        storage,
        `image/${name}`
      )
      const uploadTask = uploadBytesResumable(
        storageRef,
        image
      )

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setProgressUpload(50)
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(
            uploadTask.snapshot.ref
          ).then((url) => {
            addDoc(collection(db, 'resource'), {
              ...dataUpload,
              preview_img_url: url,
              image_name: name,
            })
            setProgressUpload(100)
          })
        }
      )
    }
  }

  return (
    <AnimatePresence>
      {user?.email === 'sangfc774@gmail.com' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className=' text-black '
        >
          <h1 className='text-2xl bg-white px-2 py-0 font-bold'>
            ADD NEW RESOURCE
          </h1>
          <div className='flex bg-white p-2 mt-2 relative'>
            <motion.div
              style={{
                width: `${progressUpload}%`,
              }}
              className='absolute top-0 left-0 bg-green-500 h-1'
            ></motion.div>

            <div className='flex flex-col'>
              <div className='flex text-xl gap-2 '>
                <label className='min-w-[150px]'>
                  Name
                </label>
                <input
                  type='text'
                  className='bg-transparent border-none outline-none '
                  placeholder='enter name'
                  onChange={(e) => {
                    setDataUpload((pre) => ({
                      ...pre,
                      name: e.target.value,
                    }))
                  }}
                />
              </div>

              <div className='flex text-xl gap-2'>
                <label className='min-w-[150px]'>
                  Preview Link
                </label>
                <input
                  onChange={(e) => {
                    setDataUpload((pre) => ({
                      ...pre,
                      preview_link:
                        e.target.value,
                    }))
                  }}
                  type='text'
                  className='bg-transparent border-none outline-none '
                  placeholder='enter enter preview link'
                />
              </div>

              <div className='flex text-xl gap-2'>
                <label className='min-w-[150px]'>
                  Dowload Link
                </label>
                <input
                  onChange={(e) => {
                    setDataUpload((pre) => ({
                      ...pre,
                      dowload_link:
                        e.target.value,
                    }))
                  }}
                  type='text'
                  className='bg-transparent border-none outline-none '
                  placeholder='enter dowload link'
                />
              </div>

              <div className='flex text-xl gap-2'>
                <label className='min-w-[150px]'>
                  Price
                </label>
                <input
                  onChange={(e) => {
                    setDataUpload((pre) => ({
                      ...pre,
                      price: e.target.value,
                    }))
                  }}
                  type='text'
                  className='bg-transparent border-none outline-none '
                  placeholder='enter price'
                />
              </div>

              <div className='flex w-full'>
                <input
                  className='input-image-resource'
                  type='file'
                  placeholder='upload'
                  onChange={(event) => {
                    const selectedFile =
                      event.target.files[0]
                    setImage(selectedFile)
                  }}
                />

                <button
                  onClick={() => {
                    handleUpload()
                  }}
                  className='bg-green-600 text-white font-bold px-2'
                >
                  SUBMIT
                </button>
              </div>
            </div>

            <div className=' bg-black/10 grow relative pb-[20%]'>
              {image && (
                <Image
                  alt='img'
                  src={URL.createObjectURL(image)}
                  objectFit='contain'
                  layout='fill'
                  className='pt-[50%]'
                />
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ y: -10, display: 'none' }}
          animate={{
            y: 0,
            opacity: 1,
            display: 'block',
          }}
          transition={{ duration: 0.2 }}
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
    </AnimatePresence>
  )
}

export default AddItem
