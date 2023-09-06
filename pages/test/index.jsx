import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../../firebase";

const Index = () => {
  const [image, setImage] = useState();
  const [progressUpload, setProgressUpload] = useState(0);

  const handleUpload = () => {
    if (image) {
      const name = image.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            alert(url);
          });
        }
      );
    }
  };
  return (
    <div className="h-screen">
      <input
        type="file"
        placeholder="upload"
        onChange={(event) => {
          const selectedFile = event.target.files[0];
          console.log(selectedFile);
          setImage(selectedFile);
        }}
      />

      <button onClick={handleUpload}>UP</button>
    </div>
  );
};

export default Index;
