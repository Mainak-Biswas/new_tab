document.getElementById("backbtn").onclick = clstab;
document.getElementById("backtab").onclick = clstab;
//To close the tab using screen behind
function clstab()
{
  document.getElementById("sidebar").style.left = "-250px";

  var z = document.getElementById("backtab");
  z.style.visibility = "hidden";
  z.style.opacity = "0.0";
}


document.getElementById("tab").onclick = exptab;
function exptab()
{
  var y = document.getElementById("sidebar");
  var z = document.getElementById("backtab");

  y.style.left = "0px";

  z.style.visibility = "visible";
  z.style.opacity = "0.5";
}