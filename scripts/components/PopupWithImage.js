import Popup from "./Popup.js";

export  class PopupWithImage extends Popup {
    constructor({popupSelector}, image, imageCaption) {
        super({popupSelector});
        this.image = image;
        this.imageCaption = imageCaption;
    }

    open(name, link) {
        super.open();
        this.image.src = link;
        this.image.alt = name;
        this.imageCaption.textContent = name;
        super.open()
    }
}