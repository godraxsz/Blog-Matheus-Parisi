// Bibliotecas
import React from 'react'
import { Segment } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../util/DarkModeToggler';

// Componentes
import BottomFooter from '../../footers/bottomFooter';
import InicioSegment1 from './segments/inicioSegment1';
import InicioSegment2 from './segments/inicioSegment2';

const PageInicio = () => {

    const { isDarkMode } = useDarkMode();

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <InicioSegment1></InicioSegment1>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment
                className={isDarkMode ? "header-background-dark" : "header-background-light"}
                style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
                vertical
            ></Segment>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <InicioSegment2></InicioSegment2>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment
                className={isDarkMode ? "header-background-dark" : "header-background-light"}
                style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
                vertical
            ></Segment>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <BottomFooter ></BottomFooter>

        </div>

    )

}

export default PageInicio