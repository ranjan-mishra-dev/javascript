// Profile + Posts + Followers + Notifications

async function loadDastBoard () {
    const id = await getUser();
    console.log(id);

    const pos = await posts(id.id);
    console.log(pos);

    const follower = await followers(id.id);
    console.log(follower);

    const noti = await getNotification(id.id);
    console.log(noti);
}


function getUser () {
    console.log("fetching profile id");
    return {id: 1, name: "ranjan"};
}

function posts(id) {
    console.log("loading your posts...");
    return {'post1': 'mumbai.png', 'post2': 'kashmir.png', 'post3': 'kolkata.jpg'};
}

function followers() {
    console.log("plz wait...");
    return {1: "rohan", 2: "deepak", 3: "vishwanath"};
}

function getNotification() {
    console.log('3 notifcation');
    return {like: "mumbai post", like: "kolkata post", comment: "kashmir post"};
}

loadDastBoard();