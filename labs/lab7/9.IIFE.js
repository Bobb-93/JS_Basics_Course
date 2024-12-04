(function(){
    console.log("I am in nowhere, but I exist and work!");
})();

(function(){
    // нито една от променливите създадени чрез var или let, няма да бъде видима извън тази функция:

    var x = 42;
    console.log(`x in IIFE.js: ${x}`);
})();