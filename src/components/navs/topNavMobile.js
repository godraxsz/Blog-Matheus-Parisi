// Bibliotecas
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DarkModeToggle from "react-dark-mode-toggle";
import { Button, Container, Image, Menu, Segment, Sidebar, Icon, Dropdown } from 'semantic-ui-react'

// Componentes
import HeadingInicio from '../pages/inicio/headings/headingInicio';
import HeadingNotFound from '../pages/notFound/headings/headingNotFound';
import HeadingLogin from '../pages/login/headings/headingLogin';
import HeadingEmpty from '../pages/notFound/headings/headingEmpty';

// Util
import { useDarkMode } from '../../util/DarkModeToggler';
import { usePage } from '../../util/PageToggler';
import { useAuthCheck } from '../../firebase/AuthCheck';

// Imagens
import lightIco from "../../images/favicons/light.ico";
import darkIco from "../../images/favicons/dark.ico";
import userIco from "../../images/login/user.png";

// Estilos
const buttonLight = { backgroundColor: 'white', border: '2px solid black', color: 'black', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const buttonDark = { backgroundColor: 'black', border: '2px solid white', color: 'white', transition: 'background - color 0.3s, border - color 0.3s, color 0.3s', };
const setButtonLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setButtonDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };
const dropdownLight = { backgroundColor: '', color: 'black' };
const dropdownDark = { backgroundColor: '', color: 'white' };
const setDropdownLight = (e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; };
const setDropdownDark = (e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; };
const setDropdownHoverLight = (e) => { e.currentTarget.style.backgroundColor = '#e8e8e8'; };
const setDropdownHoverDark = (e) => { e.currentTarget.style.backgroundColor = '#0a0a0a'; };

// Mapeamento de headings
const headingComponents = {
    inicio: <HeadingInicio mobile={true} />,
    //projetos: <PageProjetos />,
    sobre: <HeadingEmpty />,
    login: <HeadingLogin mobile={true} />,
    blog: <HeadingEmpty />,
    admin: <HeadingEmpty />,
    registro: <HeadingLogin mobile={true} />,
};

const TopNavMobile = ({ children, Media }) => {

    const [sidebarOpened, setSidebarOpened] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { authenticated, profileData, handleLogout } = useAuthCheck();
    const { page, togglePage } = usePage();

    const CurrentHeading = headingComponents[page] || <HeadingNotFound />;

    const handleSidebarHide = () => {
        setSidebarOpened(false);
    };

    const handleToggle = () => {
        setSidebarOpened(true);
    };

    return (
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted={isDarkMode}
                    style={isDarkMode ? { backgroundColor: '#121212' } : { backgroundColor: '#ebebeb' }}
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item onClick={() => togglePage('inicio')} style={isDarkMode ? { borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }}><Image src={isDarkMode ? darkIco : lightIco} size="mini"></Image></Menu.Item>
                    <Menu.Item onClick={() => togglePage('inicio')} as='a' active={page === 'inicio' ? true : false}>Início</Menu.Item>
                    <Menu.Item onClick={() => togglePage('projetos')} as='a' active={page === 'projetos' ? true : false}>Projetos</Menu.Item>
                    <Menu.Item onClick={() => togglePage('sobre')} as='a' active={page === 'sobre' ? true : false}>Sobre mim</Menu.Item>
                    <Menu.Item onClick={() => togglePage('blog')} as='a' active={page === 'blog' ? true : false}>Blog</Menu.Item>
                    <Menu.Item onClick={() => togglePage('login')} as='a' active={page === 'login' ? true : false}>Login</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment className={isDarkMode ? "header-background-dark" : "header-background-light"} textAlign='center' style={{ minHeight: !headingComponents[page] || page === "login" || page === "registro" ? '100vh' : 'auto', padding: '1em 0em', border: 'none', boxShadow: 'none', borderRadius: 0 }} vertical>
                        <Container>
                            <Menu style={isDarkMode ? { backgroundColor: '#121212', color: 'white', borderBottom: '1px solid white', borderTop: '1px solid white' } : { backgroundColor: '#ebebeb', color: 'black', borderBottom: '1px solid black', borderTop: '1px solid black' }} size='large'>
                                <Menu.Item style={isDarkMode ? { borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px', color: 'white' } : { borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px', color: 'black' }} onClick={handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item style={isDarkMode ? { borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }} position='right'>
                                    {
                                        authenticated &&

                                        <Dropdown
                                            inline
                                            floating
                                            labeled
                                            icon={null}
                                            style={isDarkMode ? dropdownDark : dropdownLight}
                                            trigger={
                                                <span>
                                                    <img alt="user" style={{ width: '37px', height: '37px', borderRadius: '5px', marginLeft: '5px', marginRight: '5px', border: `${isDarkMode ? '2px solid white' : '2px solid black'}` }} src={profileData?.picture ? profileData?.picture : userIco} />
                                                </span>
                                            }
                                        >
                                            <Dropdown.Menu style={isDarkMode ? { color: 'white', backgroundColor: 'black', border: '2px solid white' } : { color: 'black', backgroundColor: 'white', border: '2px solid black' }}>
                                                <Dropdown.Header style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Icon name='user' color={isDarkMode ? 'yellow' : 'teal'}></Icon>
                                                    <p
                                                        style={{
                                                            fontSize: `${profileData &&
                                                                    profileData?.first_name &&
                                                                    profileData?.last_name &&
                                                                    profileData.first_name.length + profileData.last_name.length >= 14 &&
                                                                    profileData.first_name.length + profileData.last_name.length < 20
                                                                    ? '9px'
                                                                    : profileData?.first_name && profileData.first_name.length < 14
                                                                        ? '11px'
                                                                        : '10px'
                                                                }`,
                                                            color: `${isDarkMode ? 'yellow' : 'teal'}`,
                                                        }}
                                                    >
                                                        {profileData?.first_name && profileData?.last_name
                                                            ? profileData.first_name.length + profileData.last_name.length >= 20
                                                                ? `${profileData.first_name}`
                                                                : `${profileData.first_name} ${profileData.last_name}`
                                                            : 'Anônimo'}
                                                    </p>
                                                </Dropdown.Header>
                                                <Dropdown.Divider style={{ backgroundColor: `${isDarkMode ? 'white' : 'black'}` }} />
                                                {
                                                    authenticated && profileData && profileData?.rank === 'admin' &&

                                                    < div
                                                        style={{ cursor: 'pointer', backgroundColor: `${isDarkMode ? 'black' : 'white'}` }}
                                                        onMouseEnter={isDarkMode ? setDropdownHoverDark : setDropdownHoverLight}
                                                        onMouseLeave={isDarkMode ? setDropdownDark : setDropdownLight}
                                                        onClick={() => togglePage('admin')}
                                                    >
                                                        <Dropdown.Item><p style={{ color: `${isDarkMode ? 'white' : 'black'}` }}>Admin</p></Dropdown.Item>
                                                    </div>

                                                }
                                                {
                                                    authenticated && profileData &&

                                                    <div
                                                        style={{ cursor: 'pointer', backgroundColor: `${isDarkMode ? 'black' : 'white'}` }}
                                                        onMouseEnter={isDarkMode ? setDropdownHoverDark : setDropdownHoverLight}
                                                        onMouseLeave={isDarkMode ? setDropdownDark : setDropdownLight}
                                                    >
                                                        <Dropdown.Item><p style={{ color: `${isDarkMode ? 'white' : 'black'}` }}>Perfil</p></Dropdown.Item>
                                                    </div>

                                                }
                                                <div
                                                    style={{ cursor: 'pointer', backgroundColor: `${isDarkMode ? 'black' : 'white'}` }}
                                                    onMouseEnter={isDarkMode ? setDropdownHoverDark : setDropdownHoverLight}
                                                    onMouseLeave={isDarkMode ? setDropdownDark : setDropdownLight}
                                                    onClick={handleLogout}
                                                >
                                                    <Dropdown.Item><p style={{ color: `${isDarkMode ? 'white' : 'black'}` }}>Sair</p></Dropdown.Item>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    }
                                    {
                                        !authenticated &&

                                        <Button
                                            as='a'
                                            onClick={() => togglePage('login')}
                                            style={isDarkMode ? buttonDark : buttonLight}
                                            onMouseEnter={isDarkMode ? setButtonLight : setButtonDark}
                                            onMouseLeave={isDarkMode ? setButtonDark : setButtonLight}
                                        >
                                            Login
                                        </Button>
                                    }
                                    <div style={{ margin: '0px', marginLeft: '20px', backgroundColor: `grey`, border: `${isDarkMode ? '2px solid white' : '2px solid black'}`, padding: '4px', paddingTop: '7px', paddingRight: '5px', borderRadius: '8px' }} >
                                        <DarkModeToggle
                                            onChange={toggleDarkMode}
                                            checked={isDarkMode}
                                            size={50}
                                        />
                                    </div>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        {CurrentHeading}
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media >
    );
};

TopNavMobile.propTypes = {
    children: PropTypes.node,
};

export default TopNavMobile;