let editButton = document.querySelector(".profile__edit-button");
let addButton = document.querySelector(".profile__add-button");
let closeButton = document.querySelector(".popup__close-icon");
let closeButtonCard = document.querySelector(".popup_type_cards .popup__close-icon");
let closeButtonImage = document.querySelector(".popup_type_image .popup__close-icon")


let popup = document.querySelector(".popup");
let popupProfile = document.querySelector(".popup_type_profile");
let popupImage = document.querySelector(".popup_type_image");
let popupCards = document.querySelector(".popup_type_cards");
let formElement = document.querySelector(".popup__form");
let formCard = document.querySelector(".popup_type_cards .popup__form");

let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let titleInput = document.querySelector(".popup__input_type_title");
let urlInput = document.querySelector(".popup__input_type_url");

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

let elements = document.querySelector('.elements');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


/* */
function openPopup(el) {
  el.classList.add("popup_opened");
}

function openForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
};

function openPopupCards() {
  openPopup(popupCards);
};


/* */
function closePopup(el) {
  el.classList.remove("popup_opened");
}

function closePopupProfile() {
  closePopup(popupProfile);
};

function closePopupCard() {
  closePopup(popupCards);
};

function closePopupImage() {
  closePopup(popupImage);
}


/* */
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  openForm();
  closePopupProfile();
};


function addCards(element) {

  const container = document.querySelector('#container').content;
  const card = container.querySelector('.elements__item').cloneNode(true);

  card.querySelector('.elements__title').textContent = element.name;
  card.querySelector('.elements__image').src = element.link;
  card.querySelector('.elements__image').alt = element.name;

  const heartButton = card.querySelector(".elements__button-heart");
  heartButton.addEventListener("click", likeCard);

  const removeButton = card.querySelector('.elements__button-trash');
  removeButton.addEventListener('click', removeCard);

  const image = card.querySelector('.elements__image');
  image.addEventListener('click', openImage);

  return card;
};

function openImage(event) {
  const image = document.querySelector('.popup__image');
  const imageCaption = document.querySelector('.popup__caption'); 

  image.src = event.target.src;
  imageCaption.textContent = event.target.alt;

  openPopup(popupImage);
};



function removeCard(event) {
  event.target.closest(".elements__item").remove();
  };
  
  function likeCard(event) {
    event.target.classList.toggle("elements__button-heart_active");
  }
  

initialCards.forEach(function(element) {
  elements.append(addCards(element));
});

function formSubmitCard(evt) {
  evt.preventDefault();
  
  const container = document.querySelector('#container').content;
  const card = container.querySelector('.elements__item').cloneNode(true);

  card.querySelector('.elements__title').textContent = titleInput.value;
  card.querySelector('.elements__image').src = urlInput.value;

  const newCard =  {
      name: titleInput.value,
      link: urlInput.value
    }

  elements.prepend(addCards(newCard));
 
  closePopupCard();
};


formElement.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", openForm);

closeButton.addEventListener("click", closePopupProfile);
closeButtonCard.addEventListener("click", closePopupCard);
closeButtonImage.addEventListener("click", closePopupImage);

addButton.addEventListener("click", openPopupCards);
formCard.addEventListener("submit", formSubmitCard);
