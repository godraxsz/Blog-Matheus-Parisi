// Bibliotecas
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React from 'react'

// Componentes
import TopNavDesktop from './components/navs/topNavDesktop'
import TopNavMobile from './components/navs/topNavMobile';

// Páginas
import PageInicio from './components/pages/inicio/pageInicio';
import PageSobre from './components/pages/sobre/pageSobre';

// Util
import { usePage } from './util/PageToggler';

// CSS
import './App.css';

// Resolução dispositivos
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <TopNavDesktop
      Media={Media}
    >
      {children}
    </TopNavDesktop>
    <TopNavMobile
      Media={Media}
    >
      {children}
    </TopNavMobile>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => {

  const { page } = usePage();

  // Mapeamento de páginas
  const pageComponents = {
    inicio: <PageInicio />,
    sobre: <PageSobre />,
    //projetos: <PageProjetos />,
    //blog: <PageBlog />,
    //login: <PageLogin />,
  };

  const currentPage = pageComponents[page] || null;

  return <ResponsiveContainer>{currentPage}</ResponsiveContainer>;

};

export default HomepageLayout