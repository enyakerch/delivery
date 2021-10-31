import { Component } from 'react';
import './Container.scss'

export class Container extends Component {
    render() {
        return (
            <main className="layout_layoutContainer">
                <div className="products_productsBlock">
                    <a className="products_categoryAnchor products_first" id="burgery">dgfd</a>
                    <h2 className="products_productsBlockTitle">Бургеры</h2>
                    <div className="products_productsBlockContent">
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="ORIGINAL Бургер">ORIGINAL
                                    Бургер</p>
                                    <p className="position_description"
                                       title="C котлетой из говядины, сыром чеддер и соусом BBQ">C котлетой из говядины,
                                        сыром чеддер и соусом BBQ</p></div>
                                <div className="position_priceBlock"><p className="position_price">380 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734490/pl_restik_njk7n7e40/b4m885bdjeieouv25u8g.jpg"
                                className="position_photo" alt="ORIGINAL Бургер"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Двойной чизбургер">Двойной
                                    чизбургер</p>
                                    <p className="position_description"
                                       title="Сочная говяжья котлета, бекон, сыр чеддер, маринованные огурцы, томаты, карамелизированный лук, лук фри, картофель фри, кетчуп.">
                                        Сочная говяжья котлета, бекон, сыр чеддер, маринованные огурцы, томаты,
                                        карамелизированный лук, лук фри, картофель фри, кетчуп.</p></div>
                                <div className="position_priceBlock"><p className="position_price">495 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734813/pl_restik_njk7n7e40/pa0151d3nqx9hghsej5w.jpg"
                                className="position_photo" alt="Двойной чизбургер"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Роял бургер">Роял
                                    бургер</p>
                                    <p className="position_description"
                                       title="Сочный бургер с мясной котлетой, беконом и сыром.">Сочный бургер с мясной
                                        котлетой, беконом и сыром.</p></div>
                                <div className="position_priceBlock"><p className="position_price">450 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735554/pl_restik_njk7n7e40/bd729u7uibgr8vrq0b42.jpg"
                                className="position_photo" alt="Роял бургер"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Чикенбургер">
                                    Чикенбургер</p>
                                    <p className="position_description"
                                       title="Куриная котлета в панировке, обжаренный бекон, сыр чеддер, маринованные огурцы, томаты, салат айсберг, картофель фри, соус карри, кетчуп.">
                                        Куриная котлета в панировке, обжаренный бекон, сыр чеддер, маринованные огурцы,
                                        томаты, салат айсберг, картофель фри, соус карри, кетчуп.</p></div>
                                <div className="position_priceBlock"><p className="position_price">390 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734987/pl_restik_njk7n7e40/zc7bit5guudzkxouihjr.jpg"
                                className="position_photo" alt="Чикенбургер"></img></div>
                        </div>
                    </div>
                </div>
                <div className="products_productsBlock"><a className="products_categoryAnchor" id="picca"></a>
                    <h2 className="products_productsBlockTitle">Пицца</h2>
                    <div className="products_productsBlockContent">
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Ветчина и грибы">Ветчина и
                                    грибы</p>
                                    <p className="position_description"
                                       title="Ветчина, томатный соус, шампиньоны, моцарелла.">Ветчина, томатный соус,
                                        шампиньоны, моцарелла.</p></div>
                                <div className="position_priceBlock"><p className="position_price">345 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735163/pl_restik_njk7n7e40/hsj0runn3nuf0iblcy47.jpg"
                                className="position_photo" alt="Ветчина и грибы"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Гавайская">Гавайская</p>
                                    <p className="position_description"
                                       title="Цыпленок, томатный соус, моцарелла, ананасы.">Цыпленок, томатный соус,
                                        моцарелла, ананасы.</p></div>
                                <div className="position_priceBlock"><p className="position_price">395 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735119/pl_restik_njk7n7e40/m13wt3nenk6q2icisauy.jpg"
                                className="position_photo" alt="Гавайская"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Мясная">Мясная</p>
                                    <p className="position_description" title="Сыр, нежнейшее мясо и оливки.">Сыр,
                                        нежнейшее мясо и оливки.</p></div>
                                <div className="position_priceBlock"><p className="position_price">450 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586736082/pl_restik_njk7n7e40/g8p68mwst8tgusfgzymp.jpg"
                                className="position_photo" alt="Мясная"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Пепперони">Пепперони</p>
                                    <p className="position_description"
                                       title="Пикантная пепперони, томатный соус, моцарелла.">Пикантная пепперони, томатный
                                        соус, моцарелла.</p></div>
                                <div className="position_priceBlock"><p className="position_price">400 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735398/pl_restik_njk7n7e40/uz64u7gcdn8pmn8wcf5h.jpg"
                                className="position_photo" alt="Пепперони"></img></div>
                        </div>
                    </div>
                </div>
                <div className="products_productsBlock"><a className="products_categoryAnchor"
                                                           id="zavtraki"></a>
                    <h2 className="products_productsBlockTitle">Завтраки</h2>
                    <div className="products_productsBlockContent">
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Бейгл с лососем">Бейгл с
                                    лососем</p>
                                    <p className="position_description"
                                       title="Традиционно закрученная выпечка, начинённая свежими овощами и лососем слабой соли.">
                                        Традиционно закрученная выпечка, начинённая свежими овощами и лососем слабой
                                        соли.</p></div>
                                <div className="position_priceBlock"><p className="position_price">590 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734165/pl_restik_njk7n7e40/ok3ambvpfr5zf1vo7kas.jpg"
                                className="position_photo" alt="Бейгл с лососем"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Сладкие панкейки">Сладкие
                                    панкейки</p>
                                    <p className="position_description" title="Нежные панкейки с голубикой и шоколадом.">
                                        Нежные панкейки с голубикой и шоколадом.</p></div>
                                <div className="position_priceBlock"><p className="position_price">190.55
                                    ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734228/pl_restik_njk7n7e40/o0azumgv4qakp63lmc0p.jpg"
                                className="position_photo" alt="Сладкие панкейки"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Сладкий сэндвич с бананом и голубикой">
                                    Сладкий сэндвич с бананом и голубикой</p>
                                    <p className="position_description"
                                       title="Мёд, банан, голубика и поджаренные кусочки хлеба">Мёд, банан, голубика и
                                        поджаренные кусочки хлеба</p></div>
                                <div className="position_priceBlock"><p className="position_price">250 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734003/pl_restik_njk7n7e40/pdciee87e1n1ukipion3.jpg"
                                className="position_photo" alt="Сладкий сэндвич с бананом и голубикой"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Сэндвич с яйцом">Сэндвич с
                                    яйцом</p>
                                    <p className="position_description" title="Вкуснейший сэндвич с яйцом и авокадо">
                                        Вкуснейший сэндвич с яйцом и авокадо</p></div>
                                <div className="position_priceBlock"><p className="position_price">350 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586733958/pl_restik_njk7n7e40/qrket1porebvlado3bon.jpg"
                                className="position_photo" alt="Сэндвич с яйцом"></img></div>
                        </div>
                    </div>
                </div>
                <div className="products_productsBlock"><a className="products_categoryAnchor"
                                                           id="deserty"></a>
                    <h2 className="products_productsBlockTitle">Десерты</h2>
                    <div className="products_productsBlockContent">
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Кейк со свежей малиной">
                                    Кейк со свежей малиной</p>
                                    <p className="position_description"
                                       title="Сочный десерт со свежей малиной и шоколадным бисквитом.">Сочный десерт со
                                        свежей малиной и шоколадным бисквитом.</p></div>
                                <div className="position_priceBlock"><p className="position_price">390 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735963/pl_restik_njk7n7e40/g9ddals36fi4jhr5a8a8.jpg"
                                className="position_photo" alt="Кейк со свежей малиной"></img></div>
                        </div>
                        <div className="position_position">
                            <div className="position_descriptionSection position_descriptionSectionWithImage">
                                <div className="position_nameAndDescriptionWrapper"><p className="position_name"
                                                                                       title="Малиновый сорбет">Малиновый
                                    сорбет</p>
                                    <p className="position_description"
                                       title="Ароматный малиновый сорбет с насыщенным ягодным вкусом.">Ароматный малиновый
                                        сорбет с насыщенным ягодным вкусом.</p></div>
                                <div className="position_priceBlock"><p className="position_price">230 ₽</p>
                                    <div className="position_addWrapper">
                                        <button
                                            className="quantity-button_quantityButton quantity-button_quantityButtonPosition">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position_photoContainer"><img
                                src="https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735510/pl_restik_njk7n7e40/n7qoal6skotdiomjewur.jpg"
                                className="position_photo" alt="Малиновый сорбет"></img></div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
