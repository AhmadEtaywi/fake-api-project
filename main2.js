document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  getPosts(currentUser);
});

function getPosts(user) {
  const id = user["id"];
  const username = user["username"];
  const name = user["name"];

  fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    .then((Response) => Response.json())
    .then((albums) => {
      for (let i = 0; i < albums.length; i++) {
        console.log(albums[i].title);

        let albums_content = document.createElement("p");
        albums_content.textContent = albums[i].title;
        albums_content.classList.add("js-body");
        albums_content.setAttribute("id", `${albums[i].id}`);
        albums_content.setAttribute("onclick", `showComments(this)`);

        const subContainer = document.createElement("div");

        subContainer.appendChild(albums_content);

        const newDiv = document.createElement("div");
        newDiv.classList.add("inner-div");


            const lastContainer = document.createElement("div");
            lastContainer.classList.add("lastContainer");

        const postsContainer = document.querySelector(".test1");
        postsContainer.appendChild(subContainer);
      }
    });
}

function showComments(ele) {
  localStorage.albumsID = JSON.stringify(ele.id);
  localStorage.albumBody = JSON.stringify(ele.innerHTML);
  document.location.href = "/index3.html";
}


