function brewCoffe (order) {

    return new Promise((resolve, reject) => {

        if (order !== 'espresso') {
            return reject("sorry only expresso available")
        }

        console.log("wait 3 second we brewing ur coffee");
        setTimeout(() => {
            return resolve({success: 'Coffee is ready'});
        }, 3000);
    });
};

brewCoffe('espresso')
.then((msg) => {
    console.log(msg.success);
})
.catch((err) => {
    console.log(err);
})