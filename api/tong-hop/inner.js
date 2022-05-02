var innerData = dataVoucher.replaceAll(`
`,"<br/>");

var innerMain = document.getElementById('innerMain');

innerMain.innerHTML = innerData;
