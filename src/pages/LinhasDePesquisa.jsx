import React from 'react';

import iuri from "../assets/iuri.gif_.png"
import debora from "../assets/debora.png"
import flaviaErrera from "../assets/flavia-errera.png"
import elda from "../assets/elda.jpeg"
import raquel from "../assets/raquel.jpeg"

const LinhasDePesquisa = () => {
  const professores = [
    {
      nome: "Iúri Drumond Louro",
      email: "iurilouro@yahoo.com",
      linhasDePesquisa: [
        "Biotecnologia e Genética Humana",
        "Genética do Câncer",
        "Perfil de Expressão Oncogênica",
        "Farmacogenômica e Farmacogenética",
        "Rapamycin",
        "Genes indutores do Câncer",
        "Análise de expressão",
        "PCR Suppressive",
        "Oncogene Expression Profiling",
        "Tecnologia Microarray"
      ],
      foto: iuri
    },
    {
      nome: "Flávia de Paula",
      email: "flapvit@yahoo.com.br",
      linhasDePesquisa: [
        "Genética da Doença de Alzheimer",
        "Genética da longevidade humana",
        "Genética Mandeliana",
        "Estudos genéticos e celulares da osteogenese imperfeita",
        "Genética de doenças multifatoriais"
      ],
      foto: "caminho/para/foto2.jpg"
    },
    {
      nome: "Débora Dummer Meira",
      email: "debora.meira@ufes.br",
      linhasDePesquisa: [
        "Genética Humana e Molecular",
        "Oncologia Translacional",
        "Seguimento Farmacoterapêutico em Oncologia",
        "Bases Genéticas do Câncer",
        "Inovação Tecnológica em Oncologia/Oncogenética",
        "Bioinformática/Biologia Computacional Aplicada na Prospecção de Novos Alvos Terapêuticos",
        "Genética da COVID Longa"
      ],
      foto: debora
    },
    {
      nome: "Flavia Imbroisi Valle Errera",
      email: "flavia.valle@ufes.br",
      linhasDePesquisa: [
        "Genética Humana e Médica",
        "Doenças raras e comuns",
        "Anomalias congênitas",
        "Estudo de polimorfismo de DNA e de expressão gênica na obesidade",
        "Diabetes e Asma"
      ],
      foto: flaviaErrera
    },
    {
      nome: "Eldamária de Vargas Wolfgramm dos Santos",
      email: "eldamaria.wolfgramm@ufes.br",
      linhasDePesquisa: [
        "Biotecnologia e Genética Humana e Molecular",
        "Biologia Celular e Molecular",
        "Estudo de fatores genéticos, epigenéticos e ambientais no câncer de mama",
        "Genética forense",
        "Microplástico e sua relação com Doenças Humanas"
      ],
      foto: elda
    },
    {
      nome: "Raquel Silva dos Reis",
      email: "raquel.sreis@outlook.com.br",
      linhasDePesquisa: [
        "Genética Humana",
        "Genética Médica"
      ],
      foto: raquel
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à seção de Linhas de Pesquisa do Laboratório NGHM!</h1>
      <p className="mb-4">Nossas pesquisas são dedicadas a explorar e compreender os intricados mecanismos genéticos que influenciam a saúde humana e desempenham um papel crucial no desenvolvimento de terapias inovadoras. Nossa equipe de pesquisadores busca avançar os limites do conhecimento científico e contribuir para a melhoria da qualidade de vida dos indivíduos.</p>
      <p className="mb-4">Estamos comprometidos em promover a colaboração científica, disseminar conhecimento e buscar soluções inovadoras na área da genética humana e molecular. Fique à vontade para explorar nossas linhas de pesquisa e descobrir como estamos contribuindo sobre o conhecimento genético.</p>

      <div className="grid grid-cols-2 gap-6">
        {professores.map((professor, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="mr-4">
              <img src={professor.foto} alt={`Foto de ${professor.nome}`} className="w-24 h-24 rounded-full" />
            </div>
            <div>
              <p><strong>{professor.nome}</strong></p>
              <p><a href={`mailto:${professor.email}`}>{professor.email}</a></p>
              <ul className="list-disc pl-4">
                {professor.linhasDePesquisa.map((linha, index) => (
                  <li key={index}>{linha}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinhasDePesquisa;
