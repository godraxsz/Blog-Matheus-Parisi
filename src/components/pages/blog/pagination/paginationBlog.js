import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'semantic-ui-react'
import { useDarkMode } from '../../../../util/DarkModeToggler'

const PaginationBlog = ({ totalPages, page, togglePageBlog }) => {

    const { isDarkMode } = useDarkMode();
    const lowResolution = useMediaQuery({ query: '(max-width: 330px)' });
    const midResolution = useMediaQuery({ query: '(min-width: 768px) and (max-width: 875px)' });
    const midHighResolution = useMediaQuery({ query: '(min-width: 875px) and (max-width: 1650px)' });
    const highResolution = useMediaQuery({ query: '(min-width: 1650px)' });

    const handlePageChange = (e, { activePage }) => {
        togglePageBlog(activePage);
    };

    return (
        <Pagination
            style={isDarkMode ? { margin: '0px', padding: '0px', border: '1px solid white' } : { margin: '0px', padding: '0px', border: '1px solid black' }}
            inverted={isDarkMode}
            boundaryRange={0}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={lowResolution ? 0 : (midResolution ? 0 : (midHighResolution ? 1 : (highResolution ? 3 : 2)))}
            totalPages={totalPages}
            activePage={page}
            onPageChange={handlePageChange}
        />
    )
}

export default PaginationBlog