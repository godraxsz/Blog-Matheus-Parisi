// Bibliotecas
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from 'semantic-ui-react'
import FormLogin from '../forms/formLogin'

// Util
import FormRegister from '../forms/formRegister';
import { usePage } from '../../../../util/PageToggler';

const HeadingLogin = ({ mobile }) => {

    const { page } = usePage();

    return (
        <Container
            text
        >

            <Grid textAlign='center' verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 450 }}>

                    {page === 'login' && <FormLogin mobile={mobile}></FormLogin>}
                    {page === 'registro' && <FormRegister mobile={mobile}></FormRegister>}

                </Grid.Column>

            </Grid>

        </Container>
    )
}

HeadingLogin.propTypes = {
    mobile: PropTypes.bool,
}

export default HeadingLogin;