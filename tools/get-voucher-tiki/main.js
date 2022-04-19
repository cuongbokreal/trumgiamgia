var queryVoucher = '[data-brick-type="COUPON"] > div > div > div > div > div > div > div';

var voucher = document.querySelectorAll(`${queryVoucher}`);

var imageVoucher = document.querySelectorAll(`${queryVoucher} > div > div > div > div > img`);

var titleVoucher = document.querySelectorAll(`${queryVoucher} > div > div :nth-child(3)`);


console.log(voucher.length);


var detailVoucher = document.querySelectorAll('div > button > img')
var popupRoot = document.getElementById('popup-root');

for(let i=0; i<detailVoucher.length; i++){
  	detailVoucher[i].addEventListener("mouseover", function() {
    var deatilsVoucher = popupRoot.innerText;
    
    console.log(deatilsVoucher)
        })
}
