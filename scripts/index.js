var image = document.querySelectorAll("#imageStyle");

for(var i = 0 ; i<image.length;i++)
{
image[i].addEventListener("mouseover",function(){
  this.style.width = "70%";
  this.style.opacity ="0.2";
  this.style.filter ="alpha(opacity=50%)";
});
image[i].addEventListener("mouseout",function(){
  this.style.width = "70%";
  this.style.transition = "1s";
  this.style.opacity ="0.9";

});
}


/* var for creator main */

var creator = document.querySelectorAll("#creator-main");

for(var i = 0 ; i<creator.length;i++)
{
  creator[i].addEventListener("mouseover",function(){
    this.style.textShadow = "0.5px 0.2px"
  });
}

// joining button script
let buttons = document.getElementsByClassName('card-button');

buttons[1].addEventListener('click',function(){
  location.href = "https://join.slack.com/t/techousworkspace/shared_invite/enQtNjk2OTAxMTY1NjY2LTQyYTJmMWIzMDRiMGU1NGIxNjI5NTg2NzUxNWI5ZGNmN2E0NDIzZDI1NDg1MjRmYjlhMTJmMjQ4ODg2OTRjNWU";
})
buttons[2].addEventListener('click',function(){
  location.href="https://github.com/TechOUs/Join-TechOUs";
})

document.getElementById('navigation-icon').addEventListener('click',openTopNav);

let links = document.getElementsByClassName('nav-links');
for(let i=0;i<links.length;i++)
{
  links[i].addEventListener('click',closeTopNav);
}

function openTopNav() {
  document.getElementById("topNavigation").style.width = "100%";
}

function closeTopNav() {
  document.getElementById("topNavigation").style.width = "0";
}