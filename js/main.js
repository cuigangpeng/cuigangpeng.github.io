var ad = document.getElementsByClassName('ad')[0];
var items = ad.getElementsByClassName('item');
var bottom = ad.getElementsByClassName('bottom')[0];

for (var i = 0;i < items.length;i++) {
    var li = document.createElement('li');
    bottom.insertBefore(li,bottom.children[0]);
}

bottom.children[0].className = "current";

// var scrollImgWidth = ad.offsetWidth;
// for (var j = 0;j < items.length; j++) {
//     items[j].style.left = scrollImgWidth/10 + "rem";
// }

for (var k = 0;k < bottom.children.length;k++) {
    (function (index) {
        bottom.children[index].onmouseover = function () {
            for (var l = 0;l < bottom.children.length;l++) {
                bottom.children[l].className = "";
                items[l].style = "display: none";
            }
            bottom.children[index].className = "current";
            items[index].style = "display: block";
        } 
    })(k)  
}

//设置定时器
var btn = document.getElementById('btn');
var p = 1;
var timer = setInterval(() => {
    for (var l = 0;l < bottom.children.length;l++) {
        bottom.children[l].className = "";
        items[l].style = "display: none";
    }
    if (p > 2) {
        p = 0;
        bottom.children[p].className = "current";
        items[p].style = "display: block";
    }else{
        bottom.children[p].className = "current";
        items[p].style = "display: block";
    }
    p++;
}, 2000);

// ad.onmouseover = function () {
//     clearTimeout(timer);
// }

// ad.onmouseout = function () {
//     timer = setInterval(() => {
//         for (var l = 0;l < bottom.children.length;l++) {
//             bottom.children[l].className = "";
//             items[l].style = "display: none";
//         }
//         if (p > 2) {
//             p = 0;
//             bottom.children[p].className = "current";
//             items[p].style = "display: block";
//         }else{
//             bottom.children[p].className = "current";
//             items[p].style = "display: block";
//         }
//         p++;
//     }, 2000);
// }



