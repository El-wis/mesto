import '../pages/index.css';

import { initialCards } from "../utils.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import Popup from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonAddCard = document.querySelector(".profile__add-button");

export const popupProfile = document.querySelector(".popup_type_profile");
export const popupImage = document.querySelector(".popup_type_image");
export const popupCards = document.querySelector(".popup_type_cards");
export const popups = document.querySelectorAll(".popup");
export const formProfile = document.querySelector(".popup__form_type_profile");
export const formCard = document.querySelector(".popup_type_cards .popup__form");

export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");
export const titleInput = document.querySelector(".popup__input_type_title");
export const urlInput = document.querySelector(".popup__input_type_url");
export const image = document.querySelector(".popup__image");
export const imageCaption = document.querySelector(".popup__caption");

export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const cardsContainer = document.querySelector(".elements");

const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}

const validateProfile = new FormValidator(obj, formProfile);
validateProfile.enableValidation();

const validateAddCard = new FormValidator(obj, popupCards);
validateAddCard.enableValidation();

function createCard(item) {
  const newCard = new Card(item, '#container', handleCardClick).generateCard();
  return newCard;
};

const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {
      cardList.setItem(createCard(item));
    }
}, 
  '.elements');  
   
cardList.renderItems();


function handleProfileSubmit(evt) {
  //evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //popupEditProfile.close();
};

/*Открытие попапа с картинкой*/ 
const openImage = new PopupWithImage({popupSelector: '.popup_type_image'}, image, imageCaption);

export function handleCardClick(name, link) {
  openImage.open(name, link);
}

openImage.setEventListeners();


/*Добавлние  картинки*/
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_cards', 
  handleSubmitForm: (data) => {
    cardList.setItem(createCard({name: data['input-name'], link: data['input-url']}))
  }
  });

function openAddCard() {
  popupAddCard.open();
  titleInput.value = "";
  urlInput.value = "";
  validateAddCard.resetValidation();
}

/*Информация в профиле*/
const userData = new UserInfo({profileName: '.profile__title' , profileJob: '.profile__subtitle'});
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile', 
  handleSubmitForm: (item) => {
    userData.setUserInfo(item);
    handleProfileSubmit(item);
  }
});

popupEditProfile.setEventListeners();

buttonProfileEdit.addEventListener("click", () => {
  popupEditProfile.open();
  const userInfo = userData.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.info;
}
)

//formProfile.addEventListener("submit", handleProfileSubmit);


buttonAddCard.addEventListener("click", () => openAddCard());
popupAddCard.setEventListeners();