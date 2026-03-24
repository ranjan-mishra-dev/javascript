// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User fetched");
//         callback({ id: 1, name: "Ranjan" });
//     }, 1000);
// }

// function getOrders(userId, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched");
//         callback(["order1", "order2"]);
//     }, 1000);
// }

// function makePayment(orders, callback) {
//     setTimeout(() => {
//         console.log("Payment done for", orders.length, "orders");
//         callback("success");
//     }, 1000);
// }

// // Callback Hell
// getUser((user) => {
//     getOrders(user.id, (orders) => {
//         makePayment(orders, (status) => {
//             console.log("Final Status:", status);
//         });
//     });
// });

//convert this above code to Promise code

function getUser() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("user fetched");
            resolve({ id: 1, name: "Ranjan" });
        }, 1000);
    })
}

function getOrders(id) {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("order fetched");
            resolve(['oder1', 'order2']);
        }, 1000);
    })
}

function makePayment(id) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("payment successful");
            resolve({msg: "payment successful"});
        }, 1000);
    })
}

getUser()
.then((data) => {
    console.log("User name: ", data.name);
    return getOrders(data.id);
})
.then((data) => {
    console.log("length of order: ", data.length);
    return makePayment(data);
})
.then((data) => {
    console.log(data.msg)
})
.catch((err) => {
    console.log(err);
});