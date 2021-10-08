//============================= Popup =======================
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup__title');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupSubmit = document.querySelector('.popup__submit');
const popupClose = document.querySelector('.popup__close');
const cardsButtonAll = document.querySelectorAll('.cards__button');
const submittedInputAll = document.querySelectorAll('.popup__input');
const popupWrapper = document.querySelector('.popup__wrapper');

cardsButtonAll.forEach(element => {
  element.addEventListener('click', (event) => { //open form
    popupTitle.textContent = event.target.textContent;
    popup.classList.add('popup_is_opened');
  });
});

popupSubmit.addEventListener('click', ()=> {  //submit request
  submittedInputAll.forEach ((element) => {
    element.remove();
  })
  popupSubtitle.textContent = "Your request has been received by the service and will be reviewed within seven calendar days. A message about the decision on your request will be sent to your email.   You will also receive supporting certificates that have the legal force of an ordinary paper document. Take care of yourself.";
  popupSubmit.remove();
  popupClose.textContent = "Return to home page";
  popupWrapper.style.display = "flex";
  popupWrapper.style.flexDirection = "column";
  popupWrapper.style.gap = "50px";
});

popupClose.addEventListener('click', ()=> { //close form
  location.reload();
  popup.classList.remove('popup_is_opened');
})

//============================= Search =======================
import { filterCards } from "./scripts/Search.js"

const searchInput = document.querySelector(".header__search-input")

searchInput.addEventListener('keyup', (e) => { 
  e.preventDefault();
  filterCards(searchInput.value, '.cards__item', '.cards__title');
})