import {Component} from 'react';

import './Banner.scss'

export class Banner extends Component {
    render() {
        return (
            <div className={'banners_bannerWrapper banners_topBanner'}>
                <div className={'banners_bannerImageWrapper'}>
                    <div className={'banners_bannerPlaceholder'} style={{ paddingTop:'min(56.25%, 400px)' }}></div>
                    <video className={'banners_bannerImage'} poster='https://res.cloudinary.com/restik/video/upload/f_auto,q_auto,so_0p/v1/pl_demo_vitrina_usp5vqldi/d1eyt4kp9nrjkqtupoya.jpg' autoPlay={true} playsInline={true} loop={true}>
                        <source
                            src="https://res.cloudinary.com/restik/video/upload/f_auto,q_auto,so_0p/v1/pl_demo_vitrina_usp5vqldi/d1eyt4kp9nrjkqtupoya.webm"
                            type="video/webm"/>
                        <source
                            src="https://res.cloudinary.com/restik/video/upload/f_auto,q_auto,so_0p/v1/pl_demo_vitrina_usp5vqldi/d1eyt4kp9nrjkqtupoya.mp4"
                            type="video/mp4"/>
                        <source
                            src="https://res.cloudinary.com/restik/video/upload/f_auto,q_auto,so_0p/v1/pl_demo_vitrina_usp5vqldi/d1eyt4kp9nrjkqtupoya.ogv"
                            type="video/ogg"/>
                    </video>
                </div>
            </div>
        );
    }
}
