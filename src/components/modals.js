

import{openPopup, closePopup} from './utils'

const popupElement = document.querySelector('.popup_edit-profile');
const  nameInput = popupElement.querySelector('.popup__form_type_name');
const  jobInput = popupElement.querySelector('.popup__form_type_job');
const  profileName = document.querySelector ('.profile__name');
const  profileDescription = document.querySelector ('.profile__description');
const imagePopup = document.querySelector('.popup_type_image') // Попап с картинкой
const imageName = imagePopup.querySelector('.popup__image-name');
const imagePopupElement = imagePopup.querySelector('.popup__image');



    // функция открытия попап редактирования профиля
    const openProfilePopup = function(){
      openPopup(popupElement);
        nameInput.value = profileName.textContent
        jobInput.value = profileDescription.textContent
    }
    
    const closeProfilePopup = function() { // функция закрытия попап редактирования профиля
      closePopup(popupElement); 
    }
    
     
    // ф-я закрытия попап кликом редактирования профиля на фон
    const closePopupByClickOnOverlay = function(event) {
      if (event.target.classList.contains('popup')) {
          const openedPopup = document.querySelector('.popup_is-opened');
          closePopup(openedPopup);
      }
    }  
      
    // ф-я редактирования профиля, ч/з формы в
    const formEditProfileSubmitHandler = function(evt){
        evt.preventDefault()
        profileName.textContent = nameInput.value
        profileDescription.textContent = jobInput.value
        closePopup(popupElement)
      }
    
    
    // ОТКРЫТИЕ ПОПАПА С КАРТИНКОЙ
    const openImagePopup = function (event) { 
      openPopup(imagePopup);
      const item = event.target;
      imagePopupElement.src = item.src;
      imageName.textContent = item.alt;
      imagePopupElement.alt = item.alt;
    
    }
    
    // Закрытие попапа с картинкой
    const  closeImagePopup = function (){
      closePopup (imagePopup)
    }
    
    
   export{
    nameInput,
    jobInput,
    profileName,
    profileDescription,
    imagePopupElement,
    imageName,
    popupElement,
    imagePopup,

    openProfilePopup, 
    closeProfilePopup, 
    closePopupByClickOnOverlay, 
    formEditProfileSubmitHandler, 
    openImagePopup, 
    closeImagePopup,
     } 
    
    