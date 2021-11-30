
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home'; //nao precisa colocar o nome do arquivo, ele peaga auto o index.js
import Error404 from './views/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const RouteComponent = () =>{
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error404 />} /> 
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteComponent;

//nao importa o endereco que eu bote no navegador vai aparecer head foot e erro

//BrowserRouter é responsável por gerenciar as rotase saber o que elas precisam fazer
//para importar  o react-router-dom vai na pasta raiz do trabalho e da um npm install react-router-dom
//o Routes abraca todas as rotas e indica que ele passe a rota do primeiro elemento, ou seja, /algumacoisa vai aparecer o path '/'para corrigir isso po usar o exact:
// se usar <Route exact path='/', o exact aceita apenas exatamente do jeito que vc declarou
//ou coloca o path='/'por ultimo, pq a ordem importa
//o path * é pra pegar algi que nao ta sendo declarado, ouseja, vai da o erro qund colocar um path que nao existe. é importante que ela seja sempre a última, se nao as outras rotas deixam de existir
