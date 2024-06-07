const menuLinks = [
    { text: "about", link: "about.html" },
    {text: "catalog", link: "allcakes.html" },
    { text: "top selling", link: "topcakes.html" },
        { text: "contact form", link: "contact_index.html" },
        { text: "our contact info", link: "contactInfo.html" },];
  
  const mainEl = document.querySelector("main");
  
  mainEl.style.background = "var(--main-bg)";


  
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.classList.add("flex-ctr");
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

  
  topMenuEl.addEventListener("click", (event) => {

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
  
  const form = document.getElementById("form");
  const name = form.elements["name"];
  const email = form.elements["email"];
  const zip = form.elements["zip"];
  const country = form.elements["country"];
  const password = form.elements["password"];
  
  form.addEventListener("submit", validate);

  function validate(evt) {
    const nameVal = validateName();
    if (nameVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const emailVal = validateEmail();
    if (emailVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const zipVal = validateZip();
    if (zipVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const countryVal = validateCountry();
    if (countryVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const passwordVal = validatePassword();
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    alert(`Name: ${nameVal}
  Email: ${emailVal}
  Country: ${countryVal}
  Zip Code: ${zipVal}
  Password: ...that's a secret.`);
  
    return true;
  }
  function validateEmail() {
    let emailVal = email.value;
  
    if (emailVal === "") {
      alert("Please provide an email.");
      email.focus();
      return false;
    }
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
  
    return emailVal;
  }
  
  function validateName() {
    if (name.value === "") {
      alert("Please provide a name.");
      name.focus();
      return false;
    }
    return name.value;
  }
  
  function validatePassword() {
    if (password.value === "") {
      alert("Please provide a password.");
      password.focus();
      return false;
    }
    return password.value;
  }
  
  function validateCountry() {
    if (country.value === "") {
      alert("Please provide a country.");
      country.focus();
      return false;
    }
    return country.value;
  }
  
  function validateZip() {
    if (zip.value === "") {
      alert("Please provide a zip code.");
      zip.focus();
      return false;
    }
  
    if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
      alert("Zip codes must be in the format #####.");
      zip.focus();
      return false;
    }
  
    return zip.value;
  }
  

