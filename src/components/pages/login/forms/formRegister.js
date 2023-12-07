import { useState } from 'react';
import { Header, Form, Segment, Button, Message, Image, Checkbox } from 'semantic-ui-react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Util
import { useAuthCheck } from '../../../../firebase/AuthCheck';
import { useDarkMode } from '../../../../util/DarkModeToggler';
import { usePage } from '../../../../util/PageToggler';

// Imagens
import welcomeImg from "../../../../images/register/welcome.gif";
import { GetUserProfile } from '../../../../firebase/GetUserProfile';

const FormRegister = ({ mobile }) => {

    const { auth, setAuthenticated, setProfileData } = useAuthCheck();
    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [isLastNameValid, setIsLastNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [receiveEmails, setReceiveEmails] = useState(true);

    function emailValidoFunction(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    function validarInputs(email, senha, firstName, lastName) {
        const emailValido = emailValidoFunction(email);
        const senhaValida = senha.length >= 6;
        const nomeValido = firstName.length >= 2 && firstName.length <= 20;
        const sobrenomeValido = lastName.length >= 2 && lastName.length <= 20;
        setIsEmailValid(emailValido);
        setIsPasswordValid(senhaValida);
        setIsFirstNameValid(nomeValido);
        setIsLastNameValid(sobrenomeValido);
    };

    const handleRegister = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const data = await GetUserProfile(user, receiveEmails, firstName, lastName);
                setProfileData(data);
                setAuthenticated(true);
                togglePage('inicio');
            })
            .catch((error) => {
                alert(pegarErroFirebaseRegister(error));
            });
    };

    function pegarErroFirebaseRegister(error) {
        if (error.code === "auth/email-already-in-use") {
            return "Usuário já cadastrado.\nVerifique e tente novamente.";
        } else {
            return "Erro interno.\nTente novamente mais tarde.";
        }
        // Não informar o erro para evitar ataques
        // return error.message;
    }

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

                    <Form.Input
                        maxLength={20}
                        fluid
                        icon='quote left'
                        iconPosition='left'
                        placeholder='Nome'
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value.replace(/[^a-zA-Z\s']/g, ''));
                            validarInputs(email, password, e.target.value.replace(/[^a-zA-Z\s']/g, ''), lastName);
                        }}
                    />

                    <Form.Input
                        maxLength={20}
                        fluid
                        icon='quote right'
                        iconPosition='left'
                        placeholder='Sobrenome'
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value.replace(/[^a-zA-Z\s']/g, ''));
                            validarInputs(email, password, firstName, e.target.value.replace(/[^a-zA-Z\s']/g, ''));
                        }}
                    />

                    <Form.Input
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value.replace(/\s/g, ''));
                            validarInputs(e.target.value, password, firstName, lastName);
                        }}
                    />

                    <Form.Input
                        fluid
                        icon={showPassword ? 'lock open' : 'lock'}
                        iconPosition='left'
                        placeholder='Senha'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validarInputs(email, e.target.value, firstName, lastName);
                        }}
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

                    <Button
                        color='black'
                        fluid
                        size='large'
                        disabled={!isEmailValid || !isPasswordValid || !isFirstNameValid || !isLastNameValid}
                        onClick={handleRegister}
                    >
                        Cadastrar
                    </Button>

                </Segment>
            </Form>
            <Message>
                <Form.Field>
                    <Checkbox
                        defaultChecked={receiveEmails}
                        onChange={() => setReceiveEmails(!receiveEmails)}
                        label='Acompanhar blog de Matheus Parisi em meu email'
                    />
                </Form.Field>
            </Message>
        </div >
    )
}

export default FormRegister;