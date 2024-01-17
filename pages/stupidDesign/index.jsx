import FullName from '../../components/StupidUIUX/FullName'
import PhoneNumber from '../../components/StupidUIUX/PhoneNumber'

const Index = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex gap-10 mt-32 md:mx-12   flex-col md:flex-row items-center'>
        <FullName />
        <PhoneNumber />
      </div>
    </div>
  )
}

export default Index
