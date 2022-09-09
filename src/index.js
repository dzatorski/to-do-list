import _ from "lodash";
import "./styles/style.css";
import menu from "./assets/menu.svg";
import inbox from "./assets/inbox.svg";
import { toDoCl } from "./objectCreate";
import { newProjectCl } from "./objectCreate";

const menuImg = document.getElementById(`menu`);
const inboxImg = document.querySelector(`.icon`);
menuImg.src = menu;
inboxImg.src = inbox;

const newTaskButton = document.querySelector(`.new-task-btn`);
const modal = document.querySelector(`.modal`);
const modalProject = document.querySelector(`.modal-project`);
const closeModal = document.querySelectorAll(`.close`);

const newProjectBtn = document.querySelector(`.new-project-btn`);
const addNewProjectBtn = document.querySelector(`.add-new-project-btn`);
const addBtn = document.querySelector(`.add-to-do`);

const title = document.querySelector(`#title`);
const description = document.querySelector(`#description`);
const date = document.querySelector(`#date`);
const priority = document.querySelector(`#priority`);
const notes = document.querySelector(`#notes`);

const listOfProjects = document.querySelector(`.list-of-tasks`);
const projectInput = document.querySelector(`.project-input`);
const projectsList = document.querySelector(`.projects-list`);

let projectsArr = [];
let toDoArr = [];
projectsArr.push(new newProjectCl(`Project 1`));
projectsArr.push(new newProjectCl(`Project 2`));
let activeProject = projectsArr[0];
const editBtnFunc = () => {
  const editBtn = document.querySelectorAll(`.edit-btn`);
  editBtn.forEach((el) => {
    el.addEventListener(`click`, () => {
      console.log(`xddd`);
    });
  });
};

const refreshUi = () => {
  title.value = ``;
  description.value = ``;
  date.value = ``;
  priority.value = ``;
  notes.value = ``;
  editBtnFunc();
};

newTaskButton.addEventListener(`click`, () => {
  modal.style.display = `flex`;
});
closeModal.forEach((el) => {
  el.addEventListener(`click`, () => {
    modal.style.display = `none`;
    modalProject.style.display = `none`;
  });
});

addBtn.addEventListener(`click`, () => {
  activeProject.contents.push(
    new toDoCl(
      title.value ? title.value : `Temp title`,
      description.value ? description.value : `Temp description`,
      date.value
        ? (date.value = new Date(date.value).toLocaleDateString())
        : `${new Date().getFullYear()}` +
          `-` +
          `${new Date().getMonth()}`.padStart(2, 0) +
          `-` +
          `${new Date().getDay()}`.padStart(2, 0),
      priority.value ? priority.value : `low`,
      notes.value ? notes.value : `Temp notes`
    )
  );
  modal.style.display = `none`;
  console.log(toDoArr);
  renderToDo();
});

activeProject.contents.push(
  new toDoCl(
    `Test`,
    `No desc`,
    `15.09.2022`,
    `medium`,
    `I need to get on it before the October starts`
  )
);

const checkPriority = () => {
  toDoArr.forEach((el, i) => {
    if (el.priority === `medium`) {
      document.querySelector(`#task${i}`).style.border = `solid 2px orange`;
    } else if (el.priority === `low`) {
      document.querySelector(`#task${i}`).style.border = `solid 2px green `;
    } else if (el.priority === `high`) {
      document.querySelector(`#task${i}`).style.border = `solid 2px red`;
    }
  });
};
const renderToDo = (el) => {
  listOfProjects.innerHTML = ``;
  activeProject.contents.forEach((el, index) => {
    el.index = index;
    let htmlTemplate = `<div class="task" id="task${index}">
    <div class="title-list">${el.title}</div>
    <div class="desc-list">${el.description}</div>
    <div class="date-list">${el.date}</div>
    <div class="notes-list">
    ${el.notes}
    </div>
    <button class="checklist-btn">Done</button>
    <button class="edit-btn">Edit</button>
    </div>`;
    listOfProjects.insertAdjacentHTML(`beforeend`, htmlTemplate);
  });
  refreshUi();
  checkPriority();
};
renderToDo();

newProjectBtn.addEventListener(`click`, () => {
  modalProject.style.display = `flex`;
});

addNewProjectBtn.addEventListener(`click`, () => {
  projectsArr.push(new newProjectCl(projectInput.value));
  refreshProjects();
  modalProject.style.display = `none`;
});

const projectsShow = () => {
  let projects = document.querySelectorAll(`.project`);
  projects.forEach((el, i) => {
    el.addEventListener(`click`, () => {
      activeProject = projectsArr[`${i}`];
      console.log(activeProject);
      renderToDo();
    });
  });
};

const refreshProjects = () => {
  projectsList.innerHTML = ``;
  projectsArr.forEach((el, i) => {
    let htmlTemplate = `<li class="project" id="project${i}">${el.title}</li>`;
    projectsList.insertAdjacentHTML(`beforeend`, htmlTemplate);
  });
  projectsShow();
};
refreshProjects();

console.log(activeProject);
