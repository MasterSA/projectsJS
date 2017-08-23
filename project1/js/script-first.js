var para = document.querySelector('p');

para.addEventListener('click', nameUpdate);


function nameUpdate(){
  var name = prompt('Enter a name');
  para.textContent= "Player 1 :" + name;

}

// Add a new paragraph each time user click the  button

var button = document.querySelector('button')

button.addEventListener('click', createNewParagrahp);

function createNewParagrahp(){
  var paragraph = document.createElement('p')
  paragraph.textContent = "You! yes you clicked me!!";
  document.body.appendChild(paragraph);

}
