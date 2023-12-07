// Bibliotecas
import React, { useState, useEffect, useRef } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { Segment, Grid, Sticky } from 'semantic-ui-react'

// Util
import { useDarkMode } from '../../../util/DarkModeToggler';
import { GetBlogPosts } from '../../../firebase/GetBlogPosts';

// Componentes
import BottomFooter from '../../footers/bottomFooter';
import MenuBlog from './menu/menuBlog';
import PaginationBlog from './pagination/paginationBlog';
import CardBlogPostLarge from './cards/cardBlogPostLarge';
import CardBlogPostSmall from './cards/cardBlogPostSmall';

const PageBlog = () => {

    const contextRef = useRef();
    const { isDarkMode } = useDarkMode();

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [blogPosts, setBlogPosts] = useState();
    const [blogCategories, setBlogCategories] = useState();
    const [postsGrandes, setPostsGrandes] = useState([]);
    const [postsPequenos, setPostsPequenos] = useState([]);
    const [filter, setFilter] = useState({ category: null, value: null });

    const numeroDePostsGrandesNaPrimeiraPagina = 1;

    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return formattedDate;
    }

    useEffect(() => {

        GetBlogPosts().then(async (posts) => {

            let postsArray = [];

            for (const category in posts) {
                const post = posts[category];

                for (const postCategorized in post) {
                    const postId = postCategorized;
                    const uncategorized = { [postId]: post[postCategorized] };
                    postsArray.push(uncategorized);
                }
            }

            let postsOrdenados = postsArray.sort((postA, postB) => {
                const dateA = Object.values(postA)[0].date;
                const dateB = Object.values(postB)[0].date;
                return dateB - dateA;
            });

            let paginas = Math.ceil(postsOrdenados.length / 15);

            let postsGrandesNaPrimeiraPagina = postsOrdenados.slice(0, numeroDePostsGrandesNaPrimeiraPagina);
            let postsRestantes = postsOrdenados.slice(numeroDePostsGrandesNaPrimeiraPagina);

            setTotalPages(paginas)
            setBlogPosts(postsOrdenados);
            setBlogCategories(posts);
            setPostsGrandes(postsGrandesNaPrimeiraPagina);
            setPostsPequenos(postsRestantes);

        })

    }, []);

    const togglePageBlog = async (newPage) => {

        if (window.scrollY !== 0) {
            handleScrollToTop();
            setTimeout(() => setPage(newPage), 1500);
        } else {
            setPage(newPage)
        }

    };

    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 1500,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <div style={{ width: '100%', height: '2px', backgroundColor: isDarkMode ? '#FFFFFF' : '#000000', textTransform: 'uppercase' }} />

            <Segment inverted={isDarkMode} vertical style={{ paddingBottom: '10em', paddingTop: '1em', paddingLeft: '2em', paddingRight: '2em', border: 'none', boxShadow: 'none', borderRadius: 0 }}>

                {

                    !blogPosts &&

                    <div style={{ margin: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>

                        <h1 style={{ fontSize: '50px' }}>
                            Nenhum post encontrado.
                        </h1>

                    </div>
                }

                {
                    blogPosts &&

                    <Grid centered stackable inverted={isDarkMode}>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Sticky context={contextRef} offset={62} bottomOffset={0}>
                                    <MenuBlog filter={filter} setFilter={setFilter} blogCategories={blogCategories} />
                                    <div style={{ margin: '0px', padding: '0px', display: 'flex', justifyContent: 'center' }}>
                                        <PaginationBlog totalPages={totalPages} page={page} togglePageBlog={togglePageBlog} />
                                    </div>
                                </Sticky>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div ref={contextRef}>

                                    {
                                        page === 1 &&
                                        <Segment
                                            inverted={isDarkMode}
                                            vertical
                                            style={{ marginTop: '1em', border: 'none', boxShadow: 'none', borderRadius: 0 }}
                                        >
                                            <Grid centered stackable inverted={isDarkMode}>
                                                <Grid.Row key={`row_main_0`}>

                                                    <Grid.Column key={`column_main_0`} width={12}>
                                                        {postsGrandes.slice(0, 1).map((postsObj) => (
                                                            <React.Fragment key={`fragment_main_0`}>
                                                                {
                                                                    Object.keys(postsObj).map((postId) => {
                                                                        const p = postsObj[postId];
                                                                        return (
                                                                            <CardBlogPostLarge
                                                                                key={`card_main_big_${postId}`}
                                                                                image={p?.image}
                                                                                title={p?.title}
                                                                                date={formatTimestamp(Number(p?.date))}
                                                                                description={p?.description}
                                                                                rating={5}
                                                                                comments={p?.comments ? Object.keys(p?.comments).length : 0}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </React.Fragment>
                                                        )
                                                        )}
                                                    </Grid.Column>

                                                    <Grid.Column key={`column_main_1`} width={4}>
                                                        {postsPequenos.slice(0, 2).map((postsObj) => (
                                                            <React.Fragment key={`fragment_main_${Object.keys(postsObj)[0]}`}>
                                                                {
                                                                    Object.keys(postsObj).map((postId) => {
                                                                        const p = postsObj[postId];
                                                                        return (
                                                                            <CardBlogPostSmall
                                                                                key={`card_main_small_${postId}`}
                                                                                image={p?.image}
                                                                                title={p?.title}
                                                                                date={formatTimestamp(Number(p?.date))}
                                                                                description={p?.description}
                                                                                rating={5}
                                                                                comments={p?.comments ? Object.keys(p?.comments).length : 0}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </React.Fragment>
                                                        ))}
                                                    </Grid.Column>

                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    }

                                    <Segment
                                        inverted={isDarkMode}
                                        vertical
                                        style={{ border: 'none', boxShadow: 'none', borderRadius: 0 }}
                                    >
                                        <Grid centered stackable inverted={isDarkMode}>
                                            <Grid.Row key={`row_0`}>
                                                {postsPequenos.slice(2 + ((page - 1) * 12), page >= 2 ? (5 * 4) : (3 * 4) + 2).map((postsObj) => (
                                                    <React.Fragment key={`fragment_${Object.keys(postsObj)[0]}`}>
                                                        {
                                                            Object.keys(postsObj).map((postId, postIndex) => {
                                                                const p = postsObj[postId];
                                                                return (
                                                                    <Grid.Column style={{ marginTop: '1em', marginBottom: '2em' }} key={`column_${postIndex}`} width={4}>
                                                                        <CardBlogPostSmall
                                                                            key={`card_small_${postId}`}
                                                                            image={p?.image}
                                                                            title={p?.title}
                                                                            date={formatTimestamp(Number(p?.date))}
                                                                            description={p?.description}
                                                                            rating={p?.rating?.value}
                                                                            comments={p?.comments ? Object.keys(p?.comments).length : 0}
                                                                        />
                                                                    </Grid.Column>
                                                                );
                                                            })
                                                        }
                                                    </React.Fragment>
                                                ))}
                                                {Array.from({ length: Math.max(0, 4 - (postsPequenos.length % 2)) }).map((_, columnIndex) => (
                                                    <Grid.Column key={`empty_column_${columnIndex}`} width={4} />
                                                ))}
                                            </Grid.Row>
                                        </Grid>
                                    </Segment>

                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                }
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

export default PageBlog;
