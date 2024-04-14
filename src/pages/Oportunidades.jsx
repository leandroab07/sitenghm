import React from 'react';
import { NavLink } from 'react-router-dom'; // Importando o componente Link do React Router

const Oportunidades = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Oportunidades</h1>
      <p className="mb-4">Aqui você encontrará informações sobre oportunidades, proporcionando uma experiência enriquecedora no campo da ciência e da pesquisa.</p>
      <p className="mb-4">Atualmente não temos vagas disponíveis. No entanto, se você é um aluno em busca de uma experiência valiosa no campo da genética humana, incentivamos a verificar regularmente esta seção para futuras atualizações.</p>
      <p className="mb-4">Caso você tenha alguma dúvida ou deseje obter mais informações sobre essas oportunidades, não hesite em entrar em contato conosco por meio da seção <strong><NavLink to="/FaleConosco">Fale Conosco</NavLink></strong> no cabeçalho do nosso blog ou através do email <a href="mailto:nghm@ufes.br">nghm@ufes.br</a>.</p>
      <p>Agradecemos seu interesse no Laboratório NGHM e estamos ansiosos para poder contar com sua participação em nosso laboratório!</p>
    </div>
  );
}

export default Oportunidades;
