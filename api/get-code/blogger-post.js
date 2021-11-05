    var aMainCode = document.querySelector('#mainCode');
    var mainCode = document.querySelector('#mainCode > input');
    var copyCodeButton = document.querySelector('#mainCode > span');
    mainCode.value = voucherCode;
    function copyVoucherCode() {
      var copyCode = document.querySelector('#mainCode > input');
      copyCode.select();
      copyCode.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(copyCode.value);
      console.log("Copied the code: " + copyCode.value);
      setTimeout(function(){
      	window.open(aMainCode.getAttribute("data-href"));
      }, 10);  
    }
    
    setInterval(function(){
		copyCodeButton.style.display ='block';
      	copyCodeButton.setAttribute("class", "get-code");
    }, 3000);
