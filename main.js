//Splash Scerrn animation
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoheader');
let logoSpan = document.querySelectorAll('.logos');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    logoSpan.forEach((span, idx) => {
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx +1)*650)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        },( idx + 1)*50)
      })
    }, 2000);

    setTimeout(()=>{
      intro.style.top ='-100vh';
    }, 2300);
  })
})
// Highlight active section on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-container .links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // 120px offset for header
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
 // sidebar customization  
   const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnicon = document.querySelector('.toggle_btn i')
    const Dropdown =  document.querySelector('.dropdown')

    toggleBtn.onclick= function(){
        Dropdown.classList.toggle('open')
        const isOpen = Dropdown.classList.contains('open')

        toggleBtnicon.classList = isOpen
        ? 'fa-regular fa-circle-xmark'
        : 'fa-solid fa-bars-staggered'
    }
//constant selected nav color
const navLinks = document.querySelectorAll('.nav-container .links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    });
});
//typewriter
const texts = [
    "GRAPHIC-DESIGNER",
    "WEB-DEVELOPER",
    "PHOTOSHOP-EDITOR"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText,1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else{
        textIndex=(textIndex+1)% texts.length;
        characterIndex=0;
        setTimeout(typeWriter,500);
    }
}
window.onload = typeWriter
// Send To WhatsApp
function SendToWP(){
  let number = "+917003876552";

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let Number = document.getElementById('num').value;
  let msg = document.getElementById('msg').value;

  var url = "https://wa.me/"+ number +"?text="
  + "Name :. " +name+ "%0a"
  + "E-mail :. " +email+ "%0a"
  + "Phone NO :. " +Number+ "%0a"
  + "Purpose :. " +msg+ "%0a%0a";

  window.open(url, '_blank').focus();
}