// window.addEventListener("scroll", () => {
//     let scrollY = window.scrollY; // Get vertical scroll position
//     let rotation = scrollY / 5; // Divide by 5 to slow it down (increase this number for slower rotation)
//     document.getElementById("myimg").style.transform = `rotate(${rotation}deg)`;
//   });
  
let myimg = document.getElementById("myimg")
window.addEventListener("scroll", function(){

  const scrolldown = this.window.scrollY; 
  const rotation = this.scrollY/7; 
      myimg.style.transform = `rotate(${rotation}deg)`;





});