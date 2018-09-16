var image = document.querySelectorAll("#imageStyle");

for(var i = 0 ; i<image.length;i++)
{
image[i].addEventListener("mouseover",function(){
  this.style.width = "100%";
});
image[i].addEventListener("mouseout",function(){
  this.style.width = "70%";
  this.style.transition = "3s";
});
}
