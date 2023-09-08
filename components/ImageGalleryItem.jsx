import Image from 'next/image'
import { handleImageName } from '../util/utils'

const ImageGalleryItem = ({
  image_link,
  name,
}) => {
  return (
    <div className='border border-white/20 p-2 flex flex-col items-center'>
      <div className=''>
        <Image
          objectFit='contain'
          width={100}
          height={100}
          src={image_link}
        />
      </div>

      <div className='CODEINK-Regular text-white/40 text-sm text-center'>
        {handleImageName(name)}
      </div>
    </div>
  )
}

export default ImageGalleryItem
