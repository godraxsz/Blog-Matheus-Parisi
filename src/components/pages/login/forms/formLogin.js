import { useState } from 'react';
import { Header, Form, Segment, Button, Message, Image, Checkbox } from 'semantic-ui-react'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

// Util
import { useAuthCheck } from '../../../../firebase/AuthCheck';
import { useDarkMode } from '../../../../util/DarkModeToggler';
import { usePage } from '../../../../util/PageToggler';
import { GetUserProfile } from '../../../../firebase/GetUserProfile';

// Imagens
import passworHideImg from "../../../../images/login/password_hide.gif";
import passwordShowImg from "../../../../images/login/password_show.gif";

const FormLogin = ({ mobile }) => {

    const { auth, setAuthenticated, setProfileData } = useAuthCheck();
    const { isDarkMode } = useDarkMode();
    const { togglePage } = usePage();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    function emailValidoFunction(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    function validarInputs(email, senha) {
        const emailValido = emailValidoFunction(email);
        const senhaValida = senha.length > 5;
        setIsEmailValid(emailValido);
        setIsPasswordValid(senhaValida);
    };

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const data = await GetUserProfile(user);
                setProfileData(data);
                setAuthenticated(true);
                togglePage('inicio');
            })
            .catch((error) => {
                alert(pegarErroFirebaseLogin(error));
            });
    };

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Caso este usuário exista, um email de recuperação será enviado.\nVerifique a caixa de spam.");
            })
            .catch((error) => {
                alert(pegarErroFirebaseRecover(error));
            });
    };

    function pegarErroFirebaseLogin(error) {
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-login-credentials") {
            return "Email ou senha inválida.\nVerifique e tente novamente.";
        } else if (error.code === "auth/too-many-requests") {
            return "Muitas tentativas de login com dados incorretos.\nLogin temporariamente bloqueado.\nAguarde e tente novamente.";
        } else {
            return "Erro interno.\nTente novamente mais tarde.";
        }
        // Não informar o erro para evitar ataques
        // return error.message;
    }

    function pegarErroFirebaseRecover(error) {
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
            return "Caso este usuário exista, um email de recuperação será enviado.\nVerifique a caixa de spam.";
        } else if (error.code === "auth/too-many-requests") {
            return "Muitas tentativas de login com dados incorretos.\nLogin temporariamente bloqueado.\nAguarde e tente novamente.";
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

                    <Form.Input
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value.replace(/\s/g, ''));
                            validarInputs(e.target.value, password);
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
                            validarInputs(email, e.target.value);
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
                                <span
                                    style={isEmailValid ? { cursor: 'pointer', color: '#4183c4' } : { opacity: '0.5', color: '#4183c4' }}
                                    onClick={isEmailValid ? handlePasswordReset : null}
                                >
                                    Esqueci a senha
                                </span>
                            </div>
                        </div>
                    </Form.Field>

                    <Button
                        color='black'
                        fluid
                        size='large'
                        disabled={!isEmailValid || !isPasswordValid}
                        onClick={handleLogin}
                    >
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