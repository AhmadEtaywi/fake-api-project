'use strict';

var users = [];

async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return await response.json();
    
}
document.addEventListener("DOMContentLoaded", () => {
    getUsers().then((data) => {
        users = data
    })
});

function getInfo(event) {
    event.preventDefault()
    const userName = document.getElementById("email").value
    var user;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === userName) {
            user = users[i];
            break;
        }
    }
    
    if (!user) {
        document.getElementById('wrong-pass').innerHTML = "Wrong Email please Try again !!!!";
    } else {
        // localStorage.setItem("currentUser", JSON.stringify(user));
        var testUser=users[i].id;
        document.location.href = `/albums.html?${testUser}`
    }

}
