window.onload = function () {
    var commentId = 2;
    var commentList = document.getElementById("commentList");
    var commentSubmit = document.getElementById("commentSubmit");
    var commentInput = document.getElementById("commentInput");
    var comment_delete;
    //delete
    function commentDelete() {
        comment_delete = document.querySelectorAll(".delete");
        for (var i = 0, len = comment_delete.length; i < len; i++) {
            comment_delete[i].onclick = function () {
                var comment = this.parentNode.parentNode;
                comment.remove();
            }
        }
    }
    commentDelete();


    commentSubmit.onclick = function (ev) {
        if (commentInput.value.length == 0) {
            alert("评论内容为空，无法发送");
            return;
        }
        let id = ++commentId;
        let ctx = commentInput.value;
        let timestamp = getTimestamp();
        commentInput.value = "";
        sendComment(id, ctx, getTimestamp());
        commentDelete();

    }

    function getTimestamp() {
        let date = new Date();
        let year = fillZero(date.getFullYear(), 4);
        let month = fillZero(date.getMonth() + 1, 2);
        let day = fillZero(date.getUTCDate(), 2);
        let hour = fillZero(date.getHours(), 2);
        let minutes = fillZero(date.getMinutes(), 2);
        let seconds = fillZero(date.getSeconds(), 2);
        let format = `${year}-${month}-${day} ${hour}:${minutes}`;
        return format;
    }

    function fillZero(num, totalLen) {
        let str = num.toString();
        let sum = totalLen - str.length;
        for (let i = 0; i < sum; i++) {
            str = "0" + str;
        }
        return str;
    }

    function sendComment(id, ctx, timestamp) {
        let template = `
  <div class="comment">
    <span class="comment-avatar">
      <img src="../source/common/avatar1.jpg" alt="avatar">
    </span>
    <div class="comment-content">
      <p class="comment-content-name">老陈</p>
      <p class="comment-content-article">${ctx}</p>
      <p class="comment-content-footer">
        <span class="comment-content-footer-id">#${id}</span>
        <span class="comment-content-footer-device">来自龙门客户端</span>
        <span class="comment-content-footer-timestamp">${timestamp}</span>
      </p>
        <a href="javascript:void(0);" class="delete">删除</a>
    </div>
    <div class="cls"></div>
  </div>
  `
        commentList.insertAdjacentHTML("afterbegin", template);
    }
}