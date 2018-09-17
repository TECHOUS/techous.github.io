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
