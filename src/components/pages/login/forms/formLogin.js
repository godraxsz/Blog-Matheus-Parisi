import { useState } from 'react';
import { Header, Form, Segment, Button, Message, Image, Checkbox } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';
import { usePage } from '../../../../util/PageToggler';

// Imagens
import passworHideImg from "../../../../images/login/password_hide.gif";
import passwordShowImg from "../../../../images/login/password_show.gif";

const FormLogin = ({ mobile }) => {

    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>

            <Image
                rounded
                src={showPassword ? passwordShowImg : passworHideImg}
                size='small'
                style={{
                    margin: '0 auto',
                    display: 'block',
                    marginBottom: 0,
                    marginTop: mobile ? '0.5em' : '1em',
                    border: isDarkMode ? '2px solid white' : '2px solid black',
                    backgroundColor: isDarkMode ? '#000000' : '#ffffff'
                }}
            />
            <Header as='h2' inverted content={"Entrar na sua conta"} textAlign='center'></Header>
            <Form size='large'>
                <Segment stacked>

                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail' />

                    <Form.Input
                        fluid
                        icon={showPassword ? 'lock open' : 'lock'}
                        iconPosition='left'
                        placeholder='Senha'
                        type={showPassword ? 'text' : 'password'}
                    />

                    <Form.Field>
                        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left', marginLeft: '5px', marginRight: '5px' }}>
                            <div>
                                <Checkbox
                                    onChange={() => setShowPassword(!showPassword)}
                                    label='Mostrar senha'
                                />
                            </div>
                            <div>
                                <span style={{ cursor: 'pointer', color: '#4183c4', }}  >
                                    Esqueci a senha
                                </span>
                            </div>
                        </div>
                    </Form.Field>

                    <Button color='black' fluid size='large'>
                        Login
                    </Button>

                </Segment>
            </Form>
            <Message>
                Primeiro acesso? <span style={{ cursor: 'pointer', color: '#4183c4', }} onClick={() => togglePage('registro')}>Cadastrar-se</span>
            </Message>
        </div>
    )
}

export default FormLogin;