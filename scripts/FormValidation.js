class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _showInputError = (inputElement, errorMessage) => {
        const { inputErrorClass, errorClass } = this._settings
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
      }
      
    _hideInputError = (inputElement) => {
        const { inputErrorClass, errorClass } = this._settings
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorClass);
        errorElement.textContent = "";
      }

    _handleInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } 
        else {
          this._hideInputError(inputElement);
        }
      }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

      _toggleButtonState = () => {
        const { submitButtonSelector } = this._settings;
        this._buttonElement = this._formElement.querySelector(submitButtonSelector);
        const { inactiveButtonClass } = this._settings

        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(inactiveButtonClass);
        } 
        else {
          this._buttonElement.classList.remove(inactiveButtonClass);
        }
    }

    _setEventListeners = () => {
        const { inputSelector } = this._settings;
        this._inputList = Array.from(this._formElement.querySelectorAll(inputSelector));

        this._toggleButtonState();
      
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
            this._handleInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
        });

        this._setEventListeners();
    }

    resetValidation = () => { //public so the user can decide when to reset his form validation
      const inputArray = Array.from(this._inputList);
      this._toggleButtonState();
      this._inputList.forEach((input) => {
        this._hideInputError(input);
      })
    } 
    
}

export default FormValidator;