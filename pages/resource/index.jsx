import {
  collection,
  getDocs,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import ResourceItem from '../../components/ResourceItem'
import { db } from '../../firebase'
const Index = ({ initialResouce }) => {
  // const [resource, setResource] = useState([

  // ])

  // const getData = async () => {
  //   const colref = collection(db, 'resource')

  //   const querySnapshot = await getDocs(colref)

  //   const x = querySnapshot.docs.map((doc) =>
  //     doc.data()
  //   )

  //   setResource(x)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className=''>
      <ul className='grid gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 m-2'>
        {initialResouce.map((item, index) => (
          <ResourceItem
            key={index}
            name={item.name}
            preview_img_url={item.preview_img_url}
            dowload_link={item.dowload_link}
            preview_link={item.preview_link}
            price={item.price}
          />
        ))}
      </ul>

      <div className='bg-green-500 OffBit-101 p-2  text-black text-2xl fixed   bottom-10 right-10'>
        <h1 className=' OffBit-101Bold leading-6'>
          BUY ME A COFFEE
        </h1>
        <h1 className='leading-6'>
          MOMO:
          <span className='bg-white OffBit-Dot '>
            0944552050
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const colref = collection(db, 'resource')

  const querySnapshot = await getDocs(colref)

  const x = querySnapshot.docs.map((doc) =>
    doc.data()
  )

  return { props: { initialResouce: x } }
}
