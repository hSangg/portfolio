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
        width={"1000px"}
        height={"1000px"}
        objectFit="contain"
        className="scale-[0.8] lg:scale-75 xl:scale-50 cursor-pointer"
      />
    </>
  );
};

export default CV;
