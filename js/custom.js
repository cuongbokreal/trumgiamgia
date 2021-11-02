//custom tí background cho ngựa ngựa =-))
var listBgColor = ["ffeeee",//hồng nhạt
    "#eee3ff",//tím hơi nhạt
    "#b7b6e4",//tím hơi đậm
    "#ffe3eb",//hồng hơi nhạt
    "#d4bdb9",//nâu nhạt
    "#c5ce67",//xanh cức
    "#f38b8b",//đỏ tươi
    "#8bcff3",//xanh facebook
    ]
randomBgColor = listBgColor[Math.floor(Math.random() * listBgColor.length)];
document.getElementsByClassName('voucher-main')[0].style.background = randomBgColor;
