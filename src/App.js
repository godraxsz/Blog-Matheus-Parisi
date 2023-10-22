import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Sidebar, Flag, } from 'semantic-ui-react'

import DarkModeToggle from "react-dark-mode-toggle";
import { useDarkMode } from './util/DarkModeToggler';
import { usePage } from './util/PageToggler';

import profilePicture from "./images/avatar/large/profile.png";
import profileInfo from "./images/misc/info.png";
import blogPicture from "./images/misc/blog.png";
import projectsPicture from "./images/misc/projects.png";

import lightIco from "./images/favicons/light.ico";
import darkIco from "./images/favicons/dark.ico";

import './App.css';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

// Estilos
const setTopMenuLight = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuDark = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuHoverLight = (e) => { e.currentTarget.style.backgroundColor = '#e3e3e3'; };
const setTopMenuHoverDark = (e) => { e.currentTarget.style.backgroundColor = '#252525'; };
const linkLight = { color: '#525252', transition: 'color 0.15s' };
const linkIconLight = { color: '#000000' };
const setLinkLight = (e) => { e.currentTarget.style.color = '#525252'; };
const setLinkLightHover = (e) => { e.currentTarget.style.color = '#000000'; };
const linkDark = { color: '#BBBBBB', transition: 'color 0.15s' };
const linkIconDark = { color: '#FFFFFF' };
const setLinkDark = (e) => { e.currentTarget.style.color = '#BBBBBB'; };
const setLinkDarkHover = (e) => { e.currentTarget.style.color = '#FFFFFF'; };
const buttonLight = { backgroundColor: 'white', border: '2px solid black', color: 'black', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const buttonDark = { backgroundColor: 'black', border: '2px solid white', color: 'white', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const setButtonLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setButtonDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };

const HomepageHeading = ({ mobile }) => (
  <Container
    text
  >

    <Image
      circular
      src={profilePicture}
      size='medium'
      style={{
        margin: '0 auto',
        display: 'block',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        border: '5px solid white',
      }}
    />

    <Header

      as='h1'
      content='Olá 👋🏻'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        color: 'white',
        marginBottom: 0,
      }}
    >
    </Header>

    <Header
      as='h2'
      content='Pode me chamar de Theus'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        color: 'white',
        marginTop: mobile ? '0.3em' : '0.5em',
        marginBottom: mobile ? '1.5em' : '3em',
      }}
    />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const DesktopContainer = ({ children }) => {

  const [fixed, setFixed] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { page, setPage } = usePage();

  const toggleFixedMenu = (inView) => {
    setFixed(!inView);
  };

  return (
    <Media greaterThan='mobile'>
      <InView onChange={toggleFixedMenu}>
        <Segment className={isDarkMode ? "header-background-dark" : "header-background-light"} style={{ boxShadow: 'none', borderRadius: 0 }} textAlign='center' vertical>
          <Menu fixed={fixed ? 'top' : null} style={isDarkMode ? { backgroundColor: '#121212', color: 'white', borderBottom: '1px solid white', borderTop: '1px solid white' } : { backgroundColor: '#ebebeb', color: 'black', borderBottom: '1px solid black', borderTop: '1px solid black' }} pointing={false} secondary={false} size='large'>
            <Container>
              <Menu.Item onClick={() => setPage('inicio')} onMouseEnter={isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px' } : { border: '1px solid #d6d6d6', borderTop: '0px' }}><Image src={isDarkMode ? darkIco : lightIco} size="mini"></Image></Menu.Item>
              <Menu.Item onClick={() => setPage('inicio')} onMouseEnter={page === 'inicio' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'inicio' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'inicio' ? '#454545' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'inicio' ? '#d6d6d6' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Início</Menu.Item>
              <Menu.Item onClick={() => setPage('projetos')} onMouseEnter={page === 'projetos' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'projetos' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'projetos' ? '#454545' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'projetos' ? '#d6d6d6' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Projetos</Menu.Item>
              <Menu.Item onClick={() => setPage('sobre')} onMouseEnter={page === 'sobre' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'sobre' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'sobre' ? '#454545' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'sobre' ? '#d6d6d6' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Sobre mim</Menu.Item>
              <Menu.Item onClick={() => setPage('blog')} onMouseEnter={page === 'blog' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'blog' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'blog' ? '#454545' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'blog' ? '#d6d6d6' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Blog</Menu.Item>
              <Menu.Item style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px' } : { border: '1px solid #d6d6d6', borderTop: '0px' }} position='right'>
                <Button
                  as='a'
                  style={isDarkMode ? buttonDark : buttonLight}
                  onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                  onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
                >
                  Login
                </Button>
                <div style={{ margin: '0px', marginLeft: '20px', backgroundColor: `grey`, border: `${isDarkMode ? '2px solid white' : '2px solid black'}`, padding: '4px', paddingTop: '7px', paddingRight: '5px', borderRadius: '8px' }} >
                  <DarkModeToggle
                    onChange={toggleDarkMode}
                    checked={isDarkMode}
                    size={50}
                  />
                </div>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </InView>
      {children}
    </Media >
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };

  const handleToggle = () => {
    setSidebarOpened(true);
  };

  return (
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted={isDarkMode}
          style={isDarkMode ? { backgroundColor: '#121212' } : { backgroundColor: '#ebebeb' }}
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px' } : { border: '1px solid #d6d6d6', borderTop: '0px' }}><Image src={isDarkMode ? darkIco : lightIco} size="mini"></Image></Menu.Item>
          <Menu.Item inverted={isDarkMode} as='a' active>Início</Menu.Item>
          <Menu.Item inverted={isDarkMode} as='a'>Projetos</Menu.Item>
          <Menu.Item inverted={isDarkMode} as='a'>Sobre mim</Menu.Item>
          <Menu.Item inverted={isDarkMode} as='a'>Blog</Menu.Item>
          <Menu.Item inverted={isDarkMode} as='a'>Login</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment className={isDarkMode ? "header-background-dark" : "header-background-light"} textAlign='center' style={{ minHeight: 350, padding: '1em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>
            <Container>
              <Menu style={isDarkMode ? { backgroundColor: '#121212', color: 'white', borderBottom: '1px solid white', borderTop: '1px solid white' } : { backgroundColor: '#ebebeb', color: 'black', borderBottom: '1px solid black', borderTop: '1px solid black' }} size='large'>
                <Menu.Item style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px', color: 'white' } : { border: '1px solid #d6d6d6', borderTop: '0px', color: 'black' }} onClick={handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px' } : { border: '1px solid #d6d6d6', borderTop: '0px' }} position='right'>
                  <Button
                    as='a'
                    style={isDarkMode ? buttonDark : buttonLight}
                    onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                    onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
                  >
                    Login
                  </Button>
                  <div style={{ margin: '0px', marginLeft: '20px', backgroundColor: `grey`, border: `${isDarkMode ? '2px solid white' : '2px solid black'}`, padding: '4px', paddingTop: '7px', paddingRight: '5px', borderRadius: '8px' }} >
                    <DarkModeToggle
                      onChange={toggleDarkMode}
                      checked={isDarkMode}
                      size={50}
                    />
                  </div>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => {

  const { isDarkMode } = useDarkMode();
  const { setPage } = usePage();

  return (
    <ResponsiveContainer>

      <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

      <Segment inverted={isDarkMode} style={{ padding: '8em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header inverted={isDarkMode} as='h3' style={{ fontSize: '2em' }}>
                Grato em te ver por aqui!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Se você está lendo isso, é porque algo capturou sua atenção. Vamos explorar juntos o que há por trás dessas palavras e descobrir mais sobre o que nos conecta ✨
              </p>
              <Header inverted={isDarkMode} as='h3' style={{ fontSize: '2em' }}>
                Aproveitando a viagem...
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Convido você a conhecer um pouco mais sobre quem sou, minhas experiências e os diversos conteúdos que compõem este espaço que chamo de portfólio 🤗
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image rounded size='large' src={profileInfo} style={isDarkMode ? { margin: '0 auto', display: 'block', border: '2px solid white' } : { margin: '0 auto', display: 'block', border: '2px solid black' }} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button
                as='a'
                size='huge'
                style={isDarkMode ? buttonDark : buttonLight}
                onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
              >
                Conhecer Theus
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

      <Segment
        className={isDarkMode ? "header-background-dark" : "header-background-light"}
        style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
        vertical
      ></Segment>

      <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

      <Segment inverted={isDarkMode} style={{ padding: '4em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>

        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '0em', paddingTop: '5em' }}>
              <Image rounded size='huge' src={blogPicture} style={isDarkMode ? { margin: '0 auto', display: 'block', border: '2px solid white' } : { margin: '0 auto', display: 'block', border: '2px solid black' }} />
              <Header inverted={isDarkMode} as='h3' style={{ fontSize: '2em' }}>
                "Utilizando tecnologia para proporcionar boas experiências"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                A programação não é apenas um hobby ou profissão, mas também uma forma de caridade. Sistemas bem elaborados proporcionam facilidades para o usuário, que ao longo do tempo, reduzem a quantidade de horas e o esforço requerido para completar a mesma tarefa que antes era realizada de maneira diferente.
              </p>
              <Button
                as='a'
                size='large'
                style={isDarkMode ? buttonDark : buttonLight}
                onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
              >
                Continuar lendo
              </Button>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '10em' }}>
              <Image rounded size='big' src={projectsPicture} style={isDarkMode ? { margin: '0 auto', display: 'block', border: '2px solid white' } : { margin: '0 auto', display: 'block', border: '2px solid black' }} />
              <Header inverted={isDarkMode} as='h3' style={{ fontSize: '2em' }}>
                Explorando projetos
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                De desenvolvimento web a desenvolvimento de jogos, embarque em uma jornada para conhecer a evolução de alguns dos meus projetos, cada um com seus desafios e processos de criatividade detalhados em forma de blog onde podemos compartilhar idéias e experiências!
              </p>
              <Button
                as='a'
                size='large'
                style={isDarkMode ? buttonDark : buttonLight}
                onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
              >
                Explorar
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container textAlign='center' text>
          <Divider
            as='h4'
            horizontal
            inverted={isDarkMode}
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <p>Veja Também</p>
          </Divider>

          <Header inverted={isDarkMode} as='h3' style={{ fontSize: '2em' }}>
            Quer saber como esse site foi feito?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Conheça as tecnologias utilizadas para desenvolvimento, autenticação, hospedagem, entre outros!
          </p>
          <Button
            as='a'
            size='large'
            style={isDarkMode ? buttonDark : buttonLight}
            onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
            onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
          >
            Saber mais
          </Button>
        </Container>
      </Segment>

      <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

      <Segment
        className={isDarkMode ? "header-background-dark" : "header-background-light"}
        style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
        vertical
      ></Segment>

      <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

      <Segment inverted={isDarkMode} vertical style={isDarkMode ? { padding: '5em 0em', backgroundColor: '#121212', border: 'none', boxShadow: 'none', borderRadius: 0 } : { padding: '5em 0em', backgroundColor: '#ebebeb' }}>
        <Container>
          <Grid divided inverted={isDarkMode} stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted={isDarkMode} as='h4' content='Redes' />
                <List link inverted={isDarkMode}>
                  <List.Item onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} href='https://linkedin.com/in/matheusparisi/' target="_blank" rel="noopener noreferrer" as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> <Icon name='linkedin' style={isDarkMode ? linkIconDark : linkIconLight} /> Linkedin </div> </List.Item>
                  <List.Item onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} href='https://github.com/godraxsz' target="_blank" rel="noopener noreferrer" as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> <Icon name='github' style={isDarkMode ? linkIconDark : linkIconLight} /> Github </div> </List.Item>
                  <List.Item onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} href='https://www.instagram.com/matheus.parisi/' target="_blank" rel="noopener noreferrer" as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> <Icon name='instagram' style={isDarkMode ? linkIconDark : linkIconLight} /> Instagram </div></List.Item>
                  <List.Item onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} href='https://steamcommunity.com/id/dograx/' target="_blank" rel="noopener noreferrer" as='a' style={isDarkMode ? linkDark : linkLight} ><div style={{ display: 'flex', alignItems: 'center' }}><Icon name='steam' style={isDarkMode ? linkIconDark : linkIconLight} />Steam</div></List.Item>
                  <List.Item onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} href='https://api.whatsapp.com/send?phone=5511952275405&text=Olá%20Theus!%20Vim%20pelo%20seu%20portfólio' target="_blank" rel="noopener noreferrer" as='a' style={isDarkMode ? linkDark : linkLight} ><div style={{ display: 'flex', alignItems: 'center' }}><Icon name='whatsapp' style={isDarkMode ? linkIconDark : linkIconLight} />Whatsapp</div></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted={isDarkMode} as='h4' content='Páginas' />
                <List link inverted={isDarkMode}>
                  <List.Item onClick={() => setPage('inicio')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Início </div> </List.Item>
                  <List.Item onClick={() => setPage('projetos')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Projetos </div> </List.Item>
                  <List.Item onClick={() => setPage('sobre')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Sobre mim </div> </List.Item>
                  <List.Item onClick={() => setPage('blog')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Blog </div> </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted={isDarkMode} section />
          <p><b><i>" Na paz, assim como na guerra, teu lema é sempre servir. "</i></b> » Canção da arma de Comunicações  <Flag name='br' /></p>
        </Container>
      </Segment>
    </ResponsiveContainer >
  )

}

export default HomepageLayout