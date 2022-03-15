import { Query } from '@testing-library/react';
import { ReactElement } from 'react';

import '../../styles/gallery.scss';


type GalleryItemType = {
    title: string,
    tags: Array<string>,
    image: string,
    desc?: string,
    date: Date,
}

interface GalleryPropsType {
    tags: Array<string>,
    items: Array<GalleryItemType>,
}

export default function Gallery(props: GalleryPropsType) {
    return (
        <div className='gallery-container'>
            <div className='gallery-controls'></div>
            <div className='gallery-body'>
                {
                    props.items.map((item: GalleryItemType) => (
                        <div className='gallery-item' key={ item.title }>
                            <image className='gallery-item-thumbnail' />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}