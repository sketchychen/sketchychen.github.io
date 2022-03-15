import { Query } from '@testing-library/react';
import { ReactElement } from 'react';


interface GalleryPropsType {
    tags: Array<string>,
    items: Array<any>, // replace <any> with <QueryItem> class or something
}


export default function Gallery(props: GalleryPropsType) {
    return (
        <div>
            <div className='gallery-controls'></div>
            <div className='gallery-container'></div>
        </div>
    );
}