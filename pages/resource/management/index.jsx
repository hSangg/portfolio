import { useEffect, useState } from "react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { motion } from "framer-motion";
import { UserAuth } from "../../../context/AuthContext";

const Index = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const [dataUpload, setDataUpload] = useState({
    name: "",
    preview_link: "",
    dowload_link: "",
    preview_img_url: "",
  });

  const [progressUpload, setProgressUpload] = useState(0);
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleUpload = async () => {
    if (image) {
      const name = image.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgressUpload(50);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);

            addDoc(collection(db, "resource"), {
              ...dataUpload,
              preview_img_url: url,
            });
            setProgressUpload(100);
          });
        }
      );
    }
  };

  return (
    <div>
      {user?.email === "sangfc774@gmail.com" ? (
        <div className=" text-black ">
          <>
            <h1 className="text-2xl bg-white px-2 py-0 font-bold">
              ADD NEW RESOURCE
            </h1>
            <div className="flex bg-white p-2 mt-2 relative">
              <motion.div
                style={{ width: `${progressUpload}%` }}
                className="absolute top-0 left-0 bg-green-500 h-1"
              ></motion.div>

              <div className="flex flex-col">
                <div className="flex text-xl gap-2 ">
                  <label className="min-w-[150px]">Name</label>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none "
                    placeholder="enter name"
                    onChange={(e) => {
                      setDataUpload((pre) => ({
                        ...pre,
                        name: e.target.value,
                      }));
                    }}
                  />
                </div>

                <div className="flex text-xl gap-2">
                  <label className="min-w-[150px]">
                    Preview Link
                  </label>
                  <input
                    onChange={(e) => {
                      setDataUpload((pre) => ({
                        ...pre,
                        preview_link: e.target.value,
                      }));
                    }}
                    type="text"
                    className="bg-transparent border-none outline-none "
                    placeholder="enter enter preview link"
                  />
                </div>

                <div className="flex text-xl gap-2">
                  <label className="min-w-[150px]">
                    Dowload Link
                  </label>
                  <input
                    onChange={(e) => {
                      setDataUpload((pre) => ({
                        ...pre,
                        dowload_link: e.target.value,
                      }));
                    }}
                    type="text"
                    className="bg-transparent border-none outline-none "
                    placeholder="enter dowload link"
                  />
                </div>

                <div className="flex w-full">
                  <input
                    className="input-image-resource"
                    type="file"
                    placeholder="upload"
                    onChange={(event) => {
                      const selectedFile = event.target.files[0];
                      setImage(selectedFile);
                    }}
                  />

                  <button
                    onClick={() => {
                      handleUpload();
                    }}
                    className="bg-green-600 text-white font-bold px-2"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>

              <div className=" bg-black/10 grow relative pb-[20%]">
                {image && (
                  <Image
                    src={URL.createObjectURL(image)}
                    objectFit="contain"
                    layout="fill"
                    className="pt-[50%]"
                  />
                )}
              </div>
            </div>
          </>
        </div>
      ) : (
        <button onClick={() => googleSignIn()}>LOGIN</button>
      )}
    </div>
  );
};

export default Index;
