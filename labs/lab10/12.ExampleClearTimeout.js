let nodes = {
  userDelay: document.querySelector('input[type="number"]'),
  userColor: document.querySelector('input[type="color"]'),
  btnStart: document.querySelector(".start"),
  btnCancel: document.querySelector(".cancel"),
};

function getInputValue(inputNode) {
  return inputNode.value;
}
function changeBodyBackground(color) {
  document.body.style.background = color;
}

var timerID; // should it be global?

// attach events:
nodes.btnStart.addEventListener("click", function () {
  // we need a number type ('4'*1 = 4):
  let userDelay = getInputValue(nodes.userDelay) * 1;
  console.log(`userDelay=${userDelay}`);

  let userColor = getInputValue(nodes.userColor);
  console.log(`userColor=${userColor}`);

  // set userColor as body background, after userDelay:
  timerID = setTimeout(changeBodyBackground, userDelay, userColor);
});

nodes.btnCancel.addEventListener("click", function () {
  console.log(`Timer canceled!`);
  clearTimeout(timerID);
});

/*
First way: 

(() => {
    let nodes = {
        userDelay: document.querySelector('input[type="number"]'),
        userColor: document.querySelector('input[type="color"]'),
        btnStart: document.querySelector(".start"),
        btnCancel: document.querySelector(".cancel")
    };

    function getInputValue(inputNode) {
        return inputNode.value;
    }

    function changeBodyBackground(color) {
        document.body.style.background = color;
    }

    let timerID; // Scoped to this function

    // Attach events:
    nodes.btnStart.addEventListener("click", function () {
        // We need a number type ('4' * 1 = 4):
        let userDelay = getInputValue(nodes.userDelay) * 1;
        console.log(`userDelay=${userDelay}`);

        let userColor = getInputValue(nodes.userColor);
        console.log(`userColor=${userColor}`);

        // Set userColor as body background after userDelay:
        timerID = setTimeout(changeBodyBackground, userDelay, userColor);
    });

    nodes.btnCancel.addEventListener("click", function () {
        console.log(`Timer canceled!`);
        clearTimeout(timerID);
    });
})();


*/

/*
Second way:
const app = {
    timerID: null,
    nodes: {
        userDelay: document.querySelector('input[type="number"]'),
        userColor: document.querySelector('input[type="color"]'),
        btnStart: document.querySelector(".start"),
        btnCancel: document.querySelector(".cancel")
    },
    getInputValue(inputNode) {
        return inputNode.value;
    },
    changeBodyBackground(color) {
        document.body.style.background = color;
    },
    startTimer() {
        let userDelay = this.getInputValue(this.nodes.userDelay) * 1;
        console.log(`userDelay=${userDelay}`);

        let userColor = this.getInputValue(this.nodes.userColor);
        console.log(`userColor=${userColor}`);

        this.timerID = setTimeout(this.changeBodyBackground, userDelay, userColor);
    },
    cancelTimer() {
        console.log(`Timer canceled!`);
        clearTimeout(this.timerID);
    }
};

// Attach events:
app.nodes.btnStart.addEventListener("click", app.startTimer.bind(app));
app.nodes.btnCancel.addEventListener("click", app.cancelTimer.bind(app));
*/
