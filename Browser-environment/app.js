
// const btnUpdate = document.getElementById("btn-main");
const btnUpdate = document.querySelector(".btn-main");

const headline = document.getElementById("headline");

// const items = document.getElementsByTagName("li");

const items = document.querySelectorAll("li");

// const highlights = document.getElementsByClassName("highlight");

const highlights = document.querySelectorAll(".highlight");

for ( const highlight of highlights ) {
    highlight.style.background = "cornsilk";
}


for (let i = 0; i < items.length; i++) {
    items[i].style.color = 'orchid';
}


btnUpdate.addEventListener("click", () => {
    headline.style.border = 'solid 2px red';
   
});