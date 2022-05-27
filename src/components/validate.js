
// Показать сообщение об ошибке

const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;

  };

// Убрать сообщение об ошибке 

const hideInputError = (formElement, inputElement,config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  };



// Проверка инпутов 
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };

  
  // Добавление проверки всем полям
  const chekInputs = (formElement,config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);

      });
    });
  };

 

 const hasInvalidInput =(inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
   }

   const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
} else {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
};
};

  //  добавление проверки формам
  const enableValidation = (config) =>{
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      chekInputs(form, config);
    });
  };    

 export{enableValidation} 



