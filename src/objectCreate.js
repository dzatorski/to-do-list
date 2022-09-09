export class toDoCl {
  constructor(title, description, dueDate, priority, notes, status) {
    this.title = title;
    this.description = description;
    this.date = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = ``;
  }
}
export class newProjectCl {
  constructor(title, contents) {
    this.title = title;
    this.contents = [];
  }
}
