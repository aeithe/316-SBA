const menuLinks = [
    { text: "about", link: "about.html" },
    {text: "catalog", link: "allcakes.html" },
    { text: "top selling", link: "topcakes.html" },
        { text: "contact form", link: "contact_index.html" },
        { text: "our contact info", link: "contactInfo.html" },];
  
  const mainEl = document.querySelector("main");
  
  mainEl.style.background = "var(--main-bg)";

//   mainEl.innerHTML = "<h1>let them eat cake;</h1>";
  mainEl.classList.add("flex-ctr");
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.background = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  menuLinks.forEach((linkObj) => {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", linkObj.link);
    aEl.setAttribute("target", "_blank");
    aEl.textContent = linkObj.text;
    topMenuEl.append(aEl);
  });
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.background = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  const topMenuLinks = document.querySelectorAll("a");
  console.log(topMenuLinks);
  
  topMenuEl.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    } else {
      topMenuLinks.forEach((a) => a.classList.remove("active"));
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
      event.target.classList.toggle("active");
  
      if (event.target.classList.contains("active")) {
        const currentLink = event.target.innerHTML;
        menuLinks.forEach((link) => {
          if (link.text === currentLink) {
            if (link.hasOwnProperty("subLinks")) {
              subMenuEl.style.top = "100%";
              buildSubMenuEl(link.subLinks);
            } else {
              subMenuEl.style.top = "0";
            }
          }
        });
      }
    }
  });
  
  function buildSubMenuEl(array) {
    subMenuEl.innerHTML = "";
    array.forEach((link) => {
      let aEl = document.createElement("a");
      aEl.setAttribute("href", link.link);
      aEl.innerHTML = link.text;
      subMenuEl.append(aEl);
    });
  }
  
  subMenuEl.addEventListener("click", (event) => {
    // event.preventDefault();
    if (!event.target.matches("a")) {
      return;
    } else {
      subMenuEl.style.top = "0";
      topMenuLinks.forEach((link) => link.classList.remove("active"));
      mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
    }
  });

  const rightMouseClick = false; 
  function mouseClicks (n){
    if (n.button === 2){
        rightMouseClick = true;
        console.log("don't right click our images!!!!");
    }
    console.log(rightMouseClick);
  }
  document.addEventListener('mousedown', mouseClicks);
  document.addEventListener('contextmenu', function(n){
    n.preventDefault();
  });

document.addEventListener("click", myFunction1);
 
function myFunction1() {

    window.alert("order our cakes..... NOW!!! ")
}