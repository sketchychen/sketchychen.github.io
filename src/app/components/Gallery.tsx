import { useState, ChangeEvent } from 'react';


type GalleryItem = {
    title: string,
    tags: Set<string>,
    imgUrl: string,
    desc?: string,
    date: Date,
};

interface GalleryProps {
    tags: Set<string>,
    items: Array<GalleryItem>,
};

type GalleryState = {
    text: string,
    tags: Set<string>,
};

export default function Gallery(props: GalleryProps) {
    const [state, setState]: [GalleryState, Function] = useState({
        text: '',
        tags: new Set(),
    });

    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const tag = event.target.name;
        const checked = event.target.checked;
        setState((prevState: GalleryState) => {
            const nextTags = new Set(prevState.tags);
            checked ? nextTags.add(tag) : nextTags.delete(tag);
            return { ...prevState, tags: nextTags };
        });
    };

    const filterTags = (item: GalleryItem) => {
        if (state.tags.size > 0) {
            const checkedTags = Array.from(state.tags);
            for (let i of checkedTags) {
                if (!item.tags.has(i)) {
                    return false;
                }
            }
        }
        return true;
    }

    const debounce = (callback: Function, wait: number = 300) => {
        let timeout: ReturnType<typeof setTimeout>;
        return (...args: any) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => callback(...args), wait);
        }
    }

    const filterItems = (items: GalleryItem[]) => {
        return items.filter(filterTags)
    }

    return (
        <div className='gallery-container'>
            <div className='gallery-controls'>
                {
                    Array.from(props.tags).map((tag: string) =>(
                        <label
                            className={ `gallery-tag${state.tags.has(tag)? ' active' : ''}` }
                            key={ tag }
                            htmlFor={ tag }
                        >
                            <span>{ tag }</span>
                            <input
                                type='checkbox'
                                id={ tag }
                                name={ tag }
                                onChange={ handleCheckbox }
                            />
                        </label>
                    ))
                }
            </div>
            <div className='gallery-body'>
                {
                    props.items.filter(filterTags).map((item: GalleryItem) => (
                        <div className='gallery-item a-fadeindown a-stagger' key={ item.imgUrl }>
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
};