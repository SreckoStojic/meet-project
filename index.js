const aboutBtn = document.querySelector(".js-about-btn");
const downloadBtn = document.querySelector(".js-download-btn");

var mainDiv = document.querySelector(".css-main");
var body = document.querySelector("body");
    

aboutBtn.addEventListener("click", function(){
    const el = document.getElementById("secondStepper");
    el.scrollIntoView({behavior: "smooth"});
});

downloadBtn.addEventListener("click", async function(){
    mainDiv.classList.add("virus-remove");
    body.classList.add("virus-trollface");
    await setTimeout(function(){
        alert(`Next time scan files before downloading...\n\nSorry :/`);
    }, 1000);
        
    await setTimeout(function(){
        body.classList.remove("virus-trollface");
        mainDiv.classList.remove("virus-remove");
    }, 5000);
    
});



