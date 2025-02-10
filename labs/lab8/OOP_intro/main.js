// TASK: represent next info:
// student:
//     - name: string ('Maria')
//     - score: number (5)
// Each student can greet

//NOT  GOOD
const student1Name = "Maria";
const student1Score = 5;

console.log(student1Name, student1Score);

const greet = (studentName, studentScore) => {
  console.log(`Hi, I'm ${studentName}. I have ${studentScore}.`);
};
greet(student1Name, student1Score);

//with Arrays
const studentScore = (studentName, studentScore) => {
  console.log(`Hi, I'm ${studentName}. I have ${studentScore}`);
};

studentScore(student1Name, student1Score);

const student1Arr = ["Maria", 5];
console.log(`name: ${student1Arr[0]}`);

console.log("*******");

// with Objects
const student1Obj = {
  score: 5,
  name: "Maria",
};

// RAM:
//     student1Arr:0x1234:
//             [0]:0x231: 'Maria'
//             [1]:0x234: 5

//     student1Obj:0x1234:
//         name:0x231: 'Maria'
//         score:0x234: 5

let dictionary = {
  // съвкупност от 'key':'value' двойки
  apple: "ябълка",
  banana: "банан",
  orange: "портокал",
};

let student1 = {
  // properties:
  name: "Pesho",
  address: {
    town: "Sofia",
    zip: 1508,
  },
  scores: [3, 4, 5],

  // methods
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

/* ------------------------ Access properties values ------------------------ */
//Dot Notation
let arr1 = [1, 2];
let obj1 = {
  a: 1,
  b: 2,
};

console.log(arr1[0]);
console.log(obj1.a);
console.log(obj1.b);

console.log("-----------");

const developer1 = {
  firstName: "Ivan",
  surName: "Ivanov",
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    town: "Sofia",
    zip: 1504,
  },
  applyForJob: function () {
    const skillsStr = this.skills.toString();
    console.log(
      `Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`,
    );
  },
};

console.log(`${developer1.firstName} ${developer1.surName}`); // Ivan Ivanov
console.log(developer1.skills[1]); // CSS
console.log(developer1.address.town); // Sofia

//call developer1 method:
developer1.applyForJob();

console.log("++++++++++");

const students = [
  {
    name: "Maria",
    score: 5,
  },
  {
    name: "Pesho",
    score: 3,
  },
  {
    name: "Asen",
    score: 6,
  },
];

//Log student name with max score
let currentMaxScore = 0;
let currentMaxStudent = null;

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  if (student.score > currentMaxScore) {
    currentMaxScore = student.score;
    currentMaxStudent = student;
  }
}

console.log(`currentMaxScore: ${currentMaxScore}`);
console.log(`currentMaxStudent: ${currentMaxStudent.name}`);

console.log("+++++++++");

let arr = [1, 2];
let obj2 = { x: 1, y: 2 };

console.log(arr);
console.log(obj2);

const obj3 = {
  a: 1,
  b: 3,
  "1a": 2,
};

console.log(obj3.a);
console.log(obj3["a"]);
console.log(obj3["1a"]);

const propName = "b";
console.log(obj3.propName);
console.log(obj3[propName]);
