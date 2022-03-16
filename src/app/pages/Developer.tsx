import { ReactElement } from 'react';
import { isPropertySignature } from 'typescript';

import { Page, Gallery } from 'app/components';
import { PagePropsType } from 'app/components/Page';

const test = [
    {
        title: 'hii',
        tags: ['react', 'html', 'javascript'],
        image: 'ladeeda.jpg',
        desc: 'pretend you have laser eyes',
        date: new Date('2016-06-02'),
    }
];

export default function Developer(): ReactElement {
    return(
        <Page title='Developer'>
            <div>uuuuh coding projects go here</div>
            <Gallery items={ test } tags={ ['react', 'html', 'javascript'] } />
        </Page>
    );
};