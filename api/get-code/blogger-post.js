    var aMainCode = document.querySelector('#mainCode');
    var mainCode = document.querySelector('#mainCode > .code-text > input');
    var copyCodeButton = document.querySelector('#mainCode > span');
    mainCode.value = voucherCode;
    function copyVoucherCode() {
      var copyCode = document.querySelector('#mainCode > .code-text > input');
      copyCode.select();
      copyCode.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(copyCode.value);
      console.log("Copied the code: " + copyCode.value);
      setTimeout(function(){
      	window.open(window.location.href);
        window.location.replace(aMainCode.getAttribute("data-href"));
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
