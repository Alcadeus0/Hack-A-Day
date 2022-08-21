let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("save_card").addEventListener("click", () => { addFlashcard();});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.textContent = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";});

  
flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const name = document.createElement('h2');
  const details = document.createElement('h2');
  const date = document.createElement('h2');
  const dose = document.createElement('h2');
  const del = document.createElement('i');

  
  name.setAttribute("style", "border-top:1px solid red; padding: 15px;");
  name.textContent = text.my_name;
  
  details.setAttribute("style", "border-top:1px solid red; padding: 15px;");
  details.textContent = text.my_details;
  
  date.setAttribute("style", "border-top:1px solid red; padding: 15px;");
  date.textContent = text.my_date;
  
  dose.setAttribute("style", "border-top:1px solid red; padding: 15px;");
  dose.textContent = text.my_dose;
  
  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
      contentArray.splice(delThisIndex, 1);
      localStorage.setItem('items', JSON.stringify(contentArray));
      window.location.reload();
    })

  flashcard.className = 'flashcard';  
  flashcard.appendChild(name);
  flashcard.appendChild(details);
  flashcard.appendChild(date);
  flashcard.appendChild(dose);
  flashcard.appendChild(del);

  document.querySelector("#flashcards").appendChild(flashcard);
}
const dropdown = document.querySelector('.dd-button');
const timing = document.querySelectorAll('li');
timing.forEach((time)=>{
    time.addEventListener('click', ()=>{
        dropdown.textContent = time.textContent;
    })
})


addFlashcard = () => {
  const name = document.querySelector("#name");
  const details = document.querySelector("#details");
  const date = document.querySelector("#date");  
  let dose = dropdown.textContent;  
  
  
  let flashcard_info = {
      'my_name' : name.value,
      'my_details'  : details.value,
      'my_date'  : date.value,
      'my_dose' : dose
    }
    
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
    name.value = "";
    details.value = "";
    date.value = "";
    dose = "";
}


contentArray.forEach(flashcardMaker);