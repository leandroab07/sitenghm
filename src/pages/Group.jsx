import imageIuri from "../assets/iuri.gif_.png"
import imageFlaviaE from "../assets/flavia-errera.png"
import imageDebora from "../assets/debora.png"
import imageRaquel from "../assets/raquel.jpeg"
import imageElda from "../assets/elda.jpeg"

// Exemplo de dados para os cards
const dados = [
    { nome: "Iúri Drumond Louro", cargo: "Coordenador", pesquisa: "Linha de Pesquisa 1", email: "email1@example.com", imagem: imageIuri },
    { nome: "Flávia de Paula", cargo: "Coordenadora", pesquisa: "Linha de Pesquisa 2", email: "email2@example.com", imagem: "/caminho/para/imagem2.jpg" },
    { nome: "Débora Dummer Meira", cargo: "Professora integrante", pesquisa: "Linha de Pesquisa 3", email: "email3@example.com", imagem: imageDebora },
    { nome: "Eldamária de Vargas Wolfgramm dos Santos", cargo: "Professora integrante", pesquisa: "Linha de Pesquisa 4", email: "email4@example.com", imagem: imageElda },
    { nome: "Flavia Imbroisi Valle Errera", cargo: "Professora integrante", pesquisa: "Linha de Pesquisa 5", email: "email5@example.com", imagem: imageFlaviaE },
    { nome: "Raquel Reis", cargo: "Técnica integrante", pesquisa: "Linha de Pesquisa 6", email: "email6@example.com", imagem: imageRaquel },
  ];

function Group() {
    return (
        <div className="bg-blue-500 pt-12 p-5">
          <div className="grid grid-cols-3 gap-4">
            {dados.map((card, index) => (
              <div key={index} className="card bg-white p-4 rounded-lg flex items-center space-x-4">
                <img src={card.imagem} alt="Perfil" className="w-16 h-16 rounded-full"/>
                <div>
                  <p className="font-bold">{card.nome}</p>
                  <p>{card.cargo}</p>
                  <p>{card.pesquisa}</p>
                  <a href={`mailto:${card.email}`} className="text-blue-600">{card.email}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
        <div>
          <h3 className="text-white text-xl">ICs</h3>
          <ul className="text-white">
            {/* Lista de ICs */}
            <li>Nome IC 1</li>
            <li>Nome IC 2</li>
            {/* Adicione mais nomes conforme necessário */}
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl">Mestrandos</h3>
          <ul className="text-white">
            {/* Lista de Mestrandos */}
            <li>Nome Mestrando 1</li>
            <li>Nome Mestrando 2</li>
            {/* Adicione mais nomes conforme necessário */}
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl">Doutorandos</h3>
          <ul className="text-white">
            {/* Lista de Doutorandos */}
            <li>Nome Doutorando 1</li>
            <li>Nome Doutorando 2</li>
            {/* Adicione mais nomes conforme necessário */}
          </ul>
        </div>
      </div>
    </div>
  );
};
  
  export default Group;
  