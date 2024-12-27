var output = document.querySelector(".status > span");
var songItems = document.querySelectorAll(".songs>li");

// atach click event to all songItems elements
// the code is just a demo for closures. It is better instead of using for loop on each child node, to attach one event to the parent.
for (var i = 0, len = songItems.length; i < len; i++) {
	// i is global varaiable! Thus, when the function is invoked, if we do not preserve the state of i (by using IIFE to create a closure),
    //  i in function will be always 6.
  (function(j) {
    songItems[j].addEventListener("click", function() {
      output.innerHTML = j + 1;
    });
  })(i);
}