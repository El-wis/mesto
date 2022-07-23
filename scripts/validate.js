const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}

const {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible", 
};

const showInputError = (formSelector, inputSelector, errorMessage) => {
  const inputName = inputSelector.getAttribute('name');
  const errorElement = formSelector.querySelector(`.${inputName}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formSelector, inputSelector) => {
  const inputName = inputSelector.getAttribute('name');
  const errorElement = formSelector.querySelector(`.${inputName}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};

 
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


const setEventListeners = () => {
  const form = document.querySelector(formSelector);
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(form, inputElement);
      console.log(form);
    });
  });
  };


const enableValidation = (formSelector) => {
  const form = document.querySelector(formSelector);
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
const inputs = Array.from(form.querySelectorAll(inputSelector));

inputs.forEach((input) => {
  setEventListeners(input);
}); 
   
  });

};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) { 
    buttonElement.classList.add('button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('button_inactive');
  }
  };

enableValidation(formSelector, inputSelector);
