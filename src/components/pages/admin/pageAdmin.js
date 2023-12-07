// Bibliotecas
import React, { useState } from 'react'
import { Segment, Button, Form, Input, TextArea, } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../util/DarkModeToggler';

// Componentes
import BottomFooter from '../../footers/bottomFooter';
import { NewBlogPost } from '../../../firebase/NewBlogPost';

const PageAdmin = () => {

    const { isDarkMode } = useDarkMode();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleBlogPost = () => {
        NewBlogPost(category.toLowerCase(), title, description);
        setTitle('');
        setCategory('');
        setDescription('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment inverted={isDarkMode} vertical style={{ paddingBottom: '10em', paddingTop: '10em', paddingLeft: '20em', paddingRight: '20em', border: 'none', boxShadow: 'none', borderRadius: 0 }}>

                <h1>Postar no Blog</h1>

                <Form inverted={isDarkMode}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            style={{ border: isDarkMode ? '2px solid white' : '2px solid black', borderRadius: '6px' }}
                            control={Input}
                            label='Título'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Field
                            style={{ border: isDarkMode ? '2px solid white' : '2px solid black', borderRadius: '6px' }}
                            control={Input}
                            label='Categoria'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Field
                        style={{ border: isDarkMode ? '2px solid white' : '2px solid black', borderRadius: '6px' }}
                        control={TextArea}
                        label='Descrição'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Field onClick={handleBlogPost} style={{ color: isDarkMode ? 'black' : 'white', border: isDarkMode ? '2px solid white' : '2px solid black', borderRadius: '6px', backgroundColor: isDarkMode ? 'yellow' : 'teal' }} control={Button}>Postar</Form.Field>
                </Form>

            </Segment >

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment
                className={isDarkMode ? "header-background-dark" : "header-background-light"}
                style={{ padding: '0.5em 0em', border: 'none', boxShadow: 'none', borderRadius: 0, zIndex: -2 }}
                vertical
            ></Segment>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <BottomFooter ></BottomFooter>
        </div >
    )
}

export default PageAdmin;
