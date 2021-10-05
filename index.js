//============================= Popup =======================
const popup = document.querySelector('.popup');
const popupSubmit = document.querySelector('.popup__submit');
const popupClose = document.querySelector('.popup__close');
const cardsButtonAll = document.querySelectorAll('.cards__button');

cardsButtonAll.forEach(element => {
  element.addEventListener('click', (event) => { //open form
    let eventTrigger = event.target.classList.value;
    console.log(eventTrigger);
    popup.classList.add('popup_is_opened');
  });
});
 
popupSubmit.addEventListener('click', ()=> {  //submit request
  popup.classList.remove('popup_is_opened');
});

popupClose.addEventListener('click', ()=> { //close form 
  popup.classList.remove('popup_is_opened');
})