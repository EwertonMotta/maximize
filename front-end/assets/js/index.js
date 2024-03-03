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
            <a href="${post.url}" class="flex justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 my-4 p-2">
                <div class="flex  items-center">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${post.image}" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex-wrap">${post.title}</h5>
                        <p class="mb-3 font-normal text-gray-700">${post.description}</p>
                    </div>
                </div>
                <div class="mb-3 font-normal text-[0.75rem] text-gray-700w-48 flex justify-end items-end">
                    <span>${post.published_at}</span>
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
            li.innerHTML = `<a href="#"  onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">${link.label
                }</a>`;
        }
        if (link.active) {
            li.innerHTML = `<a href="#" onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">${link.label}</a>`;
        } else {
            li.innerHTML = `<a href="#" onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">${link.label}</a>`;
        }
        if (metaLinks[metaLinks.length - 1] === link) {
            li.innerHTML = `<a href="#"  onclick="getPosts(${page})" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">${link.label
                }</a>`;
        }

        pagination.appendChild(li);
    });
}
