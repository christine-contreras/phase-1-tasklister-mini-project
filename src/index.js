
//wait for document to load
document.addEventListener("DOMContentLoaded", () => {

  //As a user, I should be able to type a task into the input field, click some form of a submit button.

  //variable to hold submit button value
  const button = document.getElementById('submit-task-btn')
  //variable to hold text input
  const textInput = document.getElementById('new-task-description');

  //variable to hold list 
  const list = document.getElementById('tasks');



  //make sure I am grabbing the correct elements 
  // console.log(button);
  // console.log(textInput);

  //event listener for the submit button 
  button.addEventListener('click', (event) => {
    //prevent default action on submit click
    event.preventDefault();

    //fire addToTask()
    addToTask();


  }, false)

  //As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
  function addToTask() {

    
    //create li element 
    const listItem = document.createElement('li');
    
    //variable to grab text input value 
    const textInputValue = textInput.value;
    // console.log("value of input:", textInput);

    //add input value to li 
    listItem.innerHTML = `${textInputValue} <button class="delete-btn">delete</button>`;

    //append li to ul 
    list.appendChild(listItem);

  }


  //remove list item dynamically
  //add event listen to ul since li's aren't on page when loaded
  list.addEventListener('click', function(event){
   
    //find the li that was clicked within ul
    const target = event.target;
    // console.log(target)

    if(target.classList.contains('delete-btn')) {
      list.removeChild(target.parentElement);
    }

    //confirm alert popup to make sure you want to delete the item
    // if (confirm('do you want to delete this item?')) {
    //   //if you press okay then remove li 
    //   target.remove();
    // }

  });

});

