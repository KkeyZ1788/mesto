
// Показать сообщение об ошибке

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;

  };

// Убрать сообщение об ошибке 

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
  };

//   сделать кнопку неактивной 

function setSubmitButtonInactive( ){
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('input__btn_disabled');   
};

// Проверка инпутов 
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  
  // Добавление проверки всем полям
  const chekInputs = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);

      });
    });
  };

 

 const hasInvalidInput =(inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
   }

   const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.setAttribute('disabled', true);
} else {
  buttonElement.classList.remove('popup__button_disabled');
  buttonElement.removeAttribute('disabled');
};
};




  //  добавление проверки формам
  const enableValidation = () =>{
    const forms = Array.from(document.querySelectorAll('.form'));
    forms.forEach((form) => {
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });


  
      chekInputs(form);


    });
  };    

  



  enableValidation ( {
    formSelector: '.form',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});