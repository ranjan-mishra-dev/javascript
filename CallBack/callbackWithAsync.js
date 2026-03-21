// CALLBACK when a function passed as argument to another function it called callback.

// but WHY WE NEEDED at first place: 
// problem that we were facing to complete a task we have to wait for its final conclusion whether it is done or not
// but when callback arrived it said just tell me which task you want to do and you don't have to waiting for task complete i will let you know,
// you can move to next task work means you can call next function.

// Then WHAT PROBLEM ARISE bcz of callback:
// because of nested function call if at any place any line of code blust then you have to go through all that nested function to findout bug it is like for
// 1 function bad behaviour you running behind 10 function to find out which one is bad.Then

// so BETTER SOLUTION of callback arrived in market called: Promises



function test (callback) {

    setTimeout(() => {
        callback();
        console.log("Third from async");
    }, 2000);

    console.log("Second");
}

test(() => {
    console.log("First");
});

//output -> second -> first -> third from async


//Callback 2
function getData(callback) {
    setTimeout(() => {
        callback(1);
        console.log("get data first");
    }, 1000);
    
    console.log("I am get data fun");
}

function getMoreData(a, callback) {
    setTimeout(() => {
        callback(a + 1);
        console.log("get data more data second");
    }, 1000);

    console.log("I am from get more data fun");
}

function getEvenMoreData(b, callback) {
    setTimeout(() => {
        callback(b + 1);
        console.log("get even more data third");
    }, 1000);
    
    console.log("I am from get even more data fun");
}

function getDataSave(c, callback) {
    setTimeout(() => {
        callback(c + 1);
        console.log("get save data fourth");
    }, 1000);

    console.log("I am from saving data fun");
}


getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getDataSave(c, function(d) {
                console.log("Finally ur data saved :)");
                console.log("Variable d has: ", d);
            })
        })
    })
})