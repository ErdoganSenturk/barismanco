




let bcolor = document.getElementById("barismanco");


bcolor.addEventListener("click", () =>{

  let  randomcolor = "#" + Math.floor(Math.random() * 16777215 ).toString(16);
  bcolor.style.webkitTextFillColor = randomcolor

} );