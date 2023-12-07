// Bibliotecas
import React from 'react'
import { Grid, Container, Header, Image, Segment } from 'semantic-ui-react'
import Tilt from 'react-parallax-tilt';

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';

// Imagens
import personalPicture from "../../../../images/avatar/large/personal.png";

const SobreSegment1 = () => {

    const { isDarkMode } = useDarkMode();

    return (

        <Segment inverted={isDarkMode} style={{ padding: '3em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>

            <Grid centered stackable inverted={isDarkMode} container>
                <Grid.Row>
                    <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>

                        <div>
                            <Header
                                as='h2'
                                content='Matheus Parisi'
                                inverted={isDarkMode}
                                style={{
                                    fontSize: '3em',
                                    fontWeight: 'normal',
                                }}
                            >
                            </Header>

                        </div>

                    </div>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Tilt
                            inverted={false}
                            perspective={900}
                            scale={1.1}
                            transitionSpeed={2000}
                        >
                            <Image centered rounded size={"medium"} src={personalPicture} style={{ marginTop: '2em', marginBottom: '2em', border: isDarkMode ? '2px solid white' : '2px solid black' }} />
                        </Tilt>
                    </Grid.Column>
                    <Grid.Column floated='left' width={5}>
                        <Container text style={{ padding: '2em 0em' }}>
                            <Header inverted={isDarkMode} as='h1'>Resumo</Header>
                            <p>🎓 Ciência da Computação</p>
                            <p>🌐 Desenvolvedor Web Fullstack</p>
                            <p>⭐️ Aspirante a Oficial da Reserva</p>
                            <p>💠 Comunicações - Exército Brasileiro</p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column floated='left' width={5}>
                        <Container text style={{ padding: '2em 0em' }}>
                            <Header inverted={isDarkMode} as='h1'>Hobbies</Header>
                            <p>💪 Academia</p>
                            <p>🎮 Videogames</p>
                            <p>🎭 Series & Animes</p>
                            <p>👾 Desenvolvimento de Jogos</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Segment style={{ border: isDarkMode ? '1px solid white' : '1px solid black' }} inverted={isDarkMode} padded> Um entusiasta do mundo da tecnologia amante da automação e desenvolvimento web.</Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='justified' width={10}>
                        <Container>
                            <h3 style={{ textAlign: 'center', margin: '25px' }}>Conhecendo o Mundo do Desenvolvimento </h3>
                            <p style={{ margin: '25px' }}>
                                Desde cedo, mergulhei no fascinante universo do desenvolvimento e criação. Em 2014, aos meus 12 anos, por mais simples que seja, inaugurei meu primeiro servidor do jogo <a href="https://www.minecraft.net/" target="_blank" rel="noopener noreferrer">Minecraft</a>, marcando o início de uma jornada que moldaria minha paixão por criar experiências interativas. Inicialmente, dedicava-me à edição de <a href="https://github.com/topics/minecraft-plugin" target="_blank" rel="noopener noreferrer">Plugins</a>, <a href="https://minecraft.fandom.com/wiki/Resource_pack#:~:text=The%20resource%20pack%20system%20provides,fonts%20without%20any%20code%20modification." target="_blank" rel="noopener noreferrer">Resource Packs</a>, entre outras coisas básicas, mas a sede de inovação já se fazia presente. Movido pela vontade de ir além, busquei aprimorar minhas habilidades através de um curso técnico de Design Gráfico voltado para jogos. Nesse curso, absorvi conceitos fundamentais de design, modelagem 3D, edição de vídeo, entre outros, enriquecendo meu repertório e consolidando meu comprometimento com a arte de criar. Não demorou muito tempo para minha trajetória expandir-se para o desenvolvimento de <a href="https://en.wikipedia.org/wiki/Video_game_modding" target="_blank" rel="noopener noreferrer">Mods</a>, <a href="https://github.com/topics/unturned-plugin" target="_blank" rel="noopener noreferrer">Plugins</a> e <a href="https://unturned.fandom.com/wiki/Hosting_a_Dedicated_Server" target="_blank" rel="noopener noreferrer">Servidores</a> no jogo <a href="https://store.steampowered.com/app/304930/Unturned/" target="_blank" rel="noopener noreferrer">Unturned</a>. Nesse ambiente dinâmico, tive a oportunidade de criar uma nova comunidade para o jogo, interagindo de forma direta com os jogadores. Modificando por completo o estilo de jogo original, experimentei a gratificação de transformar a experiência que Unturned proporcionava.
                            </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '332px', height: '253px', border: isDarkMode ? '2px solid white' : '2px solid black' }}>
                            <iframe
                                title="Casa_1"
                                frameBorder="0"
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                width="329"
                                height="250"
                                src="https://sketchfab.com/models/24cd5b4dd7af4af0ba20e076e578bfb4/embed?autostart=1&ui_hint=0&ui_theme=dark"
                            ></iframe>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '332px', height: '253px', border: isDarkMode ? '2px solid white' : '2px solid black' }}>
                            <iframe
                                title="Navio_1"
                                frameBorder="0"
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                width="329"
                                height="250"
                                src="https://sketchfab.com/models/f23f64b97c454f39bd1d34f4b4046253/embed?autostart=1&ui_hint=0&ui_theme=dark"
                            ></iframe>
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='justified' width={10}>
                        <Container>
                            <p style={{ margin: '25px' }}>

                                Ao ingressar no curso de Ciência da Computação, descobri meu interesse pelo desenvolvimento web, tanto na parte visual (front end) quanto na lógica dos sistemas (back end) e automação de processos. Essa paixão pela programação surgiu da minha vontade intensa de criar, motivando a escolha do curso após concluir o ensino médio. Foi por meio do <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem" target="_blank" rel="noopener noreferrer">Enem</a> de 2019 que obtive a nota que me proporcionou conquistar uma bolsa integral pelo <a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer">Prouni</a> abrindo não apenas portas para minha formação acadêmica, mas também fortalecendo meu compromisso com a constante busca por conhecimento na área que sempre me fascinou. Paralelamente, minhas atividades anteriores, como design gráfico, modelagem 3D e modding em jogos, permanecem presentes até hoje, transformadas em hobbies que complementam minha trajetória acadêmica e profissional. Desde então, tenho enfrentado desafios que enriquecem minha jornada, participando ativamente de projetos práticos que aprimoram minha compreensão e me impulsionam a contribuir para o futuro digital.
                            </p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>

            </Grid >
        </Segment >

    )
}

export default SobreSegment1;