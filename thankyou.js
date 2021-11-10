import {stepForward} from "./progress.js"

export function showThankYou(){
    document.querySelector("#step_4").classList.remove("visible");
    document.querySelector("#step_5").classList.add("visible");
    stepForward("step_4");
    document.querySelector(`#step_5 h1`).scrollIntoView()
    document.querySelector('.progress_bar').classList.add("go-away");
    document.querySelector('#form_intro h1:first-of-type').classList.add("go-away");
    document.querySelector(`#form_intro p:first-of-type`).classList.add("go-away");
    document.querySelector(`#form_intro p:nth-of-type(2)`).classList.add("go-away");

}