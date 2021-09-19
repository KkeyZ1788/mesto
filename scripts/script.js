const popupOpenButton = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButton = popupElement.querySelector('.popup__close')
let nameInput = popupElement.querySelector('.popup__form_type_name')
let jobInput = popupElement.querySelector('.popup__form_type_job')
let profileName = document.querySelector ('.profile__name')
let profileDescription = document.querySelector ('.profile__description')
const formElement = popupElement.querySelector('.popup__content')

const popupToggle = function(popup){
  popup.classList.toggle('popup_is-opened')
}

// функция открытия попап
const openPopup = function(){
    popupToggle(popupElement);
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


// ПР 6
// Массив первых 6 карточек
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



// Переменные
const cardContainer = document.querySelector('.elements') // переменная с секцией, куда будут добавляться карточки
const postTemlate = document.querySelector('#post-template').content; 
const imagePopup = document.querySelector('.popup_type_image') // Попап с картинкой
const imagePopupElement = imagePopup.querySelector('.popup__image') // картинка в попапе
const imageName = imagePopup.querySelector('.popup__image-name') // подпись картинки в попапе
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-image')// крестик в попапе с картинкой

const addCardPopUp = document.querySelector('.addNewCard') // попап добавления карточки
const addForm = addCardPopUp.querySelector('.add-form'); // переменная формы добавления карточки
const addNewCardButton = document.querySelector('.profile__add-button') // кнопка плюсик
const addCardButton = addForm.querySelector('.add-card');// кнопка создать
const addFormCloseButton = addForm.querySelector('.popup__close'); // крестик
const cardName = addForm.querySelector('.popup__form_type_add-name');
const cardLink = addForm.querySelector('.popup__form_type_add-link');

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
  popupToggle(imagePopup);
  const item = event.target;
  imagePopupElement.src = item.src;
  imageName.textContent = item.closest('.elements__item').querySelector('.elements__item-name').textContent
}

// Закрытие попапа с картинкой
const  closeImagePopup = function (){
  popupToggle (imagePopup)
}

// Функция создания карточки
const  createCard = (card) => {
  const postElement = postTemlate.querySelector('.elements__item').cloneNode(true);
  postElement.querySelector('.elements__img').src = card.link;
  postElement.querySelector('.elements__img').addEventListener('click', openImagePopup);
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
addFormCloseButton.addEventListener('click', closeAddForm);
addForm.addEventListener('submit', addCardFromHandler);
imagePopupCloseButton.addEventListener('click', closeImagePopup)




