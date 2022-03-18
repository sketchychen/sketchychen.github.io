import { ReactElement } from 'react';


export interface PageProps {
    title: string,
    children: ReactElement | ReactElement[],
    bannerImageUrl?: string,
};

export default function Page(props: PageProps): ReactElement {
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