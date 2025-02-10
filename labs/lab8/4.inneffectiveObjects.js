var developer1 = {
  firstName: "Ivan",
  surName: "Ivanov",
  skills: ["HTML", "CSS", "JavaScript"],

  applyForJob: function () {
    var skillsStr = this.skills.toString();

    console.log(
      `Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`,
    );
  },
};
var developer2 = {
  firstName: "Maria",
  surName: "Mineva",
  skills: ["Python", "Machine Learning", "Data Science"],

  applyForJob: function () {
    var skillsStr = this.skills.toString();

    console.log(
      `Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`,
    );
  },
};

developer1.applyForJob();
developer2.applyForJob();
