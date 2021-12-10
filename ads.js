var dataBannerTop = [
    	{"title":"12.12 Birthday Sale (12.12 Siêu Sale Sinh Nhật)",
"imgUrl":"https://i.imgur.com/46hsiZu.jpg",
         "href":"https://shorten.asia/p4fSpxaH",
        },
        {"title":"VN - All - Payday",
"imgUrl":"https://i.imgur.com/YHM1Qtw.jpg",
         "href":"https://shorten.asia/juE3j2Nw",
        },
{"title":"VN - All - Payday - Yêu Việt Nam dùng hàng Việt Nam",
"imgUrl":"https://i.imgur.com/qhYmBne.jpg",
         "href":"https://shorten.asia/ZvKxA1h8",
        },
{"title":"VN - All - Payday - Cashback",
"imgUrl":"https://i.imgur.com/pnc3Kei.jpg",
         "href":"https://shorten.asia/67HBbYYa",
        },
{
"title":"VN - All - Payday - Ha Noi",
"imgUrl":"https://i.imgur.com/ObLfQCV.jpg",
"href":"https://shorten.asia/DWeB35gE",
},
{
"title":"VN - All - Payday  - Freeship Max",
"imgUrl":"https://i.imgur.com/ukYV8Hz.jpg",
"href":"https://shorten.asia/VxWKzEMd",
},
{
"title":"VN - All - Payday - Flexi Combo",
"imgUrl":"https://i.imgur.com/4Mp3RIX.jpg",
"href":"https://shorten.asia/J4H1BAHB",
},
{
"title":"VN - All - Payday - Hot Deal",
"imgUrl":"https://i.imgur.com/sLYLyBm.jpg",
"href":"https://shorten.asia/1kQWHcb3",
},
{
"title":"Lazada 12/12",
"imgUrl":"https://i.imgur.com/F0yhnrs.png",
"href":"https://shorten.asia/NpRQzrhS",
},
        {"title":"Giảm 20k người mới",
         "imgUrl":"https://i.imgur.com/fzXKohL.jpg",
         "href":"//https://blog.trumgiamgia.tk/2021/11/voucher-giam-20k-danh-cho-khach-hang-moi.html",
        },

    ]
var randomBannerTop = dataBannerTop[Math.floor(Math.random() * dataBannerTop.length)];
var innerBannerTop = `
<a href="${randomBannerTop.href}" alt="${randomBannerTop.title}" title="${randomBannerTop.title}" target="_blank">
<img alt="${randomBannerTop.title}" title="${randomBannerTop.title}" src="${randomBannerTop.imgUrl}" width="100%" height="auto" />
</a>
`;

document.getElementById('innerBannerTop').innerHTML = innerBannerTop;

var innerBanner1 = document.getElementById('innerBanner1');
var innerBanner2 = document.getElementById('innerBanner2');
var innerBanner3 = document.getElementById('innerBanner3');

if(innerBanner1){
    randomBannerTop = randomBannerTop +1;
    if( randomBannerTop > dataBannerTop.length){randomBannerTop = 0}
    innerBanner1.innerHTML = `
<a href="${randomBannerTop.href}" alt="${randomBannerTop.title}" title="${randomBannerTop.title}" target="_blank">
<img alt="${randomBannerTop.title}" title="${randomBannerTop.title}" src="${randomBannerTop.imgUrl}" width="100%" height="auto" />
</a>
`;}

if(innerBanner2){
    randomBannerTop = randomBannerTop +2;
    if( randomBannerTop > dataBannerTop.length){randomBannerTop = 0}
    innerBanner2.innerHTML = `
<a href="${randomBannerTop.href}" alt="${randomBannerTop.title}" title="${randomBannerTop.title}" target="_blank">
<img alt="${randomBannerTop.title}" title="${randomBannerTop.title}" src="${randomBannerTop.imgUrl}" width="100%" height="auto" />
</a>
`;}

if(innerBanner3){
    randomBannerTop = randomBannerTop +3;
    if( randomBannerTop > dataBannerTop.length){randomBannerTop = 0}
    innerBanner3.innerHTML = `
<a href="${randomBannerTop.href}" alt="${randomBannerTop.title}" title="${randomBannerTop.title}" target="_blank">
<img alt="${randomBannerTop.title}" title="${randomBannerTop.title}" src="${randomBannerTop.imgUrl}" width="100%" height="auto" />
</a>
`;}

