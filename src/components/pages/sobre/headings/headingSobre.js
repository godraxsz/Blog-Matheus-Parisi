// Bibliotecas
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Header } from 'semantic-ui-react'

// Imagens
import olhosImg from "../../../../images/sobre/olhos.gif";

const HeadingSobre = ({ mobile }) => {

    return (
        <Container
            text
        >
            <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: 20 }}>

                <div>
                    <Header
                        as='h2'
                        content='Conheça Matheus Parisi'
                        style={{
                            fontSize: mobile ? '1.5em' : '3em',
                            fontWeight: 'normal',
                            color: 'white',
                            marginTop: 5
                        }}
                    >
                    </Header>

                </div>

                <div>
                    <Image
                        src={olhosImg}
                        size={mobile ? 'mini' : 'tiny'}
                        style={{
                            display: 'block',
                            marginLeft: mobile ? 10 : 20
                        }}
                    />
                </div>

            </div>

        </Container>
    )

}

HeadingSobre.propTypes = {
    mobile: PropTypes.bool,
}

export default HeadingSobre;