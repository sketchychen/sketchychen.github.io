import { ReactElement } from 'react';
import { Page, Gallery } from 'app/components';


const test = [
    {
        title: 'hii',
        tags: new Set(['react', 'html', 'javascript']),
        imgUrl: 'ladeeda.jpg',
        desc: "['react', 'html', 'javascript']",
        date: new Date('2016-06-02'),
    },
    {
        title: 'hiii',
        tags: new Set(['html', 'javascript']),
        imgUrl: 'ladeeda copy 2.jpg',
        desc: "['html', 'javascript']",
        date: new Date('2016-06-02'),
    },
    {
        title: 'hiiii',
        tags: new Set(['react', 'javascript']),
        imgUrl: 'ladeeda copy 3.jpg',
        desc: "['react', 'javascript']",
        date: new Date('2016-06-02'),
    },
    {
        title: 'hiiiiii',
        tags: new Set(['react', 'html', 'javascript']),
        imgUrl: 'ladeeda copy 4.jpg',
        desc: "['react', 'html', 'javascript']",
        date: new Date('2016-06-02'),
    },    {
        title: 'hiiiiiii',
        tags: new Set(['react', 'html', 'javascript']),
        imgUrl: 'ladeeda copy 5.jpg',
        desc: "['react', 'html', 'javascript']",
        date: new Date('2016-06-02'),
    },
    {
        title: 'hiiiiiiiii',
        tags: new Set(['react', 'html', 'javascript']),
        imgUrl: 'ladeeda copy 6.jpg',
        desc: "['react', 'html', 'javascript']",
        date: new Date('2016-06-02'),
    }
];

export default function Developer(): ReactElement {
    return(
        <Page title='Developer'>
            <Gallery items={ test } tags={ new Set(['react', 'html', 'javascript']) } />
        </Page>
    );
};