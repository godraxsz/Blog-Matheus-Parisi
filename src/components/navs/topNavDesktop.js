// Bibliotecas
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DarkModeToggle from "react-dark-mode-toggle";
import { InView } from 'react-intersection-observer'
import { Button, Container, Image, Menu, Segment } from 'semantic-ui-react'

// Componentes
import HeadingInicio from '../pages/inicio/headings/headingInicio'
import HeadingNotFound from '../pages/notFound/headings/headingNotFound';

// Util
import { useDarkMode } from '../../util/DarkModeToggler';
import { usePage } from '../../util/PageToggler';

// Imagens
import lightIco from "../../images/favicons/light.ico";
import darkIco from "../../images/favicons/dark.ico";

// Estilos
const setTopMenuLight = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuDark = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuHoverLight = (e) => { e.currentTarget.style.backgroundColor = '#e4e4e4'; };
const setTopMenuHoverDark = (e) => { e.currentTarget.style.backgroundColor = '#252525'; };
const buttonLight = { backgroundColor: 'white', border: '2px solid black', color: 'black', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const buttonDark = { backgroundColor: 'black', border: '2px solid white', color: 'white', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const setButtonLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setButtonDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };

// Mapeamento de headings
const headingComponents = {
    inicio: <HeadingInicio />,
    //projetos: <PageProjetos />,
    //sobre: <PageSobre />,
    //blog: <PageBlog />,
    //login: <PageLogin />,
};

const TopNavDesktop = ({ children, Media }) => {

    const [fixed, setFixed] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { page, togglePage } = usePage();

    const CurrentHeading = headingComponents[page] || <HeadingNotFound />;

    const toggleFixedMenu = (inView) => {
        setFixed(!inView);
    };

    return (
        <Media greaterThan='mobile'>
            <InView onChange={toggleFixedMenu}>
                <Segment className={isDarkMode ? "header-background-dark" : "header-background-light"} style={{ height: headingComponents[page] ? 'auto' : '100vh', boxShadow: 'none', borderRadius: 0 }} textAlign='center' vertical>
                    <Menu fixed={fixed ? 'top' : null} style={isDarkMode ? { backgroundColor: '#121212', color: 'white', borderBottom: '1px solid white', borderTop: '1px solid white' } : { backgroundColor: '#ebebeb', color: 'black', borderBottom: '1px solid black', borderTop: '1px solid black' }} pointing={false} secondary={false} size='large'>
                        <Container>
                            <Menu.Item onClick={() => togglePage('inicio')} onMouseEnter={isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { border: '1px solid #454545', borderTop: '0px' } : { border: '1px solid #d6d6d6', borderTop: '0px' }}><Image src={isDarkMode ? darkIco : lightIco} size="mini"></Image></Menu.Item>
                            <Menu.Item onClick={() => togglePage('inicio')} onMouseEnter={page === 'inicio' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'inicio' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'inicio' ? '#353535' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'inicio' ? '#dfdfdf' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Início</Menu.Item>
                            <Menu.Item onClick={() => togglePage('projetos')} onMouseEnter={page === 'projetos' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'projetos' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'projetos' ? '#353535' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'projetos' ? '#dfdfdf' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Projetos</Menu.Item>
                            <Menu.Item onClick={() => togglePage('sobre')} onMouseEnter={page === 'sobre' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'sobre' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'sobre' ? '#353535' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'sobre' ? '#dfdfdf' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Sobre mim</Menu.Item>
                            <Menu.Item onClick={() => togglePage('blog')} onMouseEnter={page === 'blog' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'blog' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'blog' ? '#353535' : '', border: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'blog' ? '#dfdfdf' : '', border: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Blog</Menu.Item>
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
                    {CurrentHeading}
                </Segment>
            </InView>
            {children}
        </Media >
    );
};

TopNavDesktop.propTypes = {
    children: PropTypes.node,
};

export default TopNavDesktop;