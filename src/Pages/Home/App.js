import React from 'react';
import Menu from '../../components/menu';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import  dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (

    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Footer/>
    </div>
  );
}
export default Home;