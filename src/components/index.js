
import '../pages/index.css';

import { createCard, openAddForm, closeAddForm, addCardFromHandler, formAddCard, addCardPopUp} from './cards.js'
import{initialCards} from './initial-cards'
import {
    popupElement,
    imagePopup,
    openProfilePopup, 
    closeProfilePopup, 
    closePopupByClickOnOverlay, 
    formEditProfileSubmitHandler, 
    closeImagePopup,} from './modals'
import {enableValidation} from './validate'

// ПЕРЕМЕННЫЕ

const popupOpenButton = document.querySelector('.profile__edit-button')

const popupCloseButton = popupElement.querySelector('.popup__close')
const formEditProfile = popupElement.querySelector('.popup__content')
const cardContainer = document.querySelector('.elements') // переменная с секцией, куда будут добавляться карточки
const imagePopupCloseButton = imagePopup.querySelector('.popup__close')// крестик в попапе с картинкой
const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик

const addCardButton = formAddCard.querySelector('.add-card');// кнопка создать
const formAddCardCloseButton = formAddCard.querySelector('.popup__close'); // крестик




  // Добавление изначальных карточек
  initialCards.forEach(card => cardContainer.prepend(createCard(card))); 

  

enableValidation ( {
    formSelector: '.form',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible'
});




addNewCardButton.addEventListener('click', openAddForm);
formAddCardCloseButton.addEventListener('click', closeAddForm);
addCardPopUp.addEventListener('mousedown', closePopupByClickOnOverlay);
formAddCard.addEventListener('submit', addCardFromHandler);
imagePopupCloseButton.addEventListener('click', closeImagePopup);
imagePopup.addEventListener('mousedown', closePopupByClickOnOverlay);
popupOpenButton.addEventListener('click', openProfilePopup)
popupCloseButton.addEventListener('click', closeProfilePopup)
popupElement.addEventListener('mousedown', closePopupByClickOnOverlay)
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler)
popupCloseButton.addEventListener('click', closeProfilePopup)