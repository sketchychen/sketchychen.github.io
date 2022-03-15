import { ReactElement } from 'react';

import '../../styles/page.scss';


export interface PagePropsType {
    title: string,
    children: ReactElement,
};

export default function Page(props: PagePropsType): ReactElement {
    return(
        <div className="page-container">
            <div className="page-banner">
                { props.title }
            </div>
            <div className="page-body">
                { props.children }
            </div>
        </div>
    );
};