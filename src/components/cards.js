

import {openPopup, closePopup} from './utils.js'
import{openImagePopup} from './modals'


const postTemlate = document.querySelector('#post-template').content;
const addCardPopUp = document.querySelector('.popup_add-card') // попап добавления карточки
const formAddCard = addCardPopUp.querySelector('.add-form'); // переменная формы добавления карточки
const cardName = formAddCard.querySelector('.popup__form_type_add-name');
const cardLink = formAddCard.querySelector('.popup__form_type_add-link');
const submitButton = formAddCard.querySelector('.add-card'); 


//удаление карточки

const removeCardHandler = (event) => {
    event.target.closest('.elements__item').remove(); 
  };
  
  // лайк карточки
  const likeCardHandler = (event) => {
   event.target.classList.toggle('button_is-active'); 
  };

// Функция создания карточки
const  createCard = (card) => {
    const postElement = postTemlate.querySelector('.elements__item').cloneNode(true);
    const imageElement = postElement.querySelector('.elements__img')
    imageElement.src = card.link;
    imageElement.alt = card.name;
    imageElement.addEventListener('click', openImagePopup);
    postElement.querySelector('.elements__item-name').textContent = card.name;
    postElement.querySelector('.delete').addEventListener('click', removeCardHandler);
    postElement.querySelector('.elements__like-button').addEventListener('click', likeCardHandler);
  
    
    return postElement
   
  };

// Открытие формы для добавления карточки
const openAddForm = function(){
  openPopup(addCardPopUp);
};

// Закрытие формы для добавления карточки
const closeAddForm = function(){
  closePopup(addCardPopUp);
  cardName.value = "";
  cardLink.value ="";
  
};



// Создание карточки из формы
const addCardFromHandler = function(evt) {
  evt.preventDefault();

  const newCard = createCard({
  name: cardName.value,
  link: cardLink.value,
  });
 
  cardContainer.prepend(newCard);
  closeAddForm()
  
  submitButton.classList.add('popup__button_disabled');
  submitButton.setAttribute('disabled', true);
  
}


export {createCard, openAddForm, closeAddForm, addCardFromHandler, formAddCard, addCardPopUp}
