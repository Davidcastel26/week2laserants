import './style.css'

//We declare the variable which are getting the DOM out-puts
const input = document.querySelector('#input-w1') as HTMLInputElement;
const btnAdd = document.querySelector('#add') as HTMLButtonElement;
const list = document.querySelector('#list') as HTMLDataListElement;

// We declare the arrow fuctions here
let clickEvent = ( ):void => {
  // we get the input string values from the INPUT from the HTML 
  const value: string = input!.value;

  //Validations if values is ''
  if( value === '') return;

  // We set the value into the input file as blank
  input!.value = "";

  //we create the element LI for the UL from HTML file
  const element:HTMLLIElement = document.createElement('li')
  //then insert the element only as text from the uL
  element.innerText = value;
  element.classList.add('list-item');

  const deleteButton: HTMLButtonElement = document.createElement('button');

  deleteButton.innerText = "Delete";
  deleteButton.classList.add('delete-btn');
  //HERE I set the function to remove the li from the ul
  deleteButton.addEventListener('click', () => {
    list.removeChild(element)
  })

  //HERE set the complete btn
  const completeButton: HTMLButtonElement = document.createElement('button');
  completeButton.innerText = "Complete";
  completeButton.classList.add('disable-btn');

  // Add an event to the complete btn
  completeButton.addEventListener('click', () => {
    deleteButton.disabled = true;
    element.style.textDecoration = 'line-through';
  })

  // Append the delete button to the <li> element
  element.appendChild(deleteButton);
  // append the complete btn
  element.appendChild(completeButton);

  list!.appendChild(element)

}

btnAdd?.addEventListener("click", clickEvent)
