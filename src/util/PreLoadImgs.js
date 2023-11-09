import { useEffect } from 'react';

function importAll(r) {
    return r.keys().map(r);
}

const imagesContext = require.context('../images', true, /\.(png|jpe?g|svg|gif|ico)$/);

const imagesToPreload = importAll(imagesContext);

const PreloadImages = () => {

    useEffect(() => {
        imagesToPreload.forEach((image) => {
            const img = new Image();
            img.src = image.default;
        });
    }, []);

    return null;
};

export default PreloadImages;
