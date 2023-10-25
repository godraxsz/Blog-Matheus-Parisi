// Bibliotecas
import React from 'react'
import { Grid, Container, Header, List, Segment, Divider, Icon, Flag } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../util/DarkModeToggler';
import { usePage } from '../../util/PageToggler';

// Estilos
const linkLight = { color: '#525252', transition: 'color 0.15s' };
const linkIconLight = { color: '#000000' };
const setLinkLight = (e) => { e.currentTarget.style.color = '#525252'; };
const setLinkLightHover = (e) => { e.currentTarget.style.color = '#000000'; };
const linkDark = { color: '#BBBBBB', transition: 'color 0.15s' };
const linkIconDark = { color: '#FFFFFF' };
const setLinkDark = (e) => { e.currentTarget.style.color = '#BBBBBB'; };
const setLinkDarkHover = (e) => { e.currentTarget.style.color = '#FFFFFF'; };

const BottomFooter = () => {

    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    return (
        <Segment inverted={isDarkMode} vertical style={isDarkMode ? { flex: 1, padding: '4em 0em', backgroundColor: '#121212', border: 'none', boxShadow: 'none', borderRadius: 0 } : { flex: 1, padding: '4em 0em', backgroundColor: '#ebebeb' }}>
            <Container>
                <Grid divided inverted={isDarkMode} stackable>
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
                            <List.Item onClick={() => togglePage('inicio')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Início </div> </List.Item>
                            <List.Item onClick={() => togglePage('projetos')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Projetos </div> </List.Item>
                            <List.Item onClick={() => togglePage('sobre')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Sobre mim </div> </List.Item>
                            <List.Item onClick={() => togglePage('blog')} onMouseEnter={(e) => isDarkMode ? setLinkDarkHover(e) : setLinkLightHover(e)} onMouseLeave={(e) => isDarkMode ? setLinkDark(e) : setLinkLight(e)} as='a' style={isDarkMode ? linkDark : linkLight} > <div style={{ display: 'flex', alignItems: 'center' }}> Blog </div> </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3} >
                    </Grid.Column>
                </Grid>
                <Divider inverted={isDarkMode} section />
                <p><b><i>" Na paz, assim como na guerra, teu lema é sempre servir. "</i></b> » Canção da arma de Comunicações  <Flag name='br' /></p>
            </Container>
        </Segment>
    )

}

export default BottomFooter;