import React from 'react';
import QRCodeImage from '../assets/qrcode.png'; // Importe a imagem aqui

const Illumina = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Universidade Federal do Espírito Santo (UFES) Auditório Manoel Vereza (em frente ao Planetário de Vitória) Av. Fernando Ferrari, 514</h1>
      
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {/* Use a variável importada para especificar a imagem */}
          <img src={QRCodeImage} alt="QR Code" className="w-52 h-52" />
        </div>
        <div>
          <p>Para participar, é necessário se inscrever no QR Code.</p>
          <p className="text-sm">Inscrições gratuitas. Vagas são limitadas.</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Programação</h2>
        <ul>
        <li className="mt-2">
            <span className="text-orange-500 font-bold">13:00</span> - Credenciamento do evento
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">13:15</span> - <span className="font-bold">Desvendando o poder do genoma</span> - <span className="text-orange-500">Matheus Barros e Fabiana lervolino</span>
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">13:30</span> - <span className="font-bold">Illumina's sequencing by synthesis: aprofundando na tecnologia de sequenciamento Illumina</span> - <span className="text-orange-500">Eder Pires</span>
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">14:10</span> - <span className="font-bold">Impulsionando a vigilância genômica e a metagenômica com as soluções Illumina</span> - <span className="text-orange-500">Michele Penna</span>
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">15:00</span> - Coffee break
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">15:30</span> - <span className="font-bold">Sequenciamento Illumina: Aplicações para Oncologia e Doenças Raras</span> - <span className="text-orange-500">Michele Penna</span>
          </li>
          <li className="mt-2">
            <span className="text-orange-500 font-bold">16:10</span> - <span className="font-bold">Desmistificando a bioinformática: interpretação das métricas da corrida</span> - <span className="text-orange-500">Eder Pires</span>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default Illumina;
