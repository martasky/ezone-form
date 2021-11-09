import { stepForward, stepBackward, changeStep } from "./progress";

const step1 = document.querySelector("#step_1");
const step2 = document.querySelector("#step_2");
const step3 = document.querySelector("#step_3");
const step4 = document.querySelector("#step_4");

export function nextStep(currentStep) {
  if (currentStep === "step_1") {
    step1.classList.remove("visible");
    step2.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  } else if (currentStep === "step_2") {
    step2.classList.remove("visible");
    step3.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  } else if (currentStep === "step_3") {
    step3.classList.remove("visible");
    step4.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  } else if (currentStep === "step_4") {
    console.log("thanks");
  }
  stepForward(currentStep);
}

export function previousStep(currentStep) {
  if (currentStep === "step_2") {
    step2.classList.remove("visible");
    step1.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  } else if (currentStep === "step_3") {
    step3.classList.remove("visible");
    step2.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  } else if (currentStep === "step_4") {
    step4.classList.remove("visible");
    step3.classList.add("visible");
    document.querySelector("svg").scrollIntoView();
  }
  stepBackward(currentStep);
}

export function validateSteps(currentStep, action) {
  if (currentStep === "step_1") {
    if (document.querySelector("#name").reportValidity()) {
      if (document.querySelector("#email").reportValidity()) {
        if (document.querySelector("#gamertag").reportValidity()) {
          if (document.querySelector("#password").reportValidity()) {
            nextStep(currentStep);        
          }
        }
      }
    } else {
      document.querySelector(`#${currentStep} .btn_next`).classList.add("dissabled");
    }
  } else if (currentStep === "step_2") {
    if (document.querySelector("#types").reportValidity()) {
      if (document.querySelector("#played").reportValidity()) {
          nextStep(currentStep);        
      }
    } 
  } else if(currentStep === "step_3") {
    nextStep(currentStep); 
  }
  /* else if (currentStep === "step_3") {

    const nutritionChecklist = [];
    const symptomsChecklist = [];

    //loop through the nutritioncheckboxes and see if there is any checked
    document.querySelectorAll(`input[name="nutrition"]`).forEach((input) => {
      if (input.checked) {
        nutritionChecklist.push(input.id);     
        console.log(nutritionChecklist);   
      }
    });
    //if anyone checked, check next checkboxes
    if (nutritionChecklist.length > 0) {      
      document.querySelectorAll(`input[name="symptoms"]`).forEach((input) => {
        if (input.checked) {
          symptomsChecklist.push(input.id);
          console.log(symptomsChecklist);
        }
      });
      if (symptomsChecklist.length > 0) {
            nextStep(currentStep);
      } else {
        console.log("choose a synthom");
        document.querySelector("#symptoms1").setCustomValidity("Please, select at least one option");
      }
    } else {
    console.log("choose a nutrition");
      document.querySelector("#nutrition1").setCustomValidity("Please, select at least one option");
      document.querySelector("#nutrition1").reportValidity()
      }
  } else if (currentStep === "step_4") {
      
  } */
}


export function stepBar(circleClicked, visibleStep) {
let nextDestination = circleClicked.slice(7);
let currentPage = visibleStep.slice(5);
document.querySelector(`#${visibleStep}`).classList.remove("visible");
document.querySelector(`#step_${nextDestination}`).classList.add("visible");
changeStep(currentPage, nextDestination)

}

