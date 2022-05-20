var dataBannerTop = [
	//Shopee
{"title":"Shopee tặng bạn 20k đơn 0d",
"imgUrl":"https://i.imgur.com/J0LyYCe.jpg",
"href":"https://shorten.asia/4xZASvyX",
},
//LAZADA
	{"title":"LAZADA Nhà Cửa Đời Sống",
	"imgUrl":"https://i.imgur.com/chcp9nX.jpg",
	"href":"https://shorten.asia/5CrAstQ7",
	},
	{"title":"LAZADA Tích Lũy 400k",
	"imgUrl":"https://i.imgur.com/A0pa01x.jpg",
	"href":"https://shorten.asia/VsMkQE7t",
	},
	{"title":"LAZADA Phố Bách Hóa",
	"imgUrl":"https://i.imgur.com/yAKBUAz.jpg",
	"href":"https://shorten.asia/X8Bsvewx",
	},
	{"title":"LAZADA Sinh Nhật",
	"imgUrl":"https://i.imgur.com/jNVGZxr.jpg",
	"href":"https://shorten.asia/Mw5exPsE",
	},

//Tiki
	{
	"title":"Friso TIKI",
	"imgUrl":"https://i.imgur.com/FSgqeV0.jpg",
	"href":"https://shorten.asia/nEZgSdeN",
	},
{
	"title":"TIKI Beauty Club",
	"imgUrl":"https://i.imgur.com/yBxEKxb.png",
	"href":"https://shorten.asia/ycJaP4T7",
	},
	{
	"title":"TIKI Săn deal điện tử",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/9c/ea/5d/d4fb710908d862484f14e6242dd1faf9.png.webp",
	"href":"https://shorten.asia/u2kKdER9",
	},
	{
	"title":"TIKI Tefal",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/51/bd/94/67779b0148758aab7b4032ed81667d5d.png",
	"href":"https://shorten.asia/AxBSkDU8",
	},
	{
	"title":"TIKI Tefal",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/76/82/9d/cd27350f0800d7562b02dac7832ef86a.png.webp",
	"href":"https://shorten.asia/ZFmSVrRq",
	},
	{
	"title":"TIKI Mọt sách ",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/06/3a/df/fc6b6eca994c362cefff33e6f35036a2.png.webp",
	"href":"https://shorten.asia/j81UhftS",
	},
	{
	"title":"TIKI Bách hóa",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/ed/b8/b9/8fbe0ff46848364ff6dd715d4e9287ed.png.webp",
	"href":"https://shorten.asia/a57WbuC5",
	},
	{
	"title":"TIKI MOM CLUB",
	"imgUrl":"https://salt.tikicdn.com/cache/w1080/ts/banner/e7/20/5c/16ec7f5b4a7198aa9bc67dd5a845c8f6.png.webp",
	"href":"https://shorten.asia/9nk1DfcW",
	},
	
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
