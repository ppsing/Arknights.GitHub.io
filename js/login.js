// window.onload = function () {
//     function checkUsername() {
//         let username = document.getElementById('Name2').value;

//         var reg_username = /^([a-zA-Z0-9_-])/;

//         let flag = reg_username.test(username);
//         let s_username = document.getElementById('Name2');
//         if (!flag) {
//             alert('用户名有误！')
//         }
//     }
// }

function getCookie(name){
    let cookie1 = document.cookie;

    let arr = cookie1.split(";");

    for(let i = 0;i<arr.length;i++){
        let arr2 = arr[i].split("=");
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return false;
}

function setCookie(name,value,day){
    let date1 = new Date();

    let nowDate = date1.getDate();
    date1.setDate(nowDate+day);

    document.cookie = name+"="+value+";expires="+date1;
}

function removeCookie(name){
    setCookie(name,".",-1);
}