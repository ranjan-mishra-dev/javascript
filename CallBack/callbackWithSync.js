// callback 1   

function test (callback) {
    callback();
    console.log("Second");
}

test(() => {
    console.log("First");
});

//output -> first -> second


//Callback 2
function getData(callback) {
    console.log("I am get data fun");
    callback(1);
    // console.log(1)
}

function getMoreData(a, callback) {
    console.log("I am from get more data fun");
    callback(a + 1);
}

function getEvenMoreData(b, callback) {
    console.log("I am from get even more data fun");
    callback(b + 1);
}

function getDataSave(c, callback) {
    console.log("I am from saving data fun");
    callback(c + 1);
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
}) //this is like calling getData method and passing function(a) and when function(a) get called then its body get executed.