logo.onmouseenter = function(){
    logo.classList.add('logohovered');
    logo_words1.classList.add('logowordhovered');
    logo_words2.classList.add('logowordhovered');
    top_logo.classList.add('toplogohovered');

}
logo.onmouseleave = function(){
    logo.classList.remove('logohovered');
    logo_words1.classList.remove('logowordhovered');
    logo_words2.classList.remove('logowordhovered');
    top_logo.classList.remove('toplogohovered');
}
function openNav() {
    // document.getElementById("navigation").style.height = "50%";
    document.getElementById("navigation").style.width = "187px";
    nav_toggle.classList.add('rotateimg90');
    // document.getElementById("navigation").style.border-right = "1px black solid";
}

function closeNav() {
    // document.getElementById("navigation").style.height = "0px";
    document.getElementById("navigation").style.width = "0px";
    nav_toggle.classList.remove('rotateimg90');
    // document.getElementById("navigation").style.border-right = "0px black solid";
}
function toggleNav(){
    if (document.getElementById("navigation").style.width=="187px"){
        closeNav();
    }else{
        openNav();
    }
}
document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById("navigation");
    const button=document.getElementById("nav_toggle");
  
    if (!box.contains(event.target) && !button.contains(event.target) && box.style.width=="187px") {
        toggleNav();
    }
});