import {motion} from 'framer-motion'

function Logout (){
    const transitionValues = {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeOut"
      };

 function destroy (){    
    return(
        window.sessionStorage.removeItem('loggedAppUser'),
        window.location.reload()
    )
 }
    
    return (
            <div>
            <motion.button 
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
   onClick={()=>destroy()} className="btn btn-danger ">Logout</motion.button>
          </div>
    )
}

export default Logout