import _ from "lodash";
import "./styles/style.css";
import menu from "./assets/menu.svg";
import inbox from "./assets/inbox.svg";
import toDoCl from "./objectCreate";

const menuImg = document.getElementById(`menu`);
const inboxImg = document.querySelector(`.icon`);
menuImg.src = menu;
inboxImg.src = inbox;
const newButton = document.querySelector(`.new-project-btn`);
const modal = document.querySelector(`.modal`);
const closeModal = document.querySelector(`.close`);
const addBtn = document.querySelector(`.add-to-do`);
const title = document.querySelector(`#title`);
const description = document.querySelector(`#description`);
const date = document.querySelector(`#date`);
const priority = document.querySelector(`#priority`);
const notes = document.querySelector(`#notes`);
const listOfProjects = document.querySelector(`.list-of-projects`);
let toDoArr = [];

newButton.addEventListener(`click`, () => {
  modal.style.display = `flex`;
});
closeModal.addEventListener(`click`, () => {
  modal.style.display = `none`;
});
addBtn.addEventListener(`click`, () => {
  toDoArr.push(
    new toDoCl(
      title.value,
      description.value,
      date.value,
      priority.value,
      notes.value
    )
  );
  modal.style.display = `none`;
  console.log(toDoArr);
  createElement();
});

toDoArr.push(
  new toDoCl(
    `Test`,
    `No desc`,
    `07.09.2022`,
    `medium`,
    `I need to get on it before the October starts`
  )
);

const createElement = () => {
  listOfProjects.innerHTML = ``;
  toDoArr.forEach((el) => {
    let htmlTemplate = `<div class="project">
    <div class="title-list">${el.title}</div>
    <div class="desc-list">${el.description}</div>
    <div class="date-list">${el.date}</div>
    <div class="priority-list">${el.priority}</div>
    <div class="notes-list">
    ${el.notes}
    </div>
    <button class="edit-btn">Edit</button>
    </div>`;
    listOfProjects.insertAdjacentHTML(`beforeend`, htmlTemplate);
  });
};
createElement();
