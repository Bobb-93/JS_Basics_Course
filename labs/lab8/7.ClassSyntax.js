// Клас Developer с конструктор и метод.
class Developer {
  constructor(firstName, surName, skills) {
    this.firstName = firstName;
    this.surName = surName;
    this.skills = skills;
  }

  applyForJob() {
    const skillsStr = this.skills.toString();
    console.log(
      `Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`,
    );
  }
}

// Създаване на обекти от класа Developer:
const developer1 = new Developer("Ivan", "Ivanov", [
  "HTML",
  "CSS",
  "JavaScript",
]);
const developer2 = new Developer("Maria", "Mineva", [
  "Python",
  "Machine Learning",
  "Data Science",
]);

developer1.applyForJob();
developer2.applyForJob();
