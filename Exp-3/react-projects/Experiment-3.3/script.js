window.addEventListener("DOMContentLoaded", function () {
  // Base Class: Person
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
      return `${this.name} (Age: ${this.age})`;
    }
    getFullDetails() {
      return this.getInfo();
    }
  }

  // Subclass: Student
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }
    getFullDetails() {
      return `${this.getInfo()}\nRole: Student\nCourse: ${this.course}`;
    }
  }

  // Subclass: Teacher
  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
    getFullDetails() {
      return `${this.getInfo()}\nRole: Teacher\nSubject: ${this.subject}`;
    }
  }

  // People Data (Updated names)
  const people = [
    new Student("Arzaul", 20, "Artificial Intelligence"),
    new Student("Rahul", 21, "Data Science"),
    new Student("Rohan", 22, "Cybersecurity"),
    new Teacher("Dr. Mehta", 45, "Machine Learning"),
    new Teacher("Ms. Kapoor", 39, "Cloud Computing"),
  ];

  const listEl = document.getElementById("peopleList");
  const detailsEl = document.getElementById("details");

  function renderList() {
    listEl.innerHTML = "";
    people.forEach((person) => {
      const li = document.createElement("li");
      li.textContent = person.name;

      const btn = document.createElement("button");
      btn.textContent = "View";
      btn.addEventListener("click", () => {
        detailsEl.textContent = person.getFullDetails();
      });

      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  renderList();
});
