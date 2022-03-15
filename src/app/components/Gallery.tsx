import { Query } from '@testing-library/react';
import { ReactElement } from 'react';

import '../../styles/gallery.scss';


interface GalleryPropsType {
    tags: Array<string>,
    items: Array<any>, // replace <any> with <QueryItem> class or something
}

type GalleryItemType = {
    title: string,
    tags: Array<string>,
    image: string,
    desc?: string,
    date: Date,
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