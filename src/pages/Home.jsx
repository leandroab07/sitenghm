import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <motion.div 
    initial={{ 
      y: 30,
      opacity: 0.5
    }}
    animate={{ 
      y: 0,
      opacity: 1
    }}
    transition={{ duration: 0.5 }} 
      className="h-screen flex flex-col items-center mt-2"
    >
      <Carousel />
      <div className="flex justify-center mt-10">
      <h1 className="w-7/10 text-center text-3xl">
        <span className="italic">"A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original."</span> - Albert Einstein
      </h1>
    </div>
    </motion.div>
  );
}

export default Home;
