const popupOpenButton = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup_edit-profile')
const popupCloseButton = popupElement.querySelector('.popup__close')
const  nameInput = popupElement.querySelector('.popup__form_type_name')
const  jobInput = popupElement.querySelector('.popup__form_type_job')
const  profileName = document.querySelector ('.profile__name')
const  profileDescription = document.querySelector ('.profile__description')
const formEditProfile = popupElement.querySelector('.popup__content')

const popupToggle = function(popup){
  popup.classList.toggle('popup_is-opened')
}

// функция открытия попап
const openPopup = function (popup){
popup.classList.add('popup_is-opened')
}

// функция закрытия попап
const closePopup = function(popup){
  popup.classList.remove('popup_is-opened')
}



// функция открытия попап редактирования профиля
const openProfilePopup = function(){
  openPopup(popupElement);
    nameInput.value = profileName.textContent
    jobInput.value = profileDescription.textContent
}

const closeProfilePopup = function() {
  closePopup(popupElement);
}




// ф-я закрытия попап кликом на фон
const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
      return
    }
  
    closePopup(popupElement)
  }

// ф-я редактирования профиля, ч/з формы в
const formEditProfileSubmitHandler = function(evt){
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup(popupElement)
  }

popupOpenButton.addEventListener('click', openProfilePopup)
popupCloseButton.addEventListener('click', closeProfilePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler)


// ПР 6





// Переменные
const cardContainer = document.querySelector('.elements') // переменная с секцией, куда будут добавляться карточки
const postTemlate = document.querySelector('#post-template').content; 
const imagePopup = document.querySelector('.popup_type_image') // Попап с картинкой
const imagePopupElement = imagePopup.querySelector('.popup__image') // картинка в попапе
const imageName = imagePopup.querySelector('.popup__image-name') // подпись картинки в попапе
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-image')// крестик в попапе с картинкой

const addCardPopUp = document.querySelector('.popup_add-card') // попап добавления карточки
const formAddCard = addCardPopUp.querySelector('.add-form'); // переменная формы добавления карточки
const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик
const addCardButton = formAddCard.querySelector('.add-card');// кнопка создать
const formAddCardCloseButton = formAddCard.querySelector('.popup__close'); // крестик
const cardName = formAddCard.querySelector('.popup__form_type_add-name');
const cardLink = formAddCard.querySelector('.popup__form_type_add-link');

//удаление карточки

const removeCardHandler = (event) => {
  event.target.closest('.elements__item').remove(); 
};

// лайк карточки
const likeCardHandler = (event) => {
 event.target.classList.toggle('button_is-active'); 
};

// ОТКРЫТИЕ ПОПАПА С КАРТИНКОЙ
const openImagePopup = function (event) { 
  openPopup(imagePopup);
  const item = event.target;
  imagePopupElement.src = item.src;
  imageName.textContent = item.closest('.elements__item').querySelector('.elements__item-name').textContent;
  imagePopupElement.alt = imageName.textContent;

}

// Закрытие попапа с картинкой
const  closeImagePopup = function (){
  closePopup (imagePopup)
}



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




// Добавление изначальных карточек
initialCards.forEach(card => cardContainer.prepend(createCard(card)));



// Открытие формы для добавления карточки
const openAddForm = function(){
  addCardPopUp.classList.add('popup_is-opened');
};

// Закрытие формы для добавления карточки
const closeAddForm = function(){
  addCardPopUp.classList.remove('popup_is-opened');
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
}




// Слушатели
addNewCardButton.addEventListener('click', openAddForm);
formAddCardCloseButton.addEventListener('click', closeAddForm);
formAddCard.addEventListener('submit', addCardFromHandler);
imagePopupCloseButton.addEventListener('click', closeImagePopup)




