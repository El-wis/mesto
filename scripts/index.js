import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";

const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonProfileAdd = document.querySelector(".profile__add-button");

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

export function openPopup(el) {
  el.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

export function handleCardClick(name, link) {
  image.src = link;
  imageCaption.textContent = name;
  image.alt = name;
  openPopup(popupImage);
}


export function openProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validateProfile.resetValidation();
  openPopup(popupProfile);
};

export function openPopupCards() {
  titleInput.value = null;
  urlInput.value = null;
  validateAddCard.resetValidation();
  openPopup(popupCards);
};

function closePopup(el) {
  el.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

function closePopupProfile() {
  closePopup(popupProfile);
};

function closePopupCard() {
  closePopup(popupCards);
};

function closePopupImage() {
  closePopup(popupImage);
};

function closeOpenedPopup() {
  const openedPopup = document.querySelector(".popup_opened");
  closePopup(openedPopup);
};

function closePopupEsc(evt) {
  if(evt.key === "Escape") {
    closeOpenedPopup();
  }
};

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopupProfile();
};

function createCard(initialCard) {
  const newCard = new Card(initialCard, '#container', handleCardClick).generateCard();
  return newCard;
};

initialCards.forEach(function (element) {
  cardsContainer.append(createCard(element));
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: urlInput.value,
  };

  cardsContainer.prepend(createCard(newCard));
  evt.target.reset();
  closePopupCard();
};

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if(evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
      closePopup(popup);
    }
  })
});

formProfile.addEventListener("submit", handleProfileSubmit);
buttonProfileEdit.addEventListener("click", openProfileForm);
buttonProfileAdd.addEventListener("click", openPopupCards);
formCard.addEventListener("submit", handleAddCardSubmit);
