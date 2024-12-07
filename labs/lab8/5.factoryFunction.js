// функция, създаваща обекти от тип developer:
function developerFactory(firstName, surName, skills){
    var obj = {};

    obj.firstName = firstName;
    obj.surName = surName;
    obj.skills = skills;

    obj.applyForJob = function(){
        var skillsStr = this.skills.toString();
        console.log(`Hi, I'm ${obj.firstName} ${obj.surName}. My strongest skills are ${skillsStr}.`);
    }

    return obj;
}

//сега лесно създаваме обектите от тип developer:
var developer1 = developerFactory("Ivan", "Ivanov",
["HTML", "CSS", "JavaScript"]
);
var developer2 = developerFactory("Maria", "Mineva",
["Python", "Machine Learning", "Data Science"],
);

// и сме сигурни, че всеки обект има пропърти 'firstName':
developer1.applyForJob();
developer2.applyForJob();