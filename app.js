const container = createDomElement('div', 'container mt-5') //document.createElement('div');
const row = createDomElement('div', 'row') //document.createElement('div');
const rowCol = createDomElement('div', 'offset-md-3 col-md-6 col-12')//document.createElement('div');
const form = createDomElement('form') //document.createElement('form');



function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}


function submitForm(){
  
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let pincode = document.getElementById('pincode').value;
  let gender = getGenderValue();
  let choiceOfFood = document.getElementById('choiceOfFood').value;
  let state = document.getElementById('state').value;
  let country = document.getElementById('country').value;
  console.log('firstName', firstName, lastName, address, pincode, gender, choiceOfFood, state, country);
  populateTable(firstName, lastName, address, pincode, gender, choiceOfFood, state, country);
  event.preventDefault();
}

function getGenderValue() { 
  var ele = document.getElementsByName('gender'); 
    
  for(i = 0; i < ele.length; i++) { 
      if(ele[i].checked) {
        return ele[i].value; 
      }
  } 
} 

function populateTable(firstName, lastName, address, pincode, gender, choiceOfFood, state, country){
  document.getElementById('firstNameTable').innerHTML = firstName;
  document.getElementById('lastNameTable').innerHTML = lastName;
  document.getElementById('AddressTable').innerHTML = address;
  document.getElementById('pinCodeTable').innerHTML = pincode;
  document.getElementById('genderTable').innerHTML = gender;
  document.getElementById('choiceOfFoodTable').innerHTML = choiceOfFood;
  document.getElementById('stateTable').innerHTML = state;
  document.getElementById('countryTable').innerHTML = country;
}