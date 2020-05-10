var bars = document.getElementById("bars");
bars.addEventListener("click",function(){
    var header = document.getElementById("header");
    if(screen.width < 451){
        if(header.style.display === "none")
        {
            header.style.display = "block";
        }
        else
        {
            header.style.display = "none";
        }
    }
  //  console.log(screen.width)
    
});
