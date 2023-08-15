import Image from "next/image";
const ImageCustom = ({ srcName, w, h }) => {
  return (
    <Image
      src={`/${srcName}`}
      width={w}
      height={h}
      loading="lazy"
      objectFit="cover"
    />
  );
};

export default ImageCustom;
