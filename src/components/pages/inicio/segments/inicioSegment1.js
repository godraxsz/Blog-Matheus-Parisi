// Bibliotecas
import React from 'react'
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Tilt from 'react-parallax-tilt';

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';

// Imagens
import profileInfo from "../../../../images/misc/info.png";
import { usePage } from '../../../../util/PageToggler';

// Estilos
const buttonLight = { backgroundColor: 'white', border: '2px solid black', color: 'black', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const buttonDark = { backgroundColor: 'black', border: '2px solid white', color: 'white', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const setButtonLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setButtonDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };

const InicioSegment1 = () => {

    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    return (

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
                        <Tilt
                            inverted={false}
                            perspective={900}
                            scale={1.1}
                            transitionSpeed={2000}
                        >
                            <Image rounded size='large' src={profileInfo} style={isDarkMode ? { margin: '0 auto', display: 'block', border: '2px solid white' } : { margin: '0 auto', display: 'block', border: '2px solid black' }} />
                        </Tilt>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button
                            as='a'
                            size='huge'
                            style={isDarkMode ? buttonDark : buttonLight}
                            onClick={() => togglePage('sobre')}
                            onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                            onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
                        >
                            Conhecer Theus
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default InicioSegment1;