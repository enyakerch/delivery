import React, { Component } from 'react';

import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <header className='header_header header_smallHeader'>
                <div className='header_headerFirstRow'>
                    <div className={'header_logoContainer'}><img
                        src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586887117/pl_demo_vitrina_usp5vqldi/uruoktnzbonblyruhxhc.png"
                        className={'header_logo'} alt="Витрина | Restik"></img></div>
                    <div className={'header_infoBlock'}>
                        <a className={'header_phone'} href="tel:+78126282510">+7 812 628 25 10</a>
                        <div title="Информация о доставке" className={'header_titleDiv'}>
                            <svg viewBox="0 0 24 24" width="48" height="48" className="header_info">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            </svg>
                        </div>
                        <a href="/demo/order" className={'header_cartLink'}>
                            <div className={'header_cartWrapper'} title="Корзина">
                                <svg viewBox="0 0 24 24" width="48" height="48" className={'header_cart'}>
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <path
                                        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"></path>
                                </svg>
                                <p className={'header_cartCounter'}>0</p></div>
                        </a></div>
                </div>
            </header>
        );
    }
}
