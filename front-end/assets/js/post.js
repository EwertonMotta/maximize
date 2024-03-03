const postContainer = document.getElementById("post");
const url = "http://localhost:8081/api/post/" + document.URL.split("/").pop();
const title = document.getElementById("title");

getPost();

async function getPost() {
    const response = await fetch(url);
    const data = await response.json();
    mountPost(data.data);
}

function mountPost(post) {
    postContainer.innerHTML = "";
    title.innerHTML = post.title;
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">${post.title}</h1>
        <img class="h-auto max-w-full rounded-lg mx-auto my-10" src="${post.image}" alt="">
        <div class="w-3/4 mx-auto">
            <p class="mb-3 font-normal text-gray-700 text-justify">${post.description}</p>
            <p class="mb-3 font-normal text-gray-700 text-justify">${post.body}</p>
            <p>${post.published_at}</p>
        </div>
    `;
    postContainer.appendChild(postElement);
}
