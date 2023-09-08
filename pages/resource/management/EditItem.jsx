import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { db, storage } from '../../../firebase'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { deleteObject, ref } from 'firebase/storage'
import { UserAuth } from '../../../context/AuthContext'

const EditItem = ({ data }) => {
  const [isPushNotifi, setIsPushNotifi] = useState(false)
  const [currentClick, setCurrentClick] = useState({})
  const [resourceList, setResourceList] = useState(data)
  const { user, googleSignIn, logOut } = UserAuth()

  useEffect(() => {}, [])

  const updateResource = async () => {
    await updateDoc(
      doc(db, 'resource', currentClick.id),
      currentClick
    )

    setResourceList((pre) => {
      const index = [...pre].findIndex(
        (data) => data.id === currentClick.id
      )
      const newList = [...pre]
      newList[index] = currentClick
      return newList
    })
  }

  const deleteResource = async (e) => {
    setIsPushNotifi(true)
    setTimeout(() => {
      setIsPushNotifi(false)
    }, 2000)
    if (e.detail === 3) {
      await deleteDoc(doc(db, 'resource', currentClick.id))

      const imageRef = ref(
        storage,
        `image/${currentClick.image_name}`
      )

      await deleteObject(imageRef)
        .then(() => {
          console.log('SUSS')
        })
        .catch((err) => console.log(err))

      setResourceList((pre) => {
        const newList = [...pre].filter(
          (resource) => resource.id != currentClick.id
        )

        return newList
      })
    }
  }

  return (
    <AnimatePresence>
      {user?.email == 'sangfc774@gmail.com' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <AnimatePresence>
            {isPushNotifi && (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: -20, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                className="bg-green-500 OffBit-101Bold uppercase text-xl fixed text-black right-10 bottom-0 "
              >
                Click 3 times to delete it
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex gap-2 w-full">
            <div className="">
              <ul className="bg-white p-2 h-[500px] overflow-scroll overscroll-y-auto rounded-md text-black text-xl">
                {resourceList.map((resource, index) => (
                  <motion.li
                    onClick={() => {
                      setCurrentClick(resource)
                    }}
                    whileHover={{
                      backgroundColor: '#e4e4e7',
                    }}
                    key={index}
                    className="flex items-center gap-2 py-2 cursor-pointer"
                  >
                    <Image
                      width={60}
                      height={60}
                      src={resource.preview_img_url}
                      style={{ borderRadius: '14px' }}
                    />
                    <div>{resource.name}</div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grow border flex flex-col divide-y-2 divide-slate-500/30 -white  rounded-lg text-white p-5">
              {[
                'name',
                'dowload_link',
                'preview_img_url',
                'preview_link',
                'price',
              ].map((name, index) => (
                <div key={index} className="flex gap-2 ">
                  <input
                    type="text"
                    className="bg-transparent my-1 font-light border-none w-full text-3xl outline-none "
                    placeholder={`enter ${name}`}
                    value={currentClick?.[name]}
                    onChange={(event) => {
                      setCurrentClick((pre) => ({
                        ...pre,
                        [name]: event.target.value,
                      }))
                    }}
                  />
                </div>
              ))}

              <div className="flex gap-2 pt-2">
                <div onClick={() => updateResource()}>
                  <button className="relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                    Update
                  </button>
                </div>

                <div onClick={(e) => deleteResource(e)}>
                  <button className="relative inline-flex h-10 w-full items-center justify-center rounded-md bg-red-500/40 text-white px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ y: -10, display: 'none' }}
          animate={{ y: 0, opacity: 1, display: 'block' }}
          exit={{ opacity: 0, y: -10, display: 'none' }}
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          onClick={() => googleSignIn()}
        >
          login
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default EditItem

export const getStaticProps = async () => {
  const docsRef = collection(db, 'resource')
  const snapshot = await getDocs(docsRef)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return {
    props: {
      data,
    },
  }
}
