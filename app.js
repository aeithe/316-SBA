const image = document.getElementById("img");

const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";

const navBar = document.createElement("nav");
navBar.style.height = "50%";
navBar.style.backgroundColor = "var(--nav-bg)"
navBar.classList.add = ("flex-ctr");
mainEl.append(navBar);

// console.log(navBar, menuLinks)

const menuLinks = [
    {text: 'home', link: '/index.html'},
    {text: 'contact', link: '/contact_index.html'}
];
console.log(navBar, mainEl);
navBar.forEach((link) =>{
    const aElement = document.createElement("a");
    aElement.link = link.link;
    aElement.textContent = link.text; 
    navBar.appendChild(aElement);

});