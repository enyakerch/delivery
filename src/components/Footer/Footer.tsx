import { Component } from 'react';
import './Footer.scss'

export class Footer extends Component {
    render() {
        return (
            <footer className={'footer_footer'}>
                <a className={'footer_phone'} href="tel:+78126282510">+7 812 628 25 10</a>
                <p className={'footer_madeBy'}>Сделано с помощью <a href="https://restik.com/delivery/?utm_source=restik&amp;utm_medium=delivery&amp;utm_campaign=demo" target="_blank" className={'footer_link'}>Restik</a>
                </p>
            </footer>
        );
    }
}
