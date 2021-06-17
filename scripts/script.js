const popupOpenButton = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButton = popupElement.querySelector('.popup__close')
let nameInput = popupElement.querySelector('.popup__name')
let jobInput = popupElement.querySelector('.popup__job')
let profileName = document.querySelector ('.profile__name')
let profileDescription = document.querySelector ('.profile__description')
const formElement = popupElement.querySelector('.popup__content')

const openPopup = function(){
    popupElement.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent
    jobInput.value = profileDescription.textContent
}



const closePopup = function(){
    popupElement.classList.remove('popup_is-opened')
}

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
      return
    }
  
    closePopup()
  }

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



console.log(formElement)