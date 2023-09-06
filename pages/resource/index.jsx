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
      <ul className="bg-white text-black grid grid-cols-3">
        {resource.map((item) => (
          <li className="bg-black flex flex-col h-[550px] text-white rounded-[30px]">
            <div className="relative grow">
              <Image
                src={item.preview_img_url}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "30px" }}
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
