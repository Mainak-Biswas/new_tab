dragEl(document.getElementById("sidebar"));

function dragEl(elmnt)
{
  var pos1 = 0,  pos2 = 0;
  if (document.getElementById(elmnt.id))
 
  document.getElementById(elmnt.id).ontouchstart =  function(){ dragRight(), dragMouseDown()};
  
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
    
    // get the mouse cursor position at startup:
    pos2 = e.touches[0].clientX;
    document.ontouchend = closedragEl;
    // call a function whenever the cursor moves:
    document.ontouchmove = elDrag;
  }

  function elDrag(e)
  {
    e = e || window.event;
    if(e.touches[0].clientX < 300)//So that on rapid slide it does not slides much
    {
      // calculate the new cursor position:
      pos1 = pos2 - e.touches[0].clientX;
      pos2 = e.touches[0].clientX;
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
    }
  }

  function closedragEl() {
    /* stop moving when mouse button is released:*/
    document.ontouchend = null;
    document.ontouchmove = null;
    elmnt.style.transition = "left 0.4s";
    if(elmnt.offsetLeft > -150)
    {
        elmnt.style.left = (-30) + "px";
    }
    else
   {
   		elmnt.style.left = (-290) + "px";
   }

   var z = document.getElementById("backtab");
   if(elmnt.style.left === "-30px" )
   {      
      z.style.visibility = "visible";
      z.style.opacity = "0.5";
   }
   else
   {
      z.style.visibility = "hidden";
      z.style.opacity = "0.0";

   }
  }
}
