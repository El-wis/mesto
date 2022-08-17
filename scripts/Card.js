export class Card {
    constructor(data, cardTemplate, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        const card = document.querySelector(this._cardTemplate).content.querySelector(".elements__item").cloneNode(true);
        return card;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._imageCard = this._element.querySelector(".elements__image");
        this._element.querySelector(".elements__title").textContent = this._name;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;
        this._setEventListener();
        return this._element;
    };

    _setEventListener() {
        this._likeButton = this._element.querySelector(".elements__button-heart");
        
        this._likeButton.addEventListener("click", () => {
            this._likeCard();
          });

          this._element.querySelector(".elements__button-trash").addEventListener("click", () => {
            this._removeCard();
          });

          this._imageCard.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
          });
    };

    _likeCard() {
        this._likeButton.classList.toggle("elements__button-heart_active");
    };

    _removeCard() {
        this._element.remove();
    };

}