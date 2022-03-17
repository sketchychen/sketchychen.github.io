import { ReactElement } from 'react';
import { isPropertySignature } from 'typescript';
import { Page, Gallery } from 'app/components';


const test = [
    {
        title: 'hii',
        tags: ['react', 'html', 'javascript'],
        imgUrl: 'ladeeda.jpg',
        desc: 'pretend you have laser eyes',
        date: new Date('2016-06-02'),
    },
    {
        title: 'hiii',
        tags: ['react', 'html', 'javascript'],
        imgUrl: 'ladeeda copy 2.jpg',
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