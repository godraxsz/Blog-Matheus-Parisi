// Bibliotecas
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DarkModeToggle from "react-dark-mode-toggle";
import { InView } from 'react-intersection-observer'
import { Button, Container, Image, Menu, Segment, Dropdown, Icon } from 'semantic-ui-react'

// Componentes
import HeadingInicio from '../pages/inicio/headings/headingInicio'
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
const setTopMenuLight = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuDark = (e) => { e.currentTarget.style.backgroundColor = ''; };
const setTopMenuHoverLight = (e) => { e.currentTarget.style.backgroundColor = '#e4e4e4'; };
const setTopMenuHoverDark = (e) => { e.currentTarget.style.backgroundColor = '#252525'; };
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
    inicio: <HeadingInicio />,
    //projetos: <PageProjetos />,
    sobre: <HeadingEmpty />,
    login: <HeadingLogin />,
    blog: <HeadingEmpty />,
    admin: <HeadingEmpty />,
    registro: <HeadingLogin />,
};

const TopNavDesktop = ({ children, Media }) => {

    const [fixed, setFixed] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { authenticated, profileData, handleLogout } = useAuthCheck();
    const { page, togglePage } = usePage();

    const CurrentHeading = headingComponents[page] || <HeadingNotFound />;

    const toggleFixedMenu = (inView) => {
        setFixed(!inView);
    };

    return (
        <Media greaterThan='mobile'>
            <InView onChange={toggleFixedMenu}>
                <Segment className={isDarkMode ? "header-background-dark" : "header-background-light"} style={{ minHeight: !headingComponents[page] || page === "login" || page === "registro" ? '100vh' : 'auto', boxShadow: 'none', borderRadius: 0 }} textAlign='center' vertical>
                    <Menu fixed={fixed ? 'top' : null} style={isDarkMode ? { backgroundColor: '#121212', color: 'white', borderBottom: '1px solid white', borderTop: '1px solid white' } : { backgroundColor: '#ebebeb', color: 'black', borderBottom: '1px solid black', borderTop: '1px solid black' }} pointing={false} secondary={false} size='large'>
                        <Container>
                            <Menu.Item onClick={() => togglePage('inicio')} onMouseEnter={isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }}><Image src={isDarkMode ? darkIco : lightIco} size="mini"></Image></Menu.Item>
                            <Menu.Item onClick={() => togglePage('inicio')} onMouseEnter={page === 'inicio' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'inicio' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'inicio' ? '#353535' : '', borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'inicio' ? '#dfdfdf' : '', borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Início</Menu.Item>
                            <Menu.Item onClick={() => togglePage('projetos')} onMouseEnter={page === 'projetos' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'projetos' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'projetos' ? '#353535' : '', borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'projetos' ? '#dfdfdf' : '', borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Projetos</Menu.Item>
                            <Menu.Item onClick={() => togglePage('sobre')} onMouseEnter={page === 'sobre' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'sobre' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'sobre' ? '#353535' : '', borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'sobre' ? '#dfdfdf' : '', borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Sobre mim</Menu.Item>
                            <Menu.Item onClick={() => togglePage('blog')} onMouseEnter={page === 'blog' ? null : isDarkMode ? setTopMenuHoverDark : setTopMenuHoverLight} onMouseLeave={page === 'blog' ? null : isDarkMode ? setTopMenuDark : setTopMenuLight} style={isDarkMode ? { color: 'white', backgroundColor: page === 'blog' ? '#353535' : '', borderLeft: '1px solid #454545', borderRight: '1px solid #454545', borderBottom: '1px solid #454545', borderTop: '0px' } : { color: 'black', backgroundColor: page === 'blog' ? '#dfdfdf' : '', borderLeft: '1px solid #d6d6d6', borderRight: '1px solid #d6d6d6', borderBottom: '1px solid #d6d6d6', borderTop: '0px' }} as='a'>Blog</Menu.Item>
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
                                                onClick={async () => {
                                                    await handleLogout().then(() => {

                                                    })
                                                }}
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
                        </Container>
                    </Menu>
                    {CurrentHeading}
                </Segment>
            </InView>
            {children}
        </Media >
    );
};

TopNavDesktop.propTypes = {
    children: PropTypes.node,
};

export default TopNavDesktop;