import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Categories from './views/Categories';
import Error404 from './views/Error';

import Header from './components/Header';
import Footer from './components/Footer'

const RouteComponent = () => {
  return(
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteComponent;