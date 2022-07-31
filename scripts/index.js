const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelector(".popup__close-icon");
const closeButtonCard = document.querySelector(
  ".popup_type_cards .popup__close-icon"
);
const closeButtonImage = document.querySelector(
  ".popup_type_image .popup__close-icon"
);

const popupProfile = document.querySelector(".popup_type_profile");
const popupImage = document.querySelector(".popup_type_image");
const popupCards = document.querySelector(".popup_type_cards");
const popups = document.querySelectorAll(".popup");
const formProfile = document.querySelector(".popup__form_type_profile");
const formCard = document.querySelector(".popup_type_cards .popup__form");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const titleInput = document.querySelector(".popup__input_type_title");
const urlInput = document.querySelector(".popup__input_type_url");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const elements = document.querySelector(".elements");

function openPopup(el) {
  el.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

function openProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
};

function openPopupCards() {
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
}

function createCard(initialCard) {
  const container = document.querySelector("#container").content;
  const card = container.querySelector(".elements__item").cloneNode(true);

  card.querySelector(".elements__title").textContent = initialCard.name;
  card.querySelector(".elements__image").src = initialCard.link;
  card.querySelector(".elements__image").alt = initialCard.name;

  const heartButton = card.querySelector(".elements__button-heart");
  heartButton.addEventListener("click", likeCard);

  const removeButton = card.querySelector(".elements__button-trash");
  removeButton.addEventListener("click", removeCard);

  const image = card.querySelector(".elements__image");
  image.addEventListener("click", openImage);

  return card;
}

function openImage(event) {
  const image = document.querySelector(".popup__image");
  const imageCaption = document.querySelector(".popup__caption");

  image.src = event.target.src;
  imageCaption.textContent = event.target.alt;

  openPopup(popupImage);
}

function removeCard(event) {
  event.target.closest(".elements__item").remove();
}

function likeCard(event) {
  event.target.classList.toggle("elements__button-heart_active");
}

initialCards.forEach(function (element) {
  elements.append(createCard(element));
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: titleInput.value,
    link: urlInput.value,
  };

  elements.prepend(createCard(newCard));
  evt.target.reset();
  closePopupCard();
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if(evt.target === evt.currentTarget || evt.target.classList.contains(".popup__close-icon")) {
      closePopup(popup);
    }
  })
});

formProfile.addEventListener("submit", handleProfileSubmit);
editButton.addEventListener("click", openProfileForm);

closeButton.addEventListener("click", closePopupProfile);
closeButtonCard.addEventListener("click", closePopupCard);
closeButtonImage.addEventListener("click", closePopupImage);

addButton.addEventListener("click", openPopupCards);
formCard.addEventListener("submit", handleAddCardSubmit);
