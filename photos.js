var queryString = window.location.search.substr(1);

document.addEventListener("DOMContentLoaded", () => {

    getPhotos(queryString);
})




function getPhotos(albumsId) {
    const id=queryString
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((response) => response.json())
        .then(data => {
            for (var  i = 0; i < data.length; i++) {
                if (data[i].albumId == albumsId) {

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

