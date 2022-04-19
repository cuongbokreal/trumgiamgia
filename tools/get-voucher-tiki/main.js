var voucher = '[data-brick-type="COUPON"] > div > div > div > div > div > div > div';

var imageVoucher = document.querySelectorAll(`${voucher} > div > div > div > div > img`);

var titleVoucher = document.querySelectorAll(`${voucher} > div > div :nth-child(3)`);


console.log(titleVoucher[0], imageVoucher[0]);


var detailVoucher = document.querySelectorAll('div > button > img')
var popupRoot = document.getElementById('popup-root');

for(let i=0; i<detailVoucher.length; i++){
  	detailVoucher[i].addEventListener("mouseover", function() {
    var deatilsVoucher = popupRoot.innerText;
    
    console.log(deatilsVoucher)
        })
}
