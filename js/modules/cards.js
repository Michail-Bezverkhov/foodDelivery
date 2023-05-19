import axios from 'axios';

function cards() {
    class MenuCard {
        constructor(img, title, descr, price, parentSelector, ...cssClasses) {
            this.img = img;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.cssClasses = cssClasses;
            this.parent = document.querySelector(parentSelector);
            this.createCard();
        }

        createCard() {
            const newCard = document.createElement('div');
            if (this.cssClasses.length === 0) {
                this.newCard = 'menu__item';
                newCard.classList.add(this.newCard);
            } else {
                this.cssClasses.forEach((className) => newCard.classList.add(className));
            }

            newCard.innerHTML = `
                <img src="${this.img}" alt="menu picture">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.appendChild(newCard);
        }
    }

    axios.get('http://localhost:3000/menu')
        .then((data) => {
            data.data.forEach(({
                img, title, descr, price,
            }) => {
                new MenuCard(img, title, descr, price, '.menu .container');
            });
        });
}

export default cards;