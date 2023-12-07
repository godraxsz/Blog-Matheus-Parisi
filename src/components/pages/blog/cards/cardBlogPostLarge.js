import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Card, Image, Rating, Icon } from 'semantic-ui-react'
import { useDarkMode } from '../../../../util/DarkModeToggler'

const CardBlogPostLarge = ({ image, title, date, description, rating, comments }) => {

    const { isDarkMode } = useDarkMode();
    const midResolution = useMediaQuery({ query: '(min-width: 768px) and (max-width: 875px)' });

    return (

        <Card
            link
            style={isDarkMode ? { width: 'auto', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid white', color: 'white' } : { width: 'auto', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid black', color: 'black' }}
        >
            <div style={{ width: 'auto', height: '375px', overflow: 'hidden', borderRadius: '50%' }}>
                <Image style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={image ?? 'https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg'} />
            </div>
            <Card.Content style={isDarkMode ? { height: `${midResolution ? '238px' : '218px'}`, borderBottom: '1px solid white', borderTop: '1px solid white' } : { height: `${midResolution ? '238px' : '218px'}`, borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                <Card.Header
                    style={
                        isDarkMode
                            ? { fontSize: '22px', color: 'white', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }
                            : { fontSize: '22px', color: 'black', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }
                    }
                >
                    {title}
                </Card.Header>
                <Card.Meta
                    style={
                        isDarkMode
                            ? { fontSize: '19px', color: 'yellow' }
                            : { fontSize: '19px', color: 'teal' }}
                >
                    <span>{date}</span>
                </Card.Meta>
                <Card.Description
                    style={
                        isDarkMode
                            ? { fontSize: '18px', color: 'white', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: `${midResolution ? 6 : 5}` }
                            : { fontSize: '18px', color: 'black', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: `${midResolution ? 6 : 5}` }
                    }
                >
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content style={isDarkMode ? {backgroundColor: '#121212'} : {backgroundColor: '#ebebeb'}} extra>
                <div style={{ display: 'flex', flexDirection: midResolution ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div style={isDarkMode ? { display: 'flex', flexDirection: 'column', color: 'white' } : { display: 'flex', flexDirection: 'column', color: 'black' }}>
                        <Icon name='comments'></Icon>
                        <p style={{ marginTop: '5px' }}>{comments ?? 0}</p>
                    </div>

                    <Rating
                        style={isDarkMode ? { backgroundColor: 'rgba(220,220,220, 0.4)', padding: '2px', border: '1px solid white', borderRadius: '3px' } : { backgroundColor: 'rgba(220,220,220, 0.7)', padding: '2px', border: '1px solid black', borderRadius: '3px' }}
                        disabled
                        icon='star'
                        defaultRating={rating ?? 3}
                        maxRating={5}
                    />

                </div>
            </Card.Content>
        </Card >

    )
}

export default CardBlogPostLarge