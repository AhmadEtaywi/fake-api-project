  var queryString = window.location.search.substr(1);


document.addEventListener("DOMContentLoaded", () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(queryString);
  getPosts(queryString);
  
});

function getPosts(queryString) {
  const id = queryString
 
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    .then((Response) => Response.json())
    .then((albums) => {
      for (var i = 0; i < albums.length; i++) {

        const albums_content = document.createElement("p");
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

        const postsContainer = document.querySelector(".albums-Container");
        postsContainer.appendChild(subContainer);
      }
    });
}

function showComments(eli) {
  x=eli.id  
  document.location.href = `/Photos.html?${x}`;
}


