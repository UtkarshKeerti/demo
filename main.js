// function get_bigger(x){
//   x.style.height= "100px";
//   x.style.width= "100px";
// }

// function get_normal(y){
//   y.style.height= "30px";
//   y.style.width= "30px";
// }
// var x= document.getElementById("box");
// var y= document.getElementById("box-two");

// x.addEventListener('mouseenter', function(e){
//   e.target.style.height= "100px";
// })
// x.addEventListener('mouseleave', function(e){
//   e.target.style.height= "30px";
// })
// x.addEventListener('click', function(e){
//   e.target.style.height= "100px";
// })
// x.addEventListener('dblclick', function(e){
//   e.target.style.height= "100px";
// })

// y.addEventListener('click', function(){
//   x.classList.remove("box-none");
//   y.classList.add("box-none");
// })
// x.addEventListener('click', function(){
//   y.classList.remove("box-none");
//   x.classList.add("box-none");
// })

// x.addEventListener('mousemove', runEvent);

// function runEvent(e){
//   console.log(e.type);
//   x.style.backgroundColor= "rgb("+e.OffsetX+","+e.OffsetY+",25)";
// }

// x.addEventListener('mousemove', function color_change(e){
//  x.style.backgroundColor= "rgb("+e.offsetX+","+e.offsetY+",25)";
//   console.log("x: "+ e.offsetX+ ","+ "y: " +e.offsetY); 
// });

// function cords(event){
//   var a= event.clientX;
//   var b= event.clientY;
//   var cords= "X: "+a+", Y: "+b;
//   console.log(cords);
// }