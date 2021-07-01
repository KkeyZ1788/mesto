const popupOpenButton = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButton = popupElement.querySelector('.popup__close')
let nameInput = popupElement.querySelector('.popup__form_type_name')
let jobInput = popupElement.querySelector('.popup__form_type_job')
let profileName = document.querySelector ('.profile__name')
let profileDescription = document.querySelector ('.profile__description')
const formElement = popupElement.querySelector('.popup__content')

// функция открытия попап
const openPopup = function(){
    popupElement.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent
    jobInput.value = profileDescription.textContent
}


// функция закрытия попап
const closePopup = function(){
    popupElement.classList.remove('popup_is-opened')
}

// ф-я закрытия попап кликом на фон
const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
      return
    }
  
    closePopup()
  }

// ф-я редактирования профиля, ч/з формы в
const formSubmitHandler = function(evt){
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup()
  }

popupOpenButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)
formElement.addEventListener('submit', formSubmitHandler)



