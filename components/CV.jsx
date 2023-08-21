import Image from "next/image";
import { useRouter } from "next/router";
const CV = () => {
  const router = useRouter();
  return (
    <>
      <Image
        onClick={() => {
          router.push("/cv");
        }}
        src={"/cv.jpg"}
        width={"1500px"}
        height={"1500px"}
        objectFit="cover"
        className="scale-[0.8] lg:scale-75 xl:scale-50 cursor-pointer"
      />
    </>
  );
};

export default CV;
