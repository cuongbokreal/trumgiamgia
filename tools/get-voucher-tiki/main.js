//jQuey để mouseOver
var jQuery = '<script src="https://code.jquery.com/jquery-3.5.0.js"></script>';
document.body.innerHTML += jQuery;

var detailVoucher = document.querySelectorAll('div > button > img')
var popupRoot = document.getElementById('popup-root');

for(let i=0; i<detailVoucher.length; i++){
  	detailVoucher[i].mouseover();
    console.log(popupRoot.innerHTML)
}
