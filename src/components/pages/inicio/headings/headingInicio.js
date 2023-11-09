// Bibliotecas
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Header } from 'semantic-ui-react'

// Imagens
import profilePicture from "../../../../images/avatar/large/profile.png";
import helloImg from "../../../../images/misc/hello.gif";

const HeadingInicio = ({ mobile }) => {

    return (
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

            <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: 20 }}>

                <div>
                    <Header

                        as='h1'
                        content='Olá'
                        style={{
                            fontSize: mobile ? '2em' : '4em',
                            fontWeight: 'normal',
                            color: 'white',
                            marginTop: 5
                        }}
                    >
                    </Header>
                </div>

                <div>
                    <Image
                        src={helloImg}
                        size={mobile ? 'mini' : 'tiny'}
                        style={{
                            display: 'block',
                            marginLeft: mobile ? 10 : 20
                        }}
                    />
                </div>

            </div>

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

}

HeadingInicio.propTypes = {
    mobile: PropTypes.bool,
}

export default HeadingInicio;