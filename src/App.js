import React from 'react';
import Menu from './components/Menu';
import Data from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: '#141414'}}>
      <Menu/>
      <BannerMain 
      videoTitle={Data.categorias[0].videos[0].titulo}
      url={Data.categorias[0].videos[0].url}
      videoDescription={"Uma das minhas músicas favoritas! Asthenia do blink me passa tanta energia, não importa o momento em que estou ouvindo."}
      />
      <Carousel 
      ignoreFirstVideo
      category={Data.categorias[0]}
      />
      <Carousel 
      category={Data.categorias[1]}
      />
      <Carousel 
      category={Data.categorias[2]}
      />   
      <Carousel
      category={Data.categorias[3]}
      />
      <Carousel
      category={Data.categorias[4]}
      />
      <Footer />  
    </div>
  );
}

export default App;
