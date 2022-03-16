import { ReactElement } from 'react';

import '../../styles/page.scss';


export interface PagePropsType {
    title: string,
    children: ReactElement | ReactElement[],
    bannerImageUrl?: string,
};

export default function Page(props: PagePropsType): ReactElement {
    const bannerStyle = {
        backgroundImage: `url(${props.bannerImageUrl})`,
    };

    return(
        <div className="page-container">
            <div className="page-banner" style={ bannerStyle }>
                { props.title }
            </div>
            <div className="page-body">
                { props.children }
            </div>
        </div>
    );
};