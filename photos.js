const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const userName=currentUser.username;
const name1=currentUser.name;
const postID = JSON.parse(localStorage.albumsID);
const albumsTitle = JSON.parse(localStorage.albumBody);

document.addEventListener("DOMContentLoaded", () => {


        const post_content = document.createElement("p");
        post_content.classList.add("post_content");
        post_content.textContent = albumsTitle

        const container=document.querySelector(".show-Photos")

        const subContainer = document.createElement('div');
        container.appendChild(post_content)


    getComments(postID);
})




function getComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${postId}/photos`)
        .then((response) => response.json())
        .then(data => {
            for (var  i = 0; i < data.length; i++) {
                if (data[i].albumId == postId) {

                    const photos=document.createElement("img");
                    photos.src=data[i].thumbnailUrl
                    photos.classList.add("comment-username");

                    const photosTitle=document.createElement("h6");
                    photosTitle.textContent=data[i].title
                    photosTitle.classList.add("comment-nametag");

                    const container=document.querySelector(".show-Photos-2")
                    const subContainer=document.createElement('div')
                    subContainer.classList.add("show-Photos-3")
                    const comment=document.createElement("h6")                    
                    comment.classList.add("h6-comment")
                    comment.textContent=data[i].title
                    
                    subContainer.appendChild(photosTitle)
                    subContainer.appendChild(photos)
                    container.prepend(subContainer)
                }

            }
        })
}

