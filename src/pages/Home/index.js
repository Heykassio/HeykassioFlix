import React from 'react';
import Data from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function App() {
  return (
    <div style={{background: '#141414'}}>
      <PageDefault>
        
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
      </PageDefault>
        
    </div>
  );
}

export default App;
