import {motion, useScroll, useTransform} from 'framer-motion'

function Second() {
    const {scrollYProgress} = useScroll()
    const x = useTransform(scrollYProgress, [0, 1], [0, -600])


  return (
    <div className='w-full h-full RightToLeft overflow-hidden'>
        <motion.div 
            initial={{scale: 3}}
            whileInView={{scale: 2}}
            transition={{duration: 1}}
        >
         <h1 className='font-9xl w-full whitespace-nowrap overflow-y-hidden'>Potatoe Potatoe Potatoe Potatoe</h1>

        </motion.div>
    </div>
  )
}

export default Second