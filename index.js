/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function 
const toggleDarkMode = () => {
   // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");

    }

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] 
    1: Query for the submit button
    2: Create a callback function that manipulates the DOM
    3: Add an event listener to the button.
***/
// Step 1: Select the submit button
const newSubmit = document.getElementById("submitBtn");
let count = 3;


//Function that will add the participant
const addParticipant = (event) => {

    event.preventDefault(); //prevent  page reload

    //get the input values
    const participantName  = document.getElementById("name").value;
    const participantState = document.getElementById("state").value;
    const participantEmail = document.getElementById("email").value;

    //create a new <p> element
    const newPara = document.createElement("p");
    //set the text of the new <p> 
    newPara.textContent = `⭐  ${participantName} from ${participantState} is joining the squad.`;
    //append the new <p> to the participants list
    const participantList = document.querySelector(".rsvp-participants");
    participantList.appendChild(newPara);

     // First, remove the old count
    const oldCount = document.getElementById("rsvp-count");
    if (oldCount) {
        oldCount.remove();
    }

    // Increase the count
    count = count + 1;

    // Create a new count element
    const newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = `⭐ ${count} people have RSVP'd to this event!`;

    // Append the new count to the bottom of the participants list
    participantList.appendChild(newCount);
}
// newSubmit.addEventListener("click", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {

  event.preventDefault();       // Prevent the form from submitting

  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for( let i=0; i<3; i++ ) {
    const input = rsvpInputs[i];
    const value = input.value.trim();
    
    input.classList.remove("error");
    // TODO: Inside loop, validate the value of each input
    if(value.length <2){
        input.classList.add("error");
        containsErrors = true;
        continue;    // skips the rest of the loop for this input & moves to the next iteration
    }
    if(input.id ==="email" && !value.includes("@")){
        input.classList.add("error");
        containsErrors = true;
    }
  }
  //If any errors found, stop here
  if(containsErrors){
    return;   //Return immediately stops the validateForm() function from running any further code
  }

  // TODO: If no errors, call addParticipant() and clear fields
  addParticipant(event);
  document.getElementById("rsvp-form").reset();

};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
newSubmit.addEventListener("click", validateForm);



/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/