var dataBannerTop = [
{"title":"22.12 Giáng Sinh Shopee",
"imgUrl":"https://i.imgur.com/l7EeJRp.jpg",
"href":"https://shorten.asia/VZRF41cV",
},
{
"title":"Lazada 12/12",
"imgUrl":"https://i.imgur.com/F0yhnrs.png",
"href":"https://shorten.asia/NpRQzrhS",
},
{
"title":"22.12 Christmas Tiki",
"imgUrl":"https://i.imgur.com/8vO82LA.png",
"href":"https://shorten.asia/T2fDfgHx",
},
{
"title":"TIKI DELI GIAO 2H + CODE ĐỘC QUYỀN DUY NHẤT 22.12.2021",
"imgUrl":"https://i.imgur.com/uSWdEXL.png",
"href":"https://shorten.asia/HgSzykxm",
},
    {
    "title":"[TIKI] 💥 ĐẠI TIỆC CÔNG NGHỆ MỪNG LỄ GIÁNG SINH 💥",
    "imgUrl":"https://i.imgur.com/CTAIl67.png",
    "href":"https://shorten.asia/YJ2JMPW3",
    },
    {
    "title":"LAZADA Sale Tất Niên",
    "imgUrl":"https://i.imgur.com/jk2UkeO.jpg",
    "href":"https://shorten.asia/8SKUnRmR",
    },
    {
    "title":"LAZADA Điện tử",
    "imgUrl":"https://i.imgur.com/2BAT7n3.jpg",
    "href":"https://shorten.asia/SE2d1aE1",
    },
    {
    "title":"Bạn mới đơn 0d",
    "imgUrl":"https://i.imgur.com/lvHM1JD.png",
    "href":"https://shorten.asia/BF4cyCFq",
    },
    {
]
var randomBannerTop = Math.floor(Math.random() * dataBannerTop.length);
console.log(randomBannerTop);
var innerBannerTop = `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;
document.getElementById('innerBannerTop').innerHTML = innerBannerTop;

var adsBanner = document.getElementsByClassName('adsBanner');
for(let i=1; i<adsBanner.length; i++){
    var adsId = document.getElementById(`innerBanner${i}`);
    if(adsId){
        randomBannerTop = randomBannerTop + i;
        if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
        console.log(randomBannerTop);
        adsId.innerHTML = `
    <a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
    <img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
    </a>
    <div class="closeBanner" onclick="closeBanner('innerBanner${i}')">
    <svg class="closeX" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>`;}
}

function closeBanner(idBanner){
	
  	document.getElementById(idBanner).style.display='none';
	setTimeout(function(){
			document.getElementById(idBanner).style.display='block';
		}
	, 15000);
}
