const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


// variables declaration

const sectionOne = document.querySelector(".avatar-section")
const sectionTwo = document.querySelector(".img-section")

// Making the site to render different posts
function getRandomPost () {
    let post = Math.floor(Math.random() * posts.length)
    let  newPost = posts[post]
    return newPost
}

const random = getRandomPost();

function newRandomPost () {
        sectionOne.innerHTML = `<section class="avatar-section">
        <div>
        <img alt="${random.name}" id="ava" src="${random.avatar}">
    </div>
        <div>
        <h2>${random.name}</h2>
        <p>${random.location}</p>
    </div>
        `

        sectionTwo.innerHTML = `<img alt="main img" id="main-img" src="${random.post}">`
}

let count = 0;

document.getElementById("like-btn").addEventListener("dblclick", function(){
    count += 1
    document.querySelector("#likes").innerHTML = `${count} likes`

})
document.getElementById("main-img").addEventListener("dblclick", function(){
    count += 1
    document.querySelector("#likes").innerHTML = `${count} likes`

})

newRandomPost( )
