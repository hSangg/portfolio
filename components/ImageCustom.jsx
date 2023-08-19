import Image from "next/image";
const ImageCustom = ({ srcName, w, h, ...rest }) => {
  return (
    <Image
      src={`/${srcName}`}
      width={w}
      height={h}
      loading="lazy"
      alt="srm"
      {...rest}
    />
  );
};

export default ImageCustom;
