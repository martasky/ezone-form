import {stepForward} from "./progress.js"

export function showThankYou(){
    document.querySelector("#step_4").classList.remove("visible");
    document.querySelector("#step_5").classList.add("visible");
    stepForward("step_4");
    document.querySelector(`#form_intro p:nth-of-type(2)`).scrollIntoView()
}