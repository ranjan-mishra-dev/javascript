const orderPlacing =  async() => {
    try {
        const id = await getUser();
        const cartItem = await getCard(id);
        const orderId = await checkOut(cartItem);
        await makePayment(orderId);

        console.log("Your order place successfully!");
    } catch (error) {
        console.log(error);
    }
};

orderPlacing();

function getUser() {
    console.log("fetching user detail");
    return {id: 1, name: 'ranjan'};
}

function getCard(id) {
    console.log("checking in data base");
    return ['order1', 'order2'];
}

function checkOut(cartItem) {
    console.log("calculating price");
    const total = cartItem.length * 10;
    return total;
}

function makePayment (paymentId) {
    console.log('wait processing ur payment');
}


// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ id: 1, name: "Ranjan" });
//         }, 1000);
//     });
// }

// function getCart(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Cart fetched");
//             resolve(["item1", "item2"]);
//         }, 1000);
//     });
// }

// function checkout(cart) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Checkout done");
//             resolve({ orderId: 101 });
//         }, 1000);
//     });
// }

// function makePayment(orderId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment successful");
//             resolve("success");
//         }, 1000);
//     });
// }