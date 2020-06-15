//responsywnosc
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
//to do list;

var butacc = document.getElementById("butacc");

butacc.addEventListener("click",function(){
    var poleacc = document.getElementById("poleacc"); 
    var beforetext = document.getElementById("beforetext");   
    var inputValue = poleacc.value;

    var h = document.createElement("DIV");
    var delButton = document.createElement("BUTTON");
    var editButton = document.createElement("BUTTON");
    

    delButton.innerHTML = "✖";
    editButton.innerHTML = "EDIT";
    h.className = 'beforetext';
    var t = document.createTextNode("  " + inputValue);

    
    h.appendChild(editButton);
    h.appendChild(t);
    
    
    beforetext.appendChild(h);


    editButton.onclick = function(){
        var edittext = document.createElement("INPUT");
        var confirmButton = document.createElement("BUTTON");
        h.innerHTML="";
        h.appendChild(confirmButton);
        h.appendChild(edittext);
        h.appendChild(delButton);
        confirmButton.innerHTML = "✔";
        edittext.value = inputValue;

        confirmButton.onclick = function(){
            var inputValueChanged = edittext.value;
            var t2 = document.createTextNode("  " + inputValueChanged);
            editButton.innerHTML = "EDIT";
            h.innerHTML="";
  
            h.appendChild(editButton);
            h.appendChild(t2);
            //alert('changes actepted');

        }
    }

    
    delButton.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    

    
})
