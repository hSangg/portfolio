import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const Index = ({ data }) => {
  const [resource, setResource] = useState(data);
  console.log(resource);
  return (
    <div className="">
      <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {resource.map((item, index) => (
          <li
            key={index}
            className="bg-black flex flex-col h-[550px] text-white"
          >
            <div className="relative grow">
              <Image
                src={item.preview_img_url}
                layout="fill"
                alt="item.name"
                objectFit="cover"
                loading="lazy"
              />
            </div>

            <div className="text-xl font-bold text-center">
              {item.name}
            </div>
            <div className="mt-1 flex items-center justify-center gap-2">
              <Link href={item.preview_link}>
                <button className="relative inline-flex px-2 items-center justify-center  bg-white font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <div className="absolute -inset-0.5 -z-10 bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                  PREVIEW
                </button>
              </Link>
              <Link href={item.dowload_link}>
                <button className="relative inline-flex px-2 items-center justify-center  bg-white font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <div className="absolute -inset-0.5 -z-10 bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                  FREE DOWLOAD
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="bg-green-500 OffBit-101 p-2  text-black text-2xl fixed   bottom-10 right-10">
        <h1 className=" OffBit-101Bold leading-6">BUY ME A COFFEE</h1>
        <h1 className="leading-6">
          MOMO:{" "}
          <span className="bg-white OffBit-Dot ">0944552050</span>
        </h1>
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const colref = collection(db, "resource");

  const querySnapshot = await getDocs(colref);

  const resource = querySnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      data: resource,
    },
  };
};
