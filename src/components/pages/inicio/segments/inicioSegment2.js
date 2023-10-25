// Bibliotecas
import React from 'react'
import { Button, Grid, Header, Image, Segment, Container, Divider } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';

// Imagens
import blogPicture from "../../../../images/misc/blog.png";
import projectsPicture from "../../../../images/misc/projects.png";

// Estilos
const buttonLight = { backgroundColor: 'white', border: '2px solid black', color: 'black', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const buttonDark = { backgroundColor: 'black', border: '2px solid white', color: 'white', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const setButtonLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setButtonDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };

const InicioSegment2 = () => {

    const { isDarkMode } = useDarkMode();

    return (

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

    )
}

export default InicioSegment2;