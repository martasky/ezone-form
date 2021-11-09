

const progressBar = document.querySelector(".progress_bar svg");
const progressLine = document.querySelector("#progress-line");

const circle1 = document.querySelector("#first-circle");
const circle2 = document.querySelector("#second-circle");
const circle3 = document.querySelector("#third-circle");
const circle4 = document.querySelector("#fourth-circle");

const stepOneValue = circle1.cx.baseVal.value;
const stepTwoValue = circle2.cx.baseVal.value;
const stepThreeValue = circle3.cx.baseVal.value;
const stepFourValue = circle4.cx.baseVal.value;



export function stepForward(currentStep){

    if (currentStep === "step_1"){
        progressLine.x2.baseVal.value = stepTwoValue;
        circle1.classList.add("cls-2");
        circle1.classList.add("cls-focused");
    } else if(currentStep === "step_2"){
        progressLine.x2.baseVal.value = stepThreeValue;
        circle2.classList.add("cls-2");
        circle2.classList.add("cls-focused");
        circle1.classList.remove("cls-focused");
    } else if(currentStep ==="step_3"){
        progressLine.x2.baseVal.value = stepFourValue;
        circle3.classList.add("cls-2");
        circle3.classList.add("cls-focused");
        circle2.classList.remove("cls-focused");
    }else if (currentStep ==="step_4"){
        console.log("Gracias!");
        circle4.classList.add("cls-2");
        circle4.classList.add("cls-focused");
        circle3.classList.remove("cls-focused");
    }

}

export function stepBackward(currentStep){

    if (currentStep === "step_2"){
        progressLine.x2.baseVal.value = stepOneValue;
        circle1.classList.remove("cls-2")
    } else if(currentStep === "step_3"){
        progressLine.x2.baseVal.value = stepTwoValue;
        circle2.classList.remove("cls-2")
    } else if(currentStep ==="step_4"){
        progressLine.x2.baseVal.value = stepThreeValue;
        circle3.classList.remove("cls-2")
    }

}