var voucher = document.querySelectorAll('[data-brick-type="COUPON"] > div > div > div > div > div');

var labelVoucher = document.querySelectorAll('[data-brick-type="COUPON"] > div > div > div > div > div > div > div > div > div > div > div');

var imageVoucher = document.querySelectorAll('[data-brick-type="COUPON"] > div > div > div > div > div > div > div > div > div > div :nth-child(1) > img'); //.getAttribute('src')

var titleVoucher = document.querySelectorAll('[data-brick-type="COUPON"] > div > div > div > div > div > div > div > div > div :nth-child(3)'); //titleVoucher[i] = titleVoucher[i] .replace(``," ");

console.log(titleVoucher[0].innerText)

var detailVoucher = document.querySelectorAll('div > button > img')
var popupRoot = document.getElementById('popup-root');

for(let i=0; i<detailVoucher.length; i++){
  	detailVoucher[i].addEventListener("mouseover", function() {
    var deatilsVoucher = popupRoot.innerHTML;
    
    	console.log()
        })
}
