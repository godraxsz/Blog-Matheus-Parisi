// Bibliotecas
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Header } from 'semantic-ui-react'

// Imagens
import notFoundImg from "../../../../images/pages/404.png";

const HeadingNotFound = ({ mobile }) => {

    return (
        <Container
            text
        >

            <Image
                src={notFoundImg}
                size='large'
                style={{
                    margin: '0 auto',
                    display: 'block',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em',
                }}
            />

            <Header

                as='h1'
                content='Página Não Encontrada'
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
                content='Você tentou acessar uma página que não existe'
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
}

HeadingNotFound.propTypes = {
    mobile: PropTypes.bool,
}

export default HeadingNotFound;