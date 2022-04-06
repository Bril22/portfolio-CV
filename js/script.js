

// About tabs
const tabsContainer = document.querySelector(".about-text"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (a) =>{
    if(a.target.classList.contains("tab-item") && !a.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        a.target.classList.add("active");
        const target = a.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})