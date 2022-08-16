import {image, imageCaption, openPopup, popupImage } from "../scripts/index.js"

export class Card {
    constructor(data, cardTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
    }

    _getTemplate() {
        const card = document.querySelector(this._cardTemplate).content.querySelector(".elements__item").cloneNode(true);
        return card;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListener();
        this._imageCard = this._element.querySelector(".elements__image");
        this._element.querySelector(".elements__title").textContent = this._name;
        this._imageCard.src = this._link;
        return this._element;
    };

    _setEventListener() {
        this._element.querySelector(".elements__button-heart").addEventListener("click", () => {
            this._likeCard();
          });

          this._element.querySelector(".elements__button-trash").addEventListener("click", () => {
            this._removeCard();
          });

          this._element.querySelector(".elements__image").addEventListener("click", () => {
            this._openImage();
          });
    };

    _likeCard() {
        this._element.querySelector(".elements__button-heart").classList.toggle("elements__button-heart_active");
    };

    _removeCard() {
        this._element.remove();
    };

    _openImage() {
        image.src = this._link;
        imageCaption.textContent = this._name;
        image.alt = this._name;
        openPopup(popupImage);
    };
}