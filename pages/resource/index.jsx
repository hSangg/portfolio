import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import ResourceItem from "../../components/ResourceItem";
const Index = ({ initialResouce }) => {
  const [resource, setResource] = useState([
    {
      name: "???????",
      preview_img_url:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-auth-f4751.appspot.com/o/image%2F371445923_799497542184005_4476843017739973972_n.jpg?alt=media&token=a67b7858-9fae-42a4-bfb3-29f9dddc63f4",
      dowload_link: "??????",
      preview_link: "",
      price: "",
    },
  ]);

  const getData = async () => {
    const colref = collection(db, "resource");

    const querySnapshot = await getDocs(colref);

    const x = querySnapshot.docs.map((doc) => doc.data());

    setResource(x);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <ul className="grid gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 m-2">
        {resource.map((item, index) => (
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
