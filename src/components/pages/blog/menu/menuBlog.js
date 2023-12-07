// Bibliotecas
import React from 'react'
import { Input, Icon, Menu, Label } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../../util/DarkModeToggler';

const MenuBlog = ({ filter, setFilter, blogCategories }) => {

    const { isDarkMode } = useDarkMode();

    return (
        <Menu style={isDarkMode ? { marginTop: '2em', marginBottom: '14px', border: '2px solid white' } : { marginTop: '2em', marginBottom: '14px', border: '2px solid black' }} inverted={isDarkMode} vertical fluid>
            <Menu.Item>
                <Input
                    style={{
                        border: isDarkMode ? '1px solid white' : '1px solid black',
                        borderRadius: '5px',
                    }}
                    icon={<Icon name='search' inverted circular link />}
                    placeholder='Buscar no blog...'
                />
            </Menu.Item>
            <Menu.Header
                style={{ marginLeft: '15px', marginTop: '15px', marginBottom: `${filter?.type === 'category' && filter?.value != null ? '0px' : '15px'}` }}
                as='h3'
                content='Categorias'
            />
            {
                filter?.type === 'category' && filter?.value != null &&
                <div onClick={() => setFilter({ type: null, value: null })} style={{ cursor: 'pointer', border: `${isDarkMode ? '1px solid white' : '1px solid black'}`, width: '70px', borderRadius: '5px', paddingTop: '3px', paddingBottom: '3px', backgroundColor: `${isDarkMode ? 'rgba(220,220,220, 0.4)' : 'rgba(220,220,220, 0.7)'}`, marginLeft: '15px', marginTop: '10px', marginBottom: '15px', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} >
                    <Icon size='small' name='trash' />
                    <p style={{ fontSize: '13px' }}>Limpar</p>
                </div>
            }
            {
                Object.keys(blogCategories).map((categoria) => (
                    <Menu.Item active={filter?.type === 'category' && filter?.value === categoria} onClick={() => setFilter({ type: 'category', value: categoria })} key={categoria}>
                        <Label>{Object.keys(blogCategories[categoria]).length}</Label>
                        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </Menu.Item>
                ))
            }
        </Menu >
    )
}

export default MenuBlog;