import { render } from '@testing-library/react';
import { Component, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';


type GalleryItem = {
    title: string,
    tags: Array<string>,
    imgUrl: string,
    desc?: string,
    date: Date,
};

interface GalleryProps {
    tags: Array<string>,
    items: Array<GalleryItem>,
};

type GalleryState = {
    text: string,
};

export default class Gallery extends Component<GalleryProps, GalleryState> {
    state = {
        text: '',
    };

    handleSubmit = (event: FormEvent) => {
        let [searchParams, setSearchParams] = useSearchParams();
        event.preventDefault();

    };
    render() {
        return (
            <div className='gallery-container'>
                <div className='gallery-controls'>
                    <form onSubmit={this.handleSubmit}></form>
                </div>
                <div className='gallery-body'>
                    {
                        this.props.items.map((item: GalleryItem) => (
                            <div className='gallery-item' key={ item.imgUrl }>
                                <img
                                    className='gallery-item-thumbnail'
                                    style={ {backgroundImage: `url(${item.imgUrl})`} }
                                    alt={ item.desc }
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
};