
document.getElementById("lgbox").onclick = showlg;
function showlg()
{

  var w = document.getElementById("backtc");
    w.style.visibility = "visible";
    w.style.opacity = "1";
  var y = document.getElementById("qqs");
    y.style.visibility = "visible";
    y.style.opacity = "1";

}



document.getElementById("backtc").onclick = hidelg;
document.getElementById("cross").onclick = hidelg;
function hidelg()
{

  var w = document.getElementById("backtc");
    w.style.visibility = "hidden";
    w.style.opacity = "0";
  var y = document.getElementById("qqs");
    y.style.visibility = "hidden";
    y.style.opacity = "0";

}

