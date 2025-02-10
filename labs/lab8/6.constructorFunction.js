// Конструктор за обекти от тип Developer. Важно е да бъде извикан с "new"! Поради това конвенцията е името да започва с главна буква.
function Developer(firstName, surName, skills) {
  this.firstName = firstName;
  this.surName = surName;
  this.skills = skills;

  this.applyForJob = function () {
    var skillsStr = this.skills.toString();

    console.log(
      `Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`,
    );
  };
}

//сега лесно създаваме обектите от тип Developer:
var developer1 = new Developer("Ivan", "Ivanov", ["HTML", "CSS", "JavaScript"]);

var developer2 = new Developer("Maria", "Mineva", [
  "Python",
  "Machine Learning",
  "Data Science",
]);

developer1.applyForJob();
developer2.applyForJob();
