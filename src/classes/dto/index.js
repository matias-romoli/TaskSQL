export class Error {
  constructor(status, info, err) {
    this.status = status;
    this.info = info;
    this.err = err;
  }
}

export class Task {
  id;
  title;
  description;
  constructor(id, title, description){
    this.id = id;
    this.title = title;
    this.description = description;
  }
}