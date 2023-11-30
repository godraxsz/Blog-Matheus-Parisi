// Bibliotecas
import React from 'react'
import { Segment } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../util/DarkModeToggler';

// Componentes
import BottomFooter from '../../footers/bottomFooter';
import SobreSegment1 from './segments/sobreSegment1';
import SobreSegment2 from './segments/sobreSegment2';

const PageSobre = () => {

    const { isDarkMode } = useDarkMode();

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <SobreSegment1></SobreSegment1>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment
                className={isDarkMode ? "header-background-dark" : "header-background-light"}
                style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
                vertical
            ></Segment>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <SobreSegment2></SobreSegment2>

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

export default PageSobre