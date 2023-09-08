import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { useState } from 'react'
import { db, storage } from '../../../../firebase'
import {
  addDoc,
  collection,
} from 'firebase/firestore'

const AddImage = () => {
  const [image, setImage] = useState(null)
  const [dataUpload, setDataUpload] = useState({
    id: '',
    image_link: '',
  })

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
  )
}

export default AddImage
