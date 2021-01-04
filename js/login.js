window.onload = function () {
    function checkUsername() {
        let username = document.getElementById('Name2').value;

        var reg_username = /^([a-zA-Z0-9_-])/;

        let flag = reg_username.test(username);
        let s_username = document.getElementById('Name2');
        if (!flag) {
            alert('用户名有误！')
        }
    }
}