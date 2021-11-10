

const backgroundLine = document.querySelector("#background-line");
const progressLine = document.querySelector("#progress-line");

const circle1 = document.querySelector("#circle_1");
const circle2 = document.querySelector("#circle_2");
const circle3 = document.querySelector("#circle_3");
const circle4 = document.querySelector("#circle_4");

const step1Value = circle1.cx.baseVal.value;
const step2Value = circle2.cx.baseVal.value;
const step3Value = circle3.cx.baseVal.value;
const step4Value = circle4.cx.baseVal.value;
const step5Value = backgroundLine.x2.baseVal.value



export function stepForward(currentStep){

    if (currentStep === "step_1"){
        progressLine.x2.baseVal.value = step2Value;
        circle1.classList.toggle("cls-focused");
        circle1.classList.add("cls-clicked");
        circle2.classList.toggle("cls-focused");
    } else if(currentStep === "step_2"){
        progressLine.x2.baseVal.value = step3Value;
        circle2.classList.add("cls-clicked");
        circle2.classList.toggle("cls-focused");
        circle3.classList.toggle("cls-focused");       
    } else if(currentStep ==="step_3"){
        progressLine.x2.baseVal.value = step4Value;
        circle3.classList.add("cls-clicked");
        circle3.classList.toggle("cls-focused");
        circle4.classList.toggle("cls-focused"); 
    }else if (currentStep ==="step_4"){
        progressLine.x2.baseVal.value = step5Value;
        circle4.classList.add("cls-clicked");
        circle4.classList.toggle("cls-focused"); 
    }

}

export function stepBackward(currentStep){

    if (currentStep === "step_2"){
        progressLine.x2.baseVal.value = step1Value;
        circle2.classList.remove("cls-clicked");
        circle2.classList.add("cls-unclicked");
        circle1.classList.toggle("cls-focused");
        circle2.classList.toggle("cls-focused");
    } else if(currentStep === "step_3"){
        progressLine.x2.baseVal.value = step2Value;
        circle3.classList.remove("cls-clicked");
        circle3.classList.add("cls-unclicked");
        circle2.classList.toggle("cls-focused"); 
        circle3.classList.toggle("cls-focused"); 
    } else if(currentStep ==="step_4"){
        progressLine.x2.baseVal.value = step3Value;
        circle4.classList.remove("cls-clicked");
        circle4.classList.add("cls-unclicked");
        circle3.classList.toggle("cls-focused");  
        circle4.classList.toggle("cls-focused"); 
    }

}


export function changeStep(currentStep, nextStep){
    let currentCircle = `#circle_${currentStep}`;
    let nextCircle = `circle_${nextStep}`;

        if (nextCircle === "circle_1"){
        progressLine.x2.baseVal.value = step1Value;
        circle1.classList.add("cls-focused");
        circle2.classList.remove("cls-clicked");
        circle3.classList.remove("cls-clicked");
        circle4.classList.remove("cls-clicked");       
        circle2.classList.remove("cls-focused");
        circle3.classList.remove("cls-focused");
        circle4.classList.remove("cls-focused");
    } else if (nextCircle === "circle_2"){
        progressLine.x2.baseVal.value = step2Value;
        circle1.classList.add("cls-clicked");       
        circle2.classList.add("cls-focused");
        circle3.classList.remove("cls-clicked");
        circle4.classList.remove("cls-clicked");
        circle1.classList.remove("cls-focused");
        circle3.classList.remove("cls-focused");
        circle4.classList.remove("cls-focused");
    } else if (nextCircle === "circle_3"){
        progressLine.x2.baseVal.value = step3Value;
        circle4.classList.remove("cls-clicked");
        circle1.classList.add("cls-clicked");
        circle2.classList.add("cls-clicked");          
        circle3.classList.add("cls-focused"); 
        circle1.classList.remove("cls-focused");
        circle2.classList.remove("cls-focused");
        circle4.classList.remove("cls-focused");        
    } else if (nextCircle === "circle_4"){
        progressLine.x2.baseVal.value = step4Value;
        circle4.classList.add("cls-focused");
        circle1.classList.add("cls-clicked");
        circle2.classList.add("cls-clicked");
        circle3.classList.add("cls-clicked");
        circle1.classList.remove("cls-focused");
        circle2.classList.remove("cls-focused");
        circle3.classList.remove("cls-focused");
    }

}