
//Make the DIV element draggagle:
dragElement(document.getElementById("sidebar"));

function dragElement(elmnt)
{
	var pos1 = 0,  pos2 = 0, opac = 0;
	var wd = elmnt.offsetWidth;
	 
	elmnt.onmousedown = function(){ dragRight(), dragMouseDown()};
	  
	function dragRight()
	{    
	    if(elmnt.offsetLeft <= -240)
	    {  
	       elmnt.style.left = (-240) + "px";
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
	    document.onmousemove = function()
	    {
    		if(elmnt.offsetLeft >= -250 && elmnt.offsetLeft <= 0)
        	{
        		elementDrag();
        	}
    	};
	}

	function elementDrag(e)
	{
		e = e || window.event;
    	e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos2 - e.clientX;
		pos2 = e.clientX;
		// set the element's new position:
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		
	    elmnt.style.transition = "left 0s";

	    if(elmnt.offsetLeft <= -250)
	    {
	    	elmnt.style.left = "-250px";
	    }
	    if(elmnt.offsetLeft >= 0)
	    {
	    	elmnt.style.left = "0px";
	    }


	    backTab();
  	}

	function closeDragElement() {
	    /* stop moving when mouse button is released:*/
	    document.onmouseup = null;
	    document.onmousemove = null;

	    backTab();

	    posOnclose();
	}

	function posOnclose(){
		elmnt.style.transition = "left 0.4s";
	    if(elmnt.offsetLeft > -125)
	    {
	        elmnt.style.left = "0px";
	    }
	    else
	    {
	   		elmnt.style.left = "-250px";
	    }
	}

	var lf = 0;
	function backTab(){
		var z = document.getElementById("backtab");
	    opac = 1+(elmnt.offsetLeft/250);
	    if(elmnt.offsetLeft > -150 )
	    {      
	        z.style.visibility = "visible";
	    }
	    else
	    {
	        z.style.visibility = "hidden";
	    }

	    lf = elmnt.offsetLeft;
		if(lf <= -150)
		{opac = 0;}
		else
		{opac = 0.5;}
	    z.style.opacity = opac;
	}
}