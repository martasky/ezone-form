import {stepForward, stepBackward} from "./progress";

const step1 = document.querySelector("#step_1");
const step2 = document.querySelector("#step_2");
const step3 = document.querySelector("#step_3");
const step4 = document.querySelector("#step_4");

export function nextStep(currentStep){
    if (currentStep === "step_1"){
        step1.classList.remove("visible");
        step2.classList.add("visible");  
        document.querySelector("svg").scrollIntoView()    
    } else if (currentStep === "step_2"){
        step2.classList.remove("visible");
        step3.classList.add("visible");
        document.querySelector("svg").scrollIntoView()   
    }else if (currentStep === "step_3"){
        step3.classList.remove("visible");
        step4.classList.add("visible");   
        document.querySelector("svg").scrollIntoView()        
    }else if (currentStep === "step_4"){
        console.log("thanks")
    }
    stepForward(currentStep);
}

export function previousStep(currentStep){
    if (currentStep === "step_2"){
        step2.classList.remove("visible");
        step1.classList.add("visible");
        document.querySelector("svg").scrollIntoView()   
    } else if (currentStep === "step_3"){
        step3.classList.remove("visible");
        step2.classList.add("visible");
        document.querySelector("svg").scrollIntoView()   
    }else if (currentStep === "step_4"){
        step4.classList.remove("visible");
        step3.classList.add("visible");
        document.querySelector("svg").scrollIntoView()   
        
    }
    stepBackward(currentStep);
}