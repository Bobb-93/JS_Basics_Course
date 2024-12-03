let foobar = [
    function () {
        console.log(`Foo`);
    },
    function () {
        console.log(`Bar`);
    }
]

foobar[0](); // 'Foo'
foobar[1](); // 'Bar'