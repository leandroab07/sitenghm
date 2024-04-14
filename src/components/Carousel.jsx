import { useState, useEffect, useRef } from 'react';
// import imagem1 from '../assets/bannercovid2.jpg';
import imagem2 from '../assets/imagem2.png';
import imagem3 from '../assets/imagem3.jpeg';
import illumina from '../assets/illumina.png';

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: illumina, link: '/Illumina' },
    { src: imagem2, link: '/' },
    { src: imagem3, link: '/' },
    // ... adicione quantas imagens quiser
  ];
  const timeoutRef = useRef(null);

  function startTimer() {
    resetTimeout();
    timeoutRef.current = setTimeout(() => 
        setCurrentImage(prevIndex => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
        5000
    );
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    startTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImage]);

  return (
    <div 
      className="relative hover:opacity-90 h-1/2 w-1/2" 
      onMouseEnter={resetTimeout}
      onMouseLeave={startTimer}
    >
      <a 
        href={images[currentImage].link} 
        rel="noopener noreferrer" 
        className="absolute top-0 w-full h-full opacity-100 transition-opacity duration-300"
        style={{ zIndex: 0 }}
      >
        <img src={images[currentImage].src} alt="" className="w-full h-full object-cover rounded-md" />
      </a>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`block w-4 h-4 rounded-full cursor-pointer ${index === currentImage ? 'bg-slate-200' : 'bg-slate-500'}`} 
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
      <button onClick={() => setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))} className="h-full w-14 flex items-center absolute left-0 ml-2 p-2 rounded-full opacity-70 hover:opacity-90 transition">
        <i className="text-white text-4xl fa-solid fa-chevron-left"></i>
      </button>
      <button onClick={() => setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)} className="h-full flex items-center justify-end w-14 absolute right-0 mr-2 p-2 rounded-full opacity-70 hover:opacity-90 transition">
        <i className="text-white text-4xl fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Carousel;
