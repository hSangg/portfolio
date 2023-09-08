import Image from 'next/image'
import {
  findSecondLargest,
  handleImageName,
} from '../util/utils'

const ImageGalleryItem = ({
  image_link,
  name,
}) => {
  findSecondLargest([1, 4, 3, 2, 6, 8])
  return (
    <div className='border min-h-[170px] border-white/20 p-2 flex flex-col items-center'>
      <div className=''>
        <Image
          objectFit='contain'
          width={100}
          height={100}
          src={image_link}
          alt=''
        />
      </div>

      <div className='CODEINK-Regular text-white/40 text-sm text-center'>
        {handleImageName(name)}
      </div>
    </div>
  )
}

export default ImageGalleryItem
