import "./sass/style.scss";
import { nextStep, previousStep } from "./steps";



    //event listeners to advance
document.querySelectorAll(".btn_next").forEach((button) => {
  button.addEventListener("click", () => {
      console.log("NEXT");
      //check if imnputs are valid
      let currentStep = document.querySelector(".visible").id;
     
    if(document.querySelectorAll(`#${currentStep} input`).forEach(input => {input.value}) != ""){
      console.log("validates")
      nextStep(currentStep);
     } else {
        
         console.log("doesnt validate")
     }
    
  });
});

 //event listeners to go back

document.querySelectorAll(".btn_previous").forEach((button)=>{
    button.addEventListener("click", ()=>{
        console.log("BACK");
        let currentStep = document.querySelector(".visible").id;
        previousStep(currentStep)
    })
})

