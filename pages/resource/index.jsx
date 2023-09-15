import {
  collection,
  getDocs,
} from 'firebase/firestore'
import {
  useEffect,
  useRef,
  useState,
} from 'react'
import ResourceItem from '../../components/ResourceItem'
import { db } from '../../firebase'
const Index = ({ initialResouce }) => {
  const [total_amount, setTotal_amout] =
    useState(0)

  useEffect(() => {
    let initData = 0
    initialResouce.forEach((x) => {
      initData += parseFloat(x.price)
    })

    console.log(initData)

    setTotal_amout(initData)
  }, [])

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

      <div className='fixed bottom-10 right-10'>
        <span className='inline-flex mb-1 cursor-pointer items-center justify-center text-lg w-full rounded-full border border-slate-800 bg-black px-3 py-1  font-semibold text-slate-300 backdrop-blur-3xl'>
          <span className='mr-1'>
            toal resource cost:
          </span>

          <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
            ${total_amount}
          </span>
        </span>

        <div className='bg-green-500 OffBit-101 p-2 text-center text-black text-2xl   '>
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
