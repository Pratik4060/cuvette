let currentUser = {
          "id": "cfc7",
      "name": "Prashant",
      "email": "p@p.p",
      "password": "123"
    

}

const sections  = {
    login:document.getElementById("login-section"),
    signup:document.getElementById("signup-section"),
    dashboard:document.getElementById("dashboard-section"),
    tasks:document.getElementById("tasks-section"),
    notes:document.getElementById("notes-section")

}

function renderHeader (){
    const userInfo = document.getElementById("user-info");
    const logoutBtn = document.getElementById("logout-btn")
    const desktopNavLinks= document.getElementById("desktop-nav")



if(currentUser) {
userInfo.textContent= currentUser.email
logoutBtn.style.display = "inline"
desktopNavLinks.querySelector("#nav-dashboard").style.display = "inline"
desktopNavLinks.querySelector("#nav-tasks").style.display = "inline"
desktopNavLinks.querySelector("#nav-notes").style.display = "inline"
      
}else{
userInfo.textContent= ""
logoutBtn.style.display = "none"
desktopNavLinks.querySelector("#nav-dashboard").style.display = "none"
desktopNavLinks.querySelector("#nav-tasks").style.display = "none"
desktopNavLinks.querySelector("#nav-notes").style.display = "none"
}

}

renderHeader()


function route() {
    const hash  = window.location.hash || "#";
    const page = hash.substring(1)
    if(currentUser){

        switch(page){
            case "dashboard":
            break;
            case "tasks":
            break;
            case "notes":
            break;

            default:
                renderHeader();
        }
    } else {
        if (page === "login") {
            showSections("login");
        } else {
            showSections("signup");
        }
    }
}

function showSections(sectionName) {
    const availableSections = Object.values(sections)
    availableSections.forEach((item) => {
        item.style.display = "none";
    });

    if (sections[sectionName]) {
        sections[sectionName].style.display = "block";
    }
}
