export default class Popup {
    constructor({popupSelector}) {
        this.popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this.popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this.popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") { 
          this.close();
        }
      };

    _closeOverlay = (evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
            this.close();
        }
      }

    setEventListeners() {
       //this.popupSelector.addEventListener("click", this._closeOverlay);
       this.popupSelector.addEventListener("click", (evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
            this.close();
        }
       })
    }
};