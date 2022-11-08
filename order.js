

 $("#click").click(function(){
    $(".show").toggle();
  });
 function load(){window.open("starters.html","f_name")} 
 function count(){document.getElementById("count").innerHTML="(5 items)";
                  document.getElementById("total").innerHTML="$500";
                  }
function cart(){var a=document.getElementById("orders").value;
                if(a==" "){
                  alert("Your cart is empty. Add items to kick off your order.");}}
function color(){document.getElementById("color").setAttribute("class","abc");
                  document.getElementById("color2").setAttribute("class","def"); } 
function color2(){document.getElementById("color2").setAttribute("class","abc");
                  document.getElementById("color").setAttribute("class","def");} 