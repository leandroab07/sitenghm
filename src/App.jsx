import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Covid19 from './pages/Covid19.jsx'
import Group from './pages/Group.jsx'
import Local from './pages/local.jsx'
import QuemSomos from './pages/QuemSomos.jsx'
import Illumina from './pages/Illumina.jsx'
import Publicacoes from './pages/Publicacoes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import LinhasDePesquisa from './pages/LinhasDePesquisa.jsx'
import Oportunidades from './pages/Oportunidades.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='quemsomos' element={ <QuemSomos /> } />
          <Route path='Publicacoes' element={ <Publicacoes /> } />
          <Route path='Illumina' element={ <Illumina /> } />
          <Route path='covid19' element={ <Covid19 /> } />
          <Route path='nghm/' element={ <Home /> } />
          <Route path='group' element={ <Group /> } />
          <Route path='localizacao' element={ <Local /> } />
          <Route path='LinhasDePesquisa' element={ <LinhasDePesquisa /> } />
          <Route path='Oportunidades' element={ <Oportunidades /> } />
        </Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </>
  )
}

export default App
