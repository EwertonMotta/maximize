const postsContainer = document.getElementById("posts");
const url = "http://localhost:8081/api/posts";

getPosts();

async function getPosts(page = 1) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    mountPostList(data.data);
    mountPagination(data.meta);
}

function mountPostList(posts) {
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <a href="${post.url}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4 p-2">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${post.image}" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${post.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${post.description}</p>
                </div>
            </a>
            `;
        postsContainer.appendChild(postElement);
    });
}

function mountPagination(meta) {
    const pagination = document.getElementById("pagination");
    const metaLinks = meta.links;
    pagination.innerHTML = "";

    metaLinks.forEach((link) => {
        let page = link.url !== null ? link.url.split("page=")[1] : 1;
        const li = document.createElement("li");

        if (metaLinks[0] === link) {
            li.innerHTML = `<a href="#"  onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${link.label
                }</a>`;
        }
        if (link.active) {
            li.innerHTML = `<a href="#" onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">${link.label}</a>`;
        } else {
            li.innerHTML = `<a href="#" onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${link.label}</a>`;
        }
        if (metaLinks[metaLinks.length - 1] === link) {
            li.innerHTML = `<a href="#"  onclick="getPosts(${page})"  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${link.label
                }</a>`;
        }

        pagination.appendChild(li);
    });
}
