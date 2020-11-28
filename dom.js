const container = createDomElement('div', 'container mt-5') //document.createElement('div');
const row = createDomElement('div', 'row') //document.createElement('div');
const rowCol = createDomElement('div', 'offset-md-3 col-md-6 col-12');

//Card
const card = createDomElement('div', 'card card-outline-secondary');
const cardHeader = createDomElement('div', 'card-header');
const h3 = createDomElement('h3', 'mb-0');
const h3Text = document.createTextNode('User Information');
h3.append(h3Text);
cardHeader.append(h3);
card.append(cardHeader);

const cardBody = createDomElement('div', 'card-body');

//form
const form = createDomElement('form', 'form');
form.setAttribute('role', 'form'); 
form.setAttribute('autocomplete', 'on');
form.setAttribute('onsubmit', 'submitForm()');

const divFirstName = createDomElement('div', 'form-group row');
const labelFirstName = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelFirstNameText = document.createTextNode('First Name');
labelFirstName.append(labelFirstNameText);
divFirstName.append(labelFirstName);
const inputFirstNameDiv = createDomElement('div', 'col-lg-8');
const inputFirstName = createDomElement('input', 'form-control', 'firstName');
inputFirstName.setAttribute('type', 'text');
inputFirstName.setAttribute('required', 'true');
inputFirstName.setAttribute('placeholder', 'first name');
inputFirstNameDiv.append(inputFirstName);
divFirstName.append(inputFirstNameDiv);
form.append(divFirstName);

const divLastName = createDomElement('div', 'form-group row');
const labelLastName = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelLastNameText = document.createTextNode('Last Name');
labelLastName.append(labelLastNameText);
divLastName.append(labelLastName);
const inputLastNameDiv = createDomElement('div', 'col-lg-8');
const inputLastName = createDomElement('input', 'form-control', 'lastName');
inputLastName.setAttribute('type', 'text');
inputLastName.setAttribute('required', 'true');
inputLastName.setAttribute('placeholder', 'last name');
inputLastNameDiv.append(inputLastName);
divLastName.append(inputLastNameDiv);
form.append(divLastName);

const divAddress = createDomElement('div', 'form-group row');
const labelAddress = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelAddressText = document.createTextNode('Address');
labelAddress.append(labelAddressText);
divAddress.append(labelAddress);
const inputAddressDiv = createDomElement('div', 'col-lg-8');
const inputAddress = createDomElement('input', 'form-control', 'address');
inputAddress.setAttribute('type', 'text');
inputAddress.setAttribute('required', 'true');
inputAddress.setAttribute('placeholder', 'address');
inputAddressDiv.append(inputAddress);
divAddress.append(inputAddressDiv);
form.append(divAddress);


const divPincode = createDomElement('div', 'form-group row');
const labelPincode = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelPincodeText = document.createTextNode('Pincode');
labelPincode.append(labelPincodeText);
divPincode.append(labelPincode);
const inputPincodeDiv = createDomElement('div', 'col-lg-8');
const inputPincode = createDomElement('input', 'form-control', 'pincode');
inputPincode.setAttribute('type', 'number');
inputPincode.setAttribute('required', 'true');
inputPincode.setAttribute('placeholder', 'pincode');
inputPincodeDiv.append(inputPincode);
divPincode.append(inputPincodeDiv);
form.append(divPincode);


//Gender Radio button
const divGender = createDomElement('div', 'form-group row');
const labelGender = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelGenderText = document.createTextNode('Gender');
labelGender.append(labelGenderText);
divGender.append(labelGender);
const inputGenderDiv = createDomElement('div', 'col-lg-8');

const inputGenderDivMale = createDomElement('div', 'form-check form-check-inline');
const labelGenderMale = createDomElement('label','form-check-label');
const labelGenderMaleText = document.createTextNode('Male')
const inputGenderMale = createDomElement('input', 'form-check-input', 'male');
inputGenderMale.setAttribute('required', 'true');
inputGenderMale.setAttribute('type', 'radio');
inputGenderMale.setAttribute('name', 'gender');
inputGenderMale.setAttribute('value', 'male');
labelGenderMale.append(inputGenderMale, labelGenderMaleText);
inputGenderDivMale.append(labelGenderMale);

const inputGenderDivFemale = createDomElement('div', 'form-check form-check-inline');
const labelGenderFemale = createDomElement('label','form-check-label');
const labelGenderFemaleText = document.createTextNode('Female')
const inputGenderFemale = createDomElement('input', 'form-check-input', 'female');
inputGenderFemale.setAttribute('required', 'true');
inputGenderFemale.setAttribute('type', 'radio');
inputGenderFemale.setAttribute('name', 'gender');
inputGenderFemale.setAttribute('value', 'male');
labelGenderFemale.append(inputGenderFemale, labelGenderFemaleText);
inputGenderDivFemale.append(labelGenderFemale);

inputGenderDiv.append(inputGenderDivMale, inputGenderDivFemale);
divGender.append(inputGenderDiv);
form.append(divGender);
//Gender Radio button End

//Choice of Food Select Box
const divChoiceOfFood = createDomElement('div', 'form-group row');
const labelChoiceOfFood = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelChoiceOfFoodText = document.createTextNode('Choice Of Food');
labelChoiceOfFood.append(labelChoiceOfFoodText);
divChoiceOfFood.append(labelChoiceOfFood);

const selectBoxCoFDiv = createDomElement('div','col-lg-8');
const selectBoxCoFInput = createDomElement('select','form-control', 'choiceOfFood');
selectBoxCoFInput.setAttribute('required','true');
selectBoxCoFInput.setAttribute('multiple','true');
selectBoxCoFInput.setAttribute('size','4');
selectBoxCoFInput.setAttribute('onchange','getSelectedOptions(this)');

const optionCoF1 = createDomElement('option');
const optionCoF1Text = document.createTextNode('Cake');
optionCoF1.setAttribute('value', '01');
optionCoF1.append(optionCoF1Text);

const optionCoF2 = createDomElement('option');
const optionCoF2Text = document.createTextNode('Noodles');
optionCoF2.setAttribute('value', '02');
optionCoF2.append(optionCoF2Text);

const optionCoF3 = createDomElement('option');
const optionCoF3Text = document.createTextNode('Drinks');
optionCoF3.setAttribute('value', '03');
optionCoF3.append(optionCoF3Text);

const optionCoF4 = createDomElement('option');
const optionCoF4Text = document.createTextNode('Rice');
optionCoF4.setAttribute('value', '04');
optionCoF4.append(optionCoF4Text);

const optionCoF5 = createDomElement('option');
const optionCoF5Text = document.createTextNode('Curry');
optionCoF5.setAttribute('value', '05');
optionCoF5.append(optionCoF5Text);

selectBoxCoFInput.append(optionCoF1);
selectBoxCoFInput.append(optionCoF2);
selectBoxCoFInput.append(optionCoF3);
selectBoxCoFInput.append(optionCoF4);
selectBoxCoFInput.append(optionCoF5);

selectBoxCoFDiv.append(selectBoxCoFInput);

const paraChoiceOfFoodCondition = createDomElement('p','small', 'foodCondition');
const paraChoiceOfFoodConditionText = document.createTextNode('Must select at least 2 choices*');
paraChoiceOfFoodCondition.append(paraChoiceOfFoodConditionText);
selectBoxCoFDiv.append(paraChoiceOfFoodCondition);
divChoiceOfFood.append(selectBoxCoFDiv);
form.append(divChoiceOfFood);
//Choice of Food Select Box End

//State Select Box
const divState = createDomElement('div', 'form-group row');
const labelState = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelStateText = document.createTextNode('State');
labelState.append(labelStateText);
divState.append(labelState);

const divStateSelectBox = createDomElement('div', 'col-lg-8');
const selectBoxStateInput = createDomElement('select','form-control', 'state');
selectBoxStateInput.setAttribute('required','true');
selectBoxStateInput.setAttribute('multiple','true');
selectBoxStateInput.setAttribute('size','1');

const optionStateEmpty = createDomElement('option');
const optionStateEmptyText = document.createTextNode('Select State');
optionStateEmpty.setAttribute('value', '');
optionStateEmpty.append(optionStateEmptyText);

const optionState1 = createDomElement('option');
const optionState1Text = document.createTextNode('Karnataka');
optionState1.setAttribute('value', '01');
optionState1.append(optionState1Text);

const optionState2 = createDomElement('option');
const optionState2Text = document.createTextNode('Kerala');
optionState2.setAttribute('value', '02');
optionState2.append(optionState2Text);

const optionState3 = createDomElement('option');
const optionState3Text = document.createTextNode('Tamil Nadu');
optionState3.setAttribute('value', '03');
optionState3.append(optionState3Text);

const optionState4 = createDomElement('option');
const optionState4Text = document.createTextNode('Andhra Pradesh');
optionState4.setAttribute('value', '04');
optionState4.append(optionState4Text);

const optionState5 = createDomElement('option');
const optionState5Text = document.createTextNode('Telangana');
optionState5.setAttribute('value', '05');
optionState5.append(optionState5Text);

selectBoxStateInput.append(optionStateEmpty);
selectBoxStateInput.append(optionState1);
selectBoxStateInput.append(optionState2);
selectBoxStateInput.append(optionState3);
selectBoxStateInput.append(optionState4);
selectBoxStateInput.append(optionState5);

divStateSelectBox.append(selectBoxStateInput);
divState.append(divStateSelectBox);
form.append(divState);
//State Select Box End

//State Select Box
const divCountry = createDomElement('div', 'form-group row');
const labelCountry = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const labelCountryText = document.createTextNode('Country');
labelCountry.append(labelCountryText);
divCountry.append(labelCountry);

const divCountrySelectBox = createDomElement('div', 'col-lg-8');
const selectBoxCountryInput = createDomElement('select','form-control', 'country');
selectBoxCountryInput.setAttribute('required','true');
selectBoxCountryInput.setAttribute('multiple','true');
selectBoxCountryInput.setAttribute('size','1');

const optionCountryEmpty = createDomElement('option');
const optionCountryEmptyText = document.createTextNode('Select Country');
optionCountryEmpty.setAttribute('value', '');
optionCountryEmpty.append(optionCountryEmptyText);

const optionCountry1 = createDomElement('option');
const optionCountry1Text = document.createTextNode('India');
optionCountry1.setAttribute('value', '01');
optionCountry1.append(optionCountry1Text);

selectBoxCountryInput.append(optionCountryEmpty);
selectBoxCountryInput.append(optionCountry1);


divCountrySelectBox.append(selectBoxCountryInput);
divCountry.append(divCountrySelectBox);
form.append(divCountry);
//Country Select Box End

//Submit Button
const submitButtonDiv = createDomElement('div', 'form-group row');
const submitButtonLabel = createDomElement('label', 'col-lg-4 col-form-label form-control-label');
const submitButtonInputDiv = createDomElement('div', 'col-lg-8');
const submitButtonInput = createDomElement('input', 'btn btn-primary', 'submitButton');
submitButtonInput.setAttribute('type', 'submit');
submitButtonInput.setAttribute('value', 'Save Changes');
submitButtonInputDiv.append(submitButtonInput);
submitButtonDiv.append(submitButtonLabel, submitButtonInputDiv);
form.append(submitButtonDiv);
//Submit Button End

//form end
cardBody.append(form);
card.append(cardBody);
//Card end

//table start
const containerTable = createDomElement('div', 'container mt-5');
const rowTable = createDomElement('div', 'row');
const colTable = createDomElement('div', 'col-md-6 offset-md-3 col-12');
const table = createDomElement('table', 'table table-striped table-inverse');
const tbody = createDomElement('tbody');

const tr1 = createDomElement('tr');
const tr1td1 = createDomElement('td');
const tr1td1Text = document.createTextNode('First Name');
tr1td1.append(tr1td1Text);
const tr1td2 = createDomElement('td', '', 'firstNameTable');
tr1.append(tr1td1, tr1td2);

const tr2 = createDomElement('tr');
const tr2td1 = createDomElement('td');
const tr2td1Text = document.createTextNode('Last Name');
tr2td1.append(tr2td1Text);
const tr2td2 = createDomElement('td', '', 'lastNameTable');
tr2.append(tr2td1, tr2td2);

const tr3 = createDomElement('tr');
const tr3td1 = createDomElement('td');
const tr3td1Text = document.createTextNode('Address');
tr3td1.append(tr3td1Text);
const tr3td2 = createDomElement('td', '', 'addressTable');
tr3.append(tr3td1, tr3td2);

const tr4 = createDomElement('tr');
const tr4td1 = createDomElement('td');
const tr4td1Text = document.createTextNode('Pincode');
tr4td1.append(tr4td1Text);
const tr4td2 = createDomElement('td', '', 'pinCodeTable');
tr4.append(tr4td1, tr4td2);

const tr5 = createDomElement('tr');
const tr5td1 = createDomElement('td');
const tr5td1Text = document.createTextNode('Gender');
tr5td1.append(tr5td1Text);
const tr5td2 = createDomElement('td', '', 'genderTable');
tr5.append(tr5td1, tr5td2);

const tr6 = createDomElement('tr');
const tr6td1 = createDomElement('td');
const tr6td1Text = document.createTextNode('Choice of Food');
tr6td1.append(tr6td1Text);
const tr6td2 = createDomElement('td', '', 'choiceOfFoodTable');
tr6.append(tr6td1, tr6td2);

const tr7 = createDomElement('tr');
const tr7td1 = createDomElement('td');
const tr7td1Text = document.createTextNode('State');
tr7td1.append(tr7td1Text);
const tr7td2 = createDomElement('td', '', 'stateTable');
tr7.append(tr7td1, tr7td2);

const tr8 = createDomElement('tr');
const tr8td1 = createDomElement('td');
const tr8td1Text = document.createTextNode('Country');
tr8td1.append(tr8td1Text);
const tr8td2 = createDomElement('td', '', 'countryTable');
tr8.append(tr8td1, tr8td2);


tbody.append(tr1);
tbody.append(tr2);
tbody.append(tr3);
tbody.append(tr4);
tbody.append(tr5);
tbody.append(tr6);
tbody.append(tr7);
tbody.append(tr8);

table.append(tbody);
colTable.append(table);
rowTable.append(colTable);
containerTable.append(rowTable);

//table start end
rowCol.append(card);
row.append(rowCol);
container.append(row);
document.body.append(container);
document.body.append(containerTable);

let choicesOfFood = [];
function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}