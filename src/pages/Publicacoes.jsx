import React from 'react';

import livro1 from "../assets/livro1.webp";
import livro2 from "../assets/livro2.webp";
import livro3 from "../assets/livro3.webp";
import livro4 from "../assets/livro4.webp";
import livro5 from "../assets/livro5.webp";
import livro6 from "../assets/livro6.webp";

const Publicacoes = () => {
  const livros = [
    {
        titulo: "Além da pandemia: desvendando a covid longa e suas múltiplas facetas",
        imagem: livro6,
        link: "https://www.atenaeditora.com.br/catalogo/ebook/alem-da-pandemia-desvendando-a-covid-longa-e-suas-multiplas-facetas",
        doi: "10.22533/at.ed.740231309",
        isbn: "978-65-258-1874-0"
      },
    {
      titulo: "Bioinformática aplicada à Oncogenética: uma nova ferramenta para casos complexos - Volume I",
      imagem: livro1,
      link: "https://atenaeditora.com.br/catalogo/ebook/bioinformatica-aplicada-a-oncogenetica-uma-nova-ferramenta-para-casos-complexos-volume-i",
      doi: "10.22533/at.ed.884230512",
      isbn: "978-65-258-1988-4"
    },
    {
      titulo: "Bioinformática aplicada à Oncogenética: uma nova ferramenta para casos complexos - Volume II",
      imagem: livro2,
      link: "https://www.atenaeditora.com.br/catalogo/ebook/bioinformatica-aplicada-a-oncogenetica-uma-nova-ferramenta-para-casos-complexos-volume-ii",
      doi: "10.22533/at.ed.891230512",
      isbn: "978-65-258-1989-1"
    },
    {
      titulo: "Bioinformática aplicada à Oncogenética: uma nova ferramenta para casos complexos - Volume III",
      imagem: livro3,
      link: "https://www.atenaeditora.com.br/catalogo/ebook/bioinformatica-aplicada-a-oncogenetica-uma-nova-ferramenta-para-casos-complexos-volume-iii",
      doi: "10.22533/at.ed.860230512",
      isbn: "978-65-258-1986-0"
    },
    {
      titulo: "Genética Humana e Molecular: um olhar multidisciplinar",
      imagem: livro4,
      link: "https://www.atenaeditora.com.br/catalogo/ebook/genetica-humana-e-molecular-um-olhar-multidisciplinar",
      doi: "10.22533/at.ed.330232711",
      isbn: "978-65-258-2033-0"
    },
    {
      titulo: "PGCC: uma resposta complexa do câncer",
      imagem: livro5,
      link: "https://www.atenaeditora.com.br/catalogo/ebook/pgcc-uma-resposta-complexa-do-cancer",
      doi: "10.22533/at.ed.740231309",
      isbn: "978-65-258-1874-0"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">LIVROS PUBLICADOS:</h1>
      {livros.map((livro, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="mr-4">
            <a href={livro.link} target="_blank" rel="noopener noreferrer">
              <img src={livro.imagem} alt={`Capa do Livro ${index + 1}`} className="w-48 h-48 hover:border-2" />
            </a>
          </div>
          <div>
            <p>
              <a href={livro.link} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-slate-600">{livro.titulo}</a>
            </p>
            <p>DOI: {livro.doi} / ISBN: {livro.isbn}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publicacoes;
