//var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(23) > div > div').childNodes;
var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(29) > div > div).childNodes;

    
Object.keys(listCoupon).forEach(key => {
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
    console.log(coupon)
    
    var coupon_left = coupon.childNodes[1];
    var coupon_right = coupon.childNodes[2];
    var counpon_image = coupon_left.childNodes[0].childNodes[0];
    console.log(counpon_image)
    
})



if(counpon_image.tagName === 'DIV'){
    	counpon_image = counpon_image.childNodes[0].childNodes[0].childNodes[0].src;//a
    }else{
    	counpon_image = counpon_image.childNodes[0].childNodes[0].src; //img
    }
    


