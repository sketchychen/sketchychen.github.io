import { ReactElement } from 'react';


export interface PagePropsType {
    title: string,
    children: ReactElement,
};

export default function Page(props: PagePropsType): ReactElement {
    return(
        <div className="page">
            <header className="page-header">
                { props.title }
            </header>
            { props.children }
        </div>
    );
};