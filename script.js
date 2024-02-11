
const noteContainer = document.querySelector('.notes-container');
console.log(noteContainer);
const btn = document.querySelector('.btn');
console.log(btn);

function updateStorage() {
    localStorage.setItem('notes', noteContainer.innerHTML);
}


btn.addEventListener('click', ()=> {

    // notes create elements variables
 let div = document.createElement('DIV');
 let title = document.createElement('SPAN');
 let imgCon = document.createElement('SPAN');
 let saveImg = document.createElement('IMG');
 let delImg = document.createElement('IMG');
 let minImg = document.createElement('IMG');
  
 // title bar
 title.className = 'title';
 title.textContent = 'Title';
 title.setAttribute('contenteditable', 'true');
 div.appendChild(title);
 div.className = 'div';
  // Image Container
  imgCon.className = 'img-con';
  div.appendChild(imgCon);

    // Image details
  delImg.className = 'del-img';
  minImg.className = 'min-img';
  saveImg.className = 'save-img';
  delImg.src = 'img/delete.png';
  minImg.src = 'img/images.png';
  saveImg.src = 'img/save.png';

  imgCon.appendChild(minImg);
  imgCon.appendChild(saveImg);
  imgCon.appendChild(delImg);

 
 let note = document.createElement('P');
 note.setAttribute('contenteditable', 'true');
 note.className = 'notes';
 
 let noteContent = document.createElement('DIV');
 noteContent.className = 'note-content';

 noteContent.appendChild(div);
 noteContent.appendChild(note);
 noteContainer.appendChild(noteContent);
 updateStorage();

});

noteContainer.addEventListener('click', (e)=> {
 if(e.target.className === 'del-img') {
    console.log('you clicked the delete');
let p = e.target.parentElement.parentNode;
 p.parentElement.remove();
 updateStorage();
 }
else if (e.target.className === 'save-img') {
    alert('you clicked save icon');
 } else if(e.target.className === 'min-img') {
    alert('you clicked minimise');
 } 
 else if (e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
    notes = document.querySelectorAll(".notes");
    notes.forEach(nt => {
    nt.onkeyup = function(){
        updateStorage();
    }
    }) };
})

function retrieveData() {
    noteContainer.innerHTML = localStorage.getItem('notes');
}
retrieveData();

document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
    document.execCommand('insertLineBreak');
    event.preventDefault();
    }
})
