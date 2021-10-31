import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';

export class Menu extends Component {
    render() {
        return (
            <div className={'layout_filtersBlockWrapper'}>
                <div className={'layout_filtersBlock'}>
                    <div className={'filter-by-category_filterByCategory'}>
                        <Link to={{pathname: '/this-view-path', hash: '#faq-1'}}>Question 1</Link>
                        <a className={'filter-by-category_item filter-by-category_selectedItem'} href="#burgery">Бургеры</a>
                        <a className={'filter-by-category_item'} href="#picca">Пицца</a>
                        <a className={'filter-by-category_item'} href="#zavtraki">Завтраки</a>
                        <a className={'filter-by-category_item'} href="#deserty">Десерты</a>
                    </div>
                </div>
            </div>
        );
    }
}
