import "./sass/style.scss";
import { post } from "./crud.js";
import { stepBar } from "./steps.js";

const form = document.querySelector("form");
const submit = document.querySelector("#submit-form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    console.log("target", e.submitter.id);
    let arrays = getValue();

    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      gamertag: form.elements.gamertag.value,
      password: form.elements.password.value,
      /*    types: selectArr.types,
      played: selectArr.games, */
      motives: arrays.motives,
      sleep: form.elements.sleep.value,
      nutrition: arrays.nutrition,
      stress: arrays.stress,
      mindset: form.elements.mindset.value,
      areas: arrays.areas,
      lifestyle: form.elements.lifestyle.value,
      symptoms: arrays.symptoms,
    };

    if (e.submitter.id === "submit-form") {
      console.log(data);
      post(data);
    }
  } else {
    //form.reportValidity();
  }
});

function getValue() {
  let inputElements = document.querySelectorAll("input[type=checkbox]");
  let motivesArr = [];
  let symptomsArr = [];
  let nutritionArr = [];
  let stressArr = [];
  let areasArr = [];
  let typesArr = [];
  let playedArr = [];

  inputElements.forEach((inputElement) => {
    let inputValue = inputElement.checked;
    console.log("input value", inputValue);

    if (inputValue) {
      if (inputElement.name === "motives") {
        let motivesValue = inputElement.value;
        console.log("motivesvalue", motivesValue);
        motivesArr.push(motivesValue);
      } else if (inputElement.name === "symptoms") {
        let value = inputElement.value;

        symptomsArr.push(value);
      } else if (inputElement.name === "nutrition") {
        let value = inputElement.value;

        nutritionArr.push(value);
      } else if (inputElement.name === "stress") {
        let value = inputElement.value;

        stressArr.push(value);
      } else if (inputElement.name === "types") {
        let value = inputElement.value;

        typesArr.push(value);
      } else if (inputElement.name === "played") {
        let value = inputElement.value;

        playedArr.push(value);
      } else {
        let value = inputElement.value;

        areasArr.push(value);
      }
    }
  });
  return {
    motives: motivesArr,
    symptoms: symptomsArr,
    nutrition: nutritionArr,
    stress: stressArr,
    areas: areasArr,
    types: typesArr,
    played: playedArr,
  };
}

import { previousStep, validateSteps } from "./steps";

//event listeners to advance
document.querySelectorAll(".btn_next").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("NEXT");
    //check if inputs are valid
    let currentStep = document.querySelector(".visible").id;
    let action = button.className;
    validateSteps(currentStep);
  });
});

//event listeners for stepbar
document.querySelectorAll("svg circle").forEach((circle) => {
  circle.addEventListener("click", () => {
    let currentStep = document.querySelector(".visible").id;
    let clickedCircle = circle.id;
    stepBar(clickedCircle, currentStep);
  });
});

//event listeners to go back

document.querySelectorAll(".btn_previous").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("BACK");
    let currentStep = document.querySelector(".visible").id;
    previousStep(currentStep);
  });
});
