let student1 = {
    // properties:
    "name":"Pesho",
    "address":{
        "town":"Sofia",
        "zip": 1508
    },
    "scores": [3,4,5],

    // methods
    "greet": function() {
        console.log(`Hello, I'm ${this.name}. My max score is: ${this.findMaxScore()}`);
    },
    "findMaxScore": function () {
        let maxScore = 0;
        for (let i = 0; i < this.scores.length; i++) {
            const currentScore = this.scores[i];
            if(currentScore>=maxScore){
                maxScore=currentScore
            }
        }
        return maxScore;
    }
};

student1.greet()