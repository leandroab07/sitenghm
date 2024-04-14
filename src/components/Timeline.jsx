import React from 'react';

const Timeline = () => {
    const events = [
        { time: 'Dez, 2019', event: 'Surto de um novo Coronavirus original de Wuhan, na China' },
        { time: 'Jan, 2020', event: 'OMS - Covid-19 é declarado como emergência em saúde pública' },
        { time: 'Fev, 2020', event: 'Primeiro caso confirmado no Brasil' },
        { time: 'Mar, 2020', event: 'OMS - Covid-19 declarado como pandemia' },
        { time: 'Abr, 2020', event: '1 milhão de casos confirmados no mundo' },
        { time: 'Jul, 2020', event: 'Pico de mortes. 1ª onda (BrasilL' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Dec, 2020', event: 'Primeira vacina aplicada pra Covid-19 no Reino Unido' },
        { time: 'Jan, 2021', event: 'Primeira vacina aplicada no Brasil' },
        { time: 'Abr, 2021', event: 'Pico de mortes no Brasil - 1ª onda' },
        { time: 'Jul, 2021', event: 'Redução do número de mortes' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
        { time: 'Set, 2020', event: '1 milhão de mortes no mundo por Covid-19' },
    ];

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
            <div className="absolute flex-col left-1/2 transform translate-x-35 translate-y-32 w-2 bg-blue-200" style={{ height: `${(events.length * 2 - 1) * 64}px` }}></div>
            <div id='infografico' className='grid w-4/5 place-self-end justify-items-center'>
                <h1 className='text-2xl p-5 font-bold text-gray-600'>Infográfico</h1>
                {events.map((e, idx) => (
                    <div key={idx} className="relative flex items-center mb-5">
                        {idx % 2 == 0 ? (
                            <div className='grid grid-cols-9 justify-center items-center'>
                                <div className="p-4 col-span-4 w-80">
                                    <div className={`bg-blue-100 w-full rounded-md shadow-md p-4`}>
                                        <p className='text-gray-500 font-bold'>{e.event}</p>
                                    </div>
                                </div>
                                <div className="col-span-1 w-20 justify-self-center h-20 bg-blue-400 rounded-full shadow-lg flex items-center justify-center">
                                    <span className="text-white font-bold w-10">{e.time}</span>
                                </div>
                                <div className='col-span-4'>
                                </div>
                            </div>
                        ) : (
                            <div className='grid grid-cols-9 justify-center items-center'>
                                <div className='col-span-4'>
                                </div>
                                <div className="col-span-1 w-20 h-20 bg-blue-400 rounded-full shadow-lg flex items-center justify-center">
                                    <span className="text-white font-bold w-10">{e.time}</span>
                                </div>
                                <div className="col-span-4 p-4 w-80">
                                    <div className={`bg-blue-100 w-full rounded-md shadow-md p-4`}>
                                        <p className='text-gray-500 font-bold'>{e.event}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className='my-96'>
                    <h1 id='projetos'>Nossos Projetos</h1>
                </div>
                <div className='my-96'>
                    <h1 id='sites'>Sites Relacionados</h1>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
