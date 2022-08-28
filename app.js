const formEl = document.querySelector(".form");
const conditionsEl = document.querySelector(".conditions");

const users = [];

const submitHandler = (event) => {
  event.preventDefault();

  const emailEl = document.getElementById("email").value;
  const passwordEl = document.getElementById("password").value;
  const conPasswordEl = document.getElementById("password2").value;
  const firstNameEl = document.getElementById("firstName").value;
  const lastNameEl = formEl.querySelector("#lastName").value;
  const genderMaleEl = document.querySelector("#male");
  const genderFemaleEl = document.querySelector("#female");
  const countryEl = document.getElementById("country").value;
  let gender;


  //Change else if block to switch statement

  switch (true) {
    case emailEl.trim().length <= 8:
        alert("Enter Correct Email");
        break;
    case passwordEl.trim().length <= 0:
        alert("Enter Correct Password");
        break;
    case conPasswordEl.trim() !== passwordEl.trim() || !conPasswordEl.trim():
        alert("Password does not match");
        break;
    case !firstNameEl.trim():
        alert("Input Valid First Name");
        break;
    case !lastNameEl.trim():
        alert("Enter Valid Last Name");
        break;
    case !genderMaleEl.checked && !genderFemaleEl.checked:
        alert("Select Valid Gender");
        break;
    case countryEl === "Select a Country":
        alert("Select Valid Country");
        break;
    case genderFemaleEl.checked:
        gender = genderFemaleEl.parentElement.textContent;
        break;
    case genderMaleEl.checked:
        gender = genderMaleEl.parentElement.textContent;
        break;
  }

//   if (emailEl.trim().length <= 0) {
//     alert("Enter Correct Email");
//     return;
//   } else if (passwordEl.trim().length <= 0) {
//     alert("Enter Valid Password");
//     return;
//   } else if (
//     conPasswordEl.trim() !== passwordEl.trim() ||
//     !conPasswordEl.trim()
//   ) {
//     alert("Password does not match");
//     return;
//   } else if (!firstNameEl.trim()) {
//     alert("Input Valid First Name");
//     return;
//   } else if (!lastNameEl.trim()) {
//     alert("Enter Valid LastName");
//     return;
//   } else if (!genderMaleEl.checked && !genderFemaleEl.checked) {
//     alert("Select Valid Gender");
//     return;
//   } else if (countryEl === "Select a Country") {
//     alert("Select Valid Country");
//     return;
//   } else if (genderFemaleEl.checked) {
//     gender = genderFemaleEl.parentElement.textContent;
//   } else if (genderMaleEl.checked) {
//     gender = genderMaleEl.parentElement.textContent;
//   }else if ()

  const userDetails = {
    email: emailEl,
    password: passwordEl,
    conPassword: conPasswordEl,
    firstName: firstNameEl,
    lastName: lastNameEl,
    gender: gender,
    country: countryEl,
  };

  users.push(userDetails);
};

formEl.addEventListener("submit", submitHandler);