import { useState } from 'react';
import { Header, Form, Segment, Button, Message, Image, Checkbox } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';
import { usePage } from '../../../../util/PageToggler';

// Imagens
import welcomeImg from "../../../../images/register/welcome.gif";

const FormRegister = ({ mobile }) => {

    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    const [showPassword, setShowPassword] = useState(false);
    const [receiveEmails, setReceiveEmails] = useState(true);

    return (
        <div>

            <Image
                rounded
                src={welcomeImg}
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
            <Header as='h2' inverted content={"Criar uma nova conta"} textAlign='center'></Header>
            <Form size='large'>
                <Segment stacked>

                    <Form.Input fluid icon='quote left' iconPosition='left' placeholder='Nome' />

                    <Form.Input fluid icon='quote right' iconPosition='left' placeholder='Sobrenome' />

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
                                <span style={{ cursor: 'pointer', color: '#4183c4', }} onClick={() => togglePage('login')} >
                                    Voltar ao login
                                </span>
                            </div>
                        </div>
                    </Form.Field>

                    <Button color='black' fluid size='large'>
                        Cadastrar
                    </Button>

                </Segment>
            </Form>
            <Message>
                <Form.Field>
                    <Checkbox defaultChecked={receiveEmails} onChange={() => setReceiveEmails(!receiveEmails)} label='Acompanhar blog de Matheus Parisi em meu email' />
                </Form.Field>
            </Message>
        </div >
    )
}

export default FormRegister;