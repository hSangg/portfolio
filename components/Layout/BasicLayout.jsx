import Back from '../../components/Back'
import { motion } from 'framer-motion'
const BasicLayout = ({ children }) => {
  return (
    <motion.div className='container '>
      <Back />
      {children}
    </motion.div>
  )
}

export default BasicLayout
