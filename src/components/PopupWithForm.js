import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super({popupSelector});
        this.handleSubmitForm = handleSubmitForm;
        this.formElement = this.popupSelector.querySelector(".popup__form");
        this._inputList = this.popupSelector.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
          return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleSubmitForm(this._getInputValues())
            this.close();
        });
    }

    close() {
        super.close();
        this.formElement.reset();
    }
}