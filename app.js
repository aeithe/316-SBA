const image = document.getElementById("img");

const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";

const navBar = document.createElement("div");
navBar.style.height = ("50%");
navBar.style.backgroundColor = "var(--nav-bg)";
navBar.classList.add = ("flex");
navBar.style.justifyContent = ("center");
// navBar.style.position = ("float");
navBar.style.top = ("50%");
navBar.style.left = ("50%");
// navBar.translate = ("-50%, -50%");

// Object.assign(navBar.style,{
//     display: "flex",
//     justifyContent: "center",
//     position:"absolute",
//     top: "50%",
//     left: "50%",
//     // transform: "translate(-50%,-50%)"
// });


mainEl.append(navBar);

// console.log(navBar, menuLinks)

const menuLinks = [
    {text: 'home', link: '/index.html'},
    {text: 'contact', link: '/contact_index.html'}
];
console.log(navBar, mainEl);
// navBar.forEach((link) =>{
//     const aElement = document.createElement("a");
//     aElement.link = link.link;
//     aElement.textContent = link.text; 
//     navBar.appendChild(aElement);

// });