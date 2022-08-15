import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
    const { asPath, pathname } = useRouter();
    const shouldReduceMotion = useReducedMotion();
    console.log(pathname);
    const variants = {
        out: {
          opacity: 0,
          y: 40,
          transition: {
            duration: 0.25
          }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.25
            }
          }        
      };
  return (
		<div className="effect-1">
			<AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
	      <motion.div
          	        key={asPath}
                      variants={!shouldReduceMotion ? variants : null}
                      animate="in"
                      initial="out"
                      exit="out">
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</div>
	);
};

export default Transition;