import {motion} from 'framer-motion'

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function Mover() {
  const onChangeVarient = {hidden: {x:-10, opacity: 100}}


  return (

      <motion.div 
      whileHover={{y: -20}} 
      whileTap={{}}
      animate={{
        scale: [2, 1, 2, 2, 1],
        rotate: [0, 0, 270, 270, 0]
      }}
      // variants={onChangeVarient}
      // drag
      // dragConstraints={{
      //   top: -300, 
      //   left: -300,
      //   right: 300, 
      //   bottom: 300, 
      // }}
      // // initial={{opacity: 0}}
      // whileInView={{scale: 1}}
      
      >
        <div className='h-32 w-32 rounded-3xl bg-gray-50 cursor-pointer'></div>
      </motion.div>
  )
}

export default Mover