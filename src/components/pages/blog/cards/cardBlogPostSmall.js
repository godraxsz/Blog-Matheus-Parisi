import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Card, Image, Rating, Icon } from 'semantic-ui-react'
import { useDarkMode } from '../../../../util/DarkModeToggler'

const CardBlogPostSmall = ({ image, title, date, description, rating, comments }) => {

    const { isDarkMode } = useDarkMode();
    const midResolution = useMediaQuery({ query: '(min-width: 768px) and (max-width: 875px)' });
    const midMidResolution = useMediaQuery({ query: '(min-width: 875px) and (max-width: 1150px)' });

    return (

        <Card
            link
            style={isDarkMode ? { width: 'auto', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid white', color: 'white' } : { width: 'auto', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid black', color: 'black' }}
        >
            <div style={{ width: 'auto', height: '100px', overflow: 'hidden', borderRadius: '50%' }}>
                <Image style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={image ?? 'https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg'} />
            </div>
            <Card.Content style={isDarkMode ? { height: '158px', borderBottom: '1px solid white', borderTop: '1px solid white' } : { height: '158px', borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                <Card.Header
                    style={
                        isDarkMode
                            ? { fontSize: '19px', color: 'white', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }
                            : { fontSize: '19px', color: 'black', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }
                    }
                >
                    {title}
                </Card.Header>
                <Card.Meta
                    style={
                        isDarkMode
                            ? { fontSize: '17px', color: 'yellow' }
                            : { fontSize: '17px', color: 'teal' }}
                >
                    <span>{date}</span>
                </Card.Meta>
                <Card.Description
                    style={
                        isDarkMode
                            ? { fontSize: '16px', color: 'white', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: midResolution || midMidResolution ? 2 : 3 }
                            : { fontSize: '16px', color: 'black', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: midResolution || midMidResolution ? 2 : 3 }
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

export default CardBlogPostSmall