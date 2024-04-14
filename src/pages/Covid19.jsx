import Timeline from "../components/Timeline";
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/paginacovid.png'
import image6 from '../assets/paginacovid.jpg'
import image7 from '../assets/paginacovid2.jpg'

function Covid19() {
  return (
    <div className="flex h-full">
      <nav className="m-8 bg-gray-700 content-start h-fit w-64 p-10">
          <h1 className="text-white font-bold text-2xl mb-6 w-40">Covid-19</h1>
          <ul className='font-bold'>
              <li className="mb-3">
                  <a href="#infografico" className="text-gray-300 hover:text-white block">Infográfico</a>
              </li>
              <li className="mb-3">
                  <a href="#projetos" className="text-gray-300 hover:text-white block">Nossos projetos</a>
              </li>
              <li className="mb-3">
                  <a href="#sites" className="text-gray-300 hover:text-white block">Sites relacionados</a>
              </li>
          </ul>
      </nav>
{/*       <div className="max-w-sm mx-auto flex flex-col items-center">
        <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg p-4 absolute flex-col left-1/2 mt-10">
          <h1 className="text-red-500 text-xl mb-2 text-center">Dez - 2019</h1>
          <p className="text-white">Surto de um novo Coronavírus original da cidade de Wuhan, na China.</p>
        </div>
        <div className="w-full bg-gray-400 h-1 mx-auto my-2"></div>;
        <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg p-4 absolute flex-col left-1/2 mt-40">
          <h1 className="text-red-500 text-xl mb-2 text-center">Dez - 2019</h1>
          <p className="text-white">Surto de um novo Coronavírus original da cidade de Wuhan, na China.</p>
        </div>
      </div> */}
      <img src={image7} id="infografico" alt="" className="mx-auto mt-7 pt-3 w-1/2 h-full object-cover rounded-md" />

      <div id="sitesrecomendados" className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-5 border-2 border-dotted border-gray-400">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Sites recomendados:</div>
        <ul className="text-blue-500">
          <li><a href="https://www.paho.org/pt/covid19" target="_blank" rel="noopener noreferrer" className="hover:underline">OPAS/OMS COVID-19</a></li>
          <li><a href="https://covid.saude.gov.br" target="_blank" rel="noopener noreferrer" className="hover:underline">Coronavírus Brasil - Ministério da Saúde</a></li>
          <li><a href="https://covid19.ibge.gov.br" target="_blank" rel="noopener noreferrer" className="hover:underline">COVID-19 | IBGE</a></li>
        </ul>
      </div>
    </div>
    </div>
/*     <div className="flex-col">
      <nav className="m-8 bg-gray-700 content-start h-fit w-64 p-10">
          <h1 className="text-white font-bold text-2xl mb-6 w-40">Covid-19</h1>
              <ul className='font-bold'>
                <li className="mb-3">
                  <a href="#infografico" className="text-gray-300 hover:text-white block">Infográfico</a>
                </li>
                <li className="mb-3">
                  <a href="#projetos" className="text-gray-300 hover:text-white block">Nossos projetos</a>
                </li>
                <li className="mb-3">
                  <a href="#sites" className="text-gray-300 hover:text-white block">Sites relacionados</a>
                  </li>
              </ul>
      </nav>
      <div className="grid justify-items-center w-2/3">
        <div className="flex self-center">
          <img src={image1} alt='' className='w-1/2 h-5/6' />
          <img src={image2} alt='' className='w-1/2 h-5/6' />
          <img src={image3} alt='' className='w-1/2 h-5/6' />
        </div>
        <img src={image1} alt='' className='my-5 w-1/2 z-30' />
        <img src={image2} alt='' className='-my-48 w-1/2 z-20' />
        <img src={image3} alt='' className='my-5 w-1/2 z-10' />
      </div>
    </div> */
    //<Timeline />
  );
}

export default Covid19;
