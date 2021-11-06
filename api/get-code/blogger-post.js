    var aMainCode = document.querySelector('#mainCode');
    var mainCode = document.querySelector('#mainCode > .code-text > input');
    var copyCodeButton = document.querySelector('#mainCode > span');
    mainCode.value = window.atob(voucherCode);
    function copyVoucherCode() {
      var copyCode = document.querySelector('#mainCode > .code-text > input');
      copyCode.select();
      copyCode.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(copyCode.value);
      console.log("Copied the code: " + copyCode.value);
      setTimeout(function(){
      	//window.open(window.location.href);
        window.location.href = aMainCode.getAttribute("data-href");
      }, 10);  
    }
    document.body.setAttribute("oncopy", "copyVoucherCode()");
    mainCode.setAttribute("oncopy", "copyVoucherCode()");

    setInterval(function(){
	copyCodeButton.style.display ='block';
      	copyCodeButton.setAttribute("class", "get-code");
	mainCode.setAttribute("oncopy", "copyVoucherCode()");
	document.body.setAttribute("oncopy", "copyVoucherCode()");
    	mainCode.setAttribute("oncopy", "copyVoucherCode()");    
    }, 3000);

//block rightmouse
var message="NoRightClicking"; 
function defeatIE() {
	if (document.all) {(message);return false;}
} 
function defeatNS(e) {
	if (document.layers||(document.getElementById&&!document.all)) { 
		if (e.which==2||e.which==3) {(message);return false;}
	}
} 
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=defeatNS;} 
else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;
    } 
document.oncontextmenu=new Function("return false")
