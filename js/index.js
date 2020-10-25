// 隐藏标签栏显示
function show() {
    var div = document.getElementById("tag-hide");
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else if (div.style.display === 'block') {
        div.style.display = 'none';
    }
}
// 回到顶部按钮出现
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 50) {
        document.getElementById('backTop').style.display = "block";
    } else {
        document.getElementById("backTop").style.display = "none";
    }
}
// 点击按钮回到顶部
function backTop() {
    var timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 80;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    })
}