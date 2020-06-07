
//Make the DIV element draggagle:
dragElement(document.getElementById("sidebar"));

function dragElement(elmnt)
{
  var pos1 = 0,  pos2 = 0;
  if (document.getElementById(elmnt.id))
 
  document.getElementById(elmnt.id).onmousedown = function(){ dragRight(), dragMouseDown()};
  
  function dragRight()
  {    
    if(elmnt.offsetLeft <= -280)
    {  
       elmnt.style.left = (-280) + "px";
    }
  }
  
  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    
    // get the mouse cursor position at startup:
    pos2 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e)
  {
    e = e || window.event;
    e.preventDefault();

    //So that on rapid slide it does not slides much
    // if((elmnt.offsetLeft - pos1) <= -30 || elmnt.style.left <= "-30px")
    // {
      // calculate the new cursor position:
      pos1 = pos2 - e.clientX;
      pos2 = e.clientX;
      // set the element's new position:
      if(elmnt.offsetLeft<-30 )
	    {
	       moveDiv()
	    }
	    else{
	      elmnt.style.left = "-30px";
	    }
	    
	    if(elmnt.offsetLeft==-30 && pos1>=0)
	    {
	      	moveDiv();
	    }
	    
	    function moveDiv()
	    {
	      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		  }
      elmnt.style.transition = "left 0s";

      //Backtab actions
      var z = document.getElementById("backtab");
      if(elmnt.offsetLeft > -250 )
      {      
          z.style.visibility = "visible";
          z.style.opacity = "0.5";
      }
      else
      {
          z.style.visibility = "hidden";
          z.style.opacity = "0.0";

      }
    // }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.transition = "left 0.4s";
    if(elmnt.offsetLeft > -150)
    {
        elmnt.style.left = (-30) + "px";
    }
    else
   {
   		elmnt.style.left = (-290) + "px";
   }
  }
}



document.getElementById("backbtn").onclick = clstab;
document.getElementById("backtab").onclick = clstab;
//To close the tab using screen behind
function clstab()
{
  document.getElementById("sidebar").style.left = "-290px";

  var z = document.getElementById("backtab");
  z.style.visibility = "hidden";
  z.style.opacity = "0.0";
}


document.getElementById("tab").onclick = exptab;
function exptab()
{
  var y = document.getElementById("sidebar");
  var z = document.getElementById("backtab");

  y.style.left = "-30px";

  z.style.visibility = "visible";
  z.style.opacity = "0.5";
}
