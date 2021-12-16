function copyKetQua(){
	var copyText = document.getElementById("inputKetQua");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the: " + copyText.value);
}
var inputKetQua = document.createElement('input');
inputKetQua.setAttribute("id", "inputKetQua");
inputKetQua.setAttribute("onclick", "copyKetQua()");
inputKetQua.setAttribute("style", "text-align: center;width: 100%;");
document.body.append(inputKetQua)

var getHeader = document.querySelectorAll('#main > div > div > div > div > div > div > div');
var getTitle = getHeader[1].innerText;
var getBrand = getHeader[0].innerText;
var getBody =  document.querySelectorAll('#main > div > div > div > div > div > div');
var getDes = getBody[8].innerText;
var getImg = document.querySelectorAll('#main > div > div > div > div > div > div > div > div > div')[0].getAttribute('style');
getImg = getImg.replaceAll('background-image: url("','');
getImg = getImg.replaceAll('"); background-size: contain; background-repeat: no-repeat;','');
var getHref = document.querySelector('div > button > a').href;

var ketQua = `https://trumgiamgia.tk/voucher-details?vc_title=${getTitle}&vc_des=${getDes}&vc_brand=${getBrand}&vc_code=&vc_brand_image=${getImg}&vc_href=${window.btoa(getHref)}&ctvId=Cuongbok`;

getTitle = getTitle.replaceAll("%","%25");
getTitle = getTitle.replaceAll("&","%26");
getDes = getDes.replaceAll("%","%25");
getDes = getDes.replaceAll("&","%26");
ketQua = ketQua.replaceAll(" ","%20");

inputKetQua.value = ketQua;

document.getElementById('inputKetQua').addEventListener("click", function(){
	var copyText = document.getElementById("inputKetQua");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the: " + copyText.value);
});
