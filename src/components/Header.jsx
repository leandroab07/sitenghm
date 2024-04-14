import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showDropdownNGHM, setShowDropdownNGHM] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <div className="bg-white p-4 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            
        <div className="flex items-center justify-center">
            <NavLink to="/" className="text-center">
                <div>
                <span className="text-shadow text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-bold">
                    NGHM
                </span>
                <span className="block font-bold text-md text-gray-600">Núcleo de Genética Humana e Molecular</span>
                </div>
            </NavLink>
            </div>

                <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-xl font-bold text-slate-600">
                <li 
                    className="relative group"
                    onMouseEnter={() => setShowDropdownNGHM(true)}
                    onMouseLeave={() => setShowDropdownNGHM(false)}
                >
                    <p className="menu-item">
                        <NavLink 
                            to="/QuemSomos" 
                            className="hover:text-slate-400 relative block"
                        >
                            O NGHM
                        </NavLink>
                    </p>
                    {showDropdownNGHM && (
                        <div className="absolute menu-index left-0 top-5 mt-2 w-44 rounded-md shadow-lg bg-white">
                            <ul>
                                <li className="menu-item group"><NavLink to="/QuemSomos" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">Quem Somos</NavLink></li>
                                <li className="menu-item group"><NavLink to="/LinhasDePesquisa" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">Linhas de Pesquisa</NavLink></li>
                                <li className="menu-item group"><NavLink to="/Oportunidades" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">Vagas Disponíveis</NavLink></li>
                            </ul>
                        </div>
                    )}
                </li>
                <li 
                    className="relative group"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <p className="menu-item">
                        <NavLink 
                            to="/projetos" 
                            className="ml-5 hover:text-slate-400 relative block"
                        >
                            Projetos
                        </NavLink>
                    </p>
                    {showDropdown && (
                        <div className="absolute menu-index left-0 top-5 mt-2 w-42 rounded-md shadow-lg bg-white">
                            <ul>
                                <li className="menu-item group"><NavLink to="/Publicacoes" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">Publicações</NavLink></li>
                                <li className="menu-item group"><NavLink to="/Eventos" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">Eventos</NavLink></li>
                                <li className="menu-item group"><NavLink to="/CovidLonga" className="block px-4 py-2 hover:bg-slate-200 hover:text-slate-500 relative">COVID Longa</NavLink></li>
                            </ul>
                        </div>
                    )}
                </li>
                    <li className="menu-item group"><NavLink to="/group" className="ml-5 hover:text-slate-400 relative block">Equipe</NavLink></li>
                    <li className="menu-item group"><NavLink to="/localizacao" className="ml-5 hover:text-slate-400 relative block">Localização</NavLink></li>
                    <li className="menu-item group"><NavLink to="/FaleConosco" className="ml-5 hover:text-slate-400 relative block">Fale Conosco</NavLink></li>
                </ul>

                <div className="text-right">
                    <p>Telefone: (27) 4009-2324</p>
                    <p>Ramal: 5324</p>
                    <p>Email: nghm@ufes.br</p>
                </div>
            </div>

            <style jsx>{`
                .menu-item a::before, .dropdown-item a::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: gray;
                    visibility: hidden;
                    transition: all 0.3s ease-in-out;
                }

                .menu-item:hover a::before {
                    width: 80%;
                    visibility: visible;
                }

                .menu-index {
                    z-index: 1000;  /* ou outro valor alto */
                }

                .text-shadow {
                  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);  /* Ajuste conforme necessário */
                }
                
                .active {
                    color: #94a3b8;
                }
            `}</style>
        </div>
    );
}

export default Header;
