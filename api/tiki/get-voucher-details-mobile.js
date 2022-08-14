//var listCoupon = document.querySelector('#__next > div.page-builder-desktop > main > div > div:nth-child(24) > div > div > div > div').childNodes;
var listCoupon = document.querySelector('#__next > div.page-builder-desktop > main > div > div:nth-child(30) > div > div > div > div').childNodes;


    
Object.keys(listCoupon).forEach(key => {
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
	var coupon_left = coupon.childNodes[1];
    var coupon_right = coupon.childNodes[2];
    
    //var counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].src; //img
    //var counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src;//a
    
    var counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0];
    if(counpon_image.tagName === 'DIV'){
    	counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src;//a
    }else{
    	counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].src; //img
    }
    
    var coupon_details_button = coupon_right.childNodes[0];
    coupon_details_button.click();
    console.log(document.getElementById('popup-root').innerText)
})
