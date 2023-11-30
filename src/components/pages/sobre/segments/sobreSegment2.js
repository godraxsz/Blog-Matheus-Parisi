// Bibliotecas
import React from 'react'
import { Grid, Container, Image, Segment } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';

// Imagens
import cporImage1 from "../../../../images/cpor/1.png";
import cporImage2 from "../../../../images/cpor/2.png";
import cporImage3 from "../../../../images/cpor/3.png";

const SobreSegment2 = () => {
    const { isDarkMode } = useDarkMode();

    return (

        <Segment inverted={isDarkMode} style={{ padding: '4em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>
            <Grid stackable inverted={isDarkMode} container>
                <Grid.Row>
                    <Grid.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} width={6}>
                        <div style={{ border: isDarkMode ? '2px solid white' : '2px solid black' }}>
                            <Carousel
                                width='270px'
                                height='480px'
                                autoPlay
                                swipeable
                                showArrows
                                stopOnHover
                                infiniteLoop
                                interval={6000}
                                showThumbs={false}
                                showStatus={false}
                            >
                                <div>
                                    <Image src={cporImage1} />
                                </div>
                                <div>
                                    <Image src={cporImage2} />
                                </div>
                                <div>
                                    <Image src={cporImage3} />
                                </div>
                            </Carousel>
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{ padding: '2em 1em' }} textAlign='justified' width={10}>
                        <Container textAlign='justified'>
                            <h3 style={{ textAlign: 'center', margin: '25px' }}>Período de Serviço Militar</h3>
                            <p style={{ margin: '25px' }}>
                                Paralelamente ao meu segundo ano na faculdade, em 2021, tive a oportunidade única de servir ao Exército Brasileiro no Centro de Preparação de Oficiais da Reserva de São Paulo (<a href="https://www.instagram.com/cporsp_exercito/" target="_blank" rel="noopener noreferrer">CPOR/SP</a>), onde me formei como Aspirante a Oficial da Reserva da <a href="https://www.eb.mil.br/comunicacoes" target="_blank" rel="noopener noreferrer">Arma de Comunicações</a>. Este foi um período intenso, pois conciliar o serviço militar com os compromissos acadêmicos demandou grande dedicação. Durante a formação, absorvi valiosos ensinamentos sobre disciplina, hierarquia, ciências militares e diversos outros temas. Realizei visitas a várias organizações militares e outros órgãos, como o 3° Centro de Telemática de Área (3º CTA) e a Agência Nacional de Telecomunicações (<a href="https://www.gov.br/anatel" target="_blank" rel="noopener noreferrer">Anatel</a>), ampliando meu entendimento sobre as práticas e desafios do setor.
                            </p>
                            <p style={{ margin: '25px' }}>
                                Além disso, tive a gratificante oportunidade de iniciar um projeto de desenvolvimento para o CPOR. Desenvolvi um sistema de <a href="https://github.com/matheusparisi/Cautela-de-Material-Web-Public" target="_blank" rel="noopener noreferrer">Cautela de Material</a> destinado às diferentes seções do quartel. Esse sistema possibilita o registro, modificação e exclusão de itens armazenados, permitindo também o acompanhamento dos militares responsáveis, quantidade, detalhes e datas relevantes para o controle do estoque. Essa experiência prática não apenas consolidou meus conhecimentos em desenvolvimento de sistemas, mas também demonstrou a aplicabilidade direta da tecnologia na otimização de processos militares. Essas vivências enriqueceram minha formação, proporcionando uma perspectiva única que pretendo integrar ao meu percurso acadêmico e profissional.
                            </p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default SobreSegment2;