dragEl(document.getElementById("sidebar"));

function dragEl(elmnt)
{
    var pos1 = 0,  pos2 = 0, opac = 1;

    elmnt.ontouchstart =  function(){ dragRt(), dragTouchDown()};
    
    function dragRt()
    {    
        if(elmnt.offsetLeft <= -240)
        {  
           elmnt.style.left = (-240) + "px";
        }
    }

    function dragTouchDown(e) 
    {
        e = e || window.event;
        e.preventDefault();
        
        // get the mouse cursor position at startup:
        pos2 = e.touches[0].clientX;
        document.ontouchend = closedragEl;
        // call a function whenever the cursor moves:
        document.ontouchmove = function()
        {
          if(elmnt.offsetLeft >= -250 && elmnt.offsetLeft <= 0)
            {
              elDrag();
            }
        };
    }

    function elDrag(e)
    {
    	e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos2 - e.touches[0].clientX;
        pos2 = e.touches[0].clientX;
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

    function closedragEl() {
      /* stop moving when mouse button is released:*/
        document.ontouchend = null;
        document.ontouchmove = null;
        
        posOnclose();
        backTab();
    }

    function posOnclose(){
        elmnt.style.transition = "left 0.4s";
        if(elmnt.offsetLeft > -150)
        {
            elmnt.style.left = "0px";
        }
        else
        {
            elmnt.style.left = "-250px";
        }
    }

    function backTab(){
        var z = document.getElementById("backtab");
      
        if(elmnt.offsetLeft < 150 )
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
