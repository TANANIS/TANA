document.addEventListener("DOMContentLoaded", () => {
  // 導航欄展開與縮回
  const nav = document.querySelector("nav");

  // 當滑鼠懸停時展開導航欄
  nav.addEventListener("mouseover", () => nav.classList.add("expanded"));

  // 當滑鼠移開時縮回導航欄
  nav.addEventListener("mouseout", () => nav.classList.remove("expanded"));

  // 聯絡我按鈕的縮放效果
  const contactButtons = document.querySelectorAll(".contact-button");

  contactButtons.forEach((button) => {
    button.addEventListener("mouseover", () => button.classList.add("scale-up"));
    button.addEventListener("mouseout", () => button.classList.remove("scale-up"));
  });
});

(function() {
// 假設我們已經有一個存儲留言的數組
const comments = [];

// 發佈留言
window.postComment = function() {
  const name = document.getElementById("commentName").value.trim();
  const text = document.getElementById("commentText").value.trim();

  if (name && text) {
    const comment = { name, text, replies: [] };
    comments.push(comment);
    renderComments();
    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";
  } else {
    alert("請填寫姓名和留言內容！");
  }
};

// 回覆留言
window.replyComment = function(index, replyText) {
  if (replyText) {
    comments[index].replies.push(replyText);
    renderComments();
  } else {
    alert("請填寫回覆內容！");
  }
};

// 渲染留言
function renderComments() {
  const commentList = document.querySelector(".comment-list");
  commentList.innerHTML = "";

  comments.forEach((comment, index) => {
    const commentCard = document.createElement("div");
    commentCard.className = "comment-card";

    commentCard.innerHTML = `
      <div class="comment-header">
        <span>${comment.name}</span>
        <button class="reply-button" onclick="toggleReplyForm(${index})">回覆</button>
        <span>回覆 (${comment.replies.length})</span>
      </div>
      <div class="comment-text">${comment.text}</div>
      <div class="reply-form-container ${comment.replies.length ? 'visible' : ''}">
        <textarea class="reply-textarea" placeholder="回覆留言..."></textarea>
        <button class="reply-submit-button" onclick="replyComment(${index}, this.previousElementSibling.value)">發佈回覆</button>
        ${comment.replies.map(reply => `<div class="reply-text">- ${reply}</div>`).join('')}
      </div>
    `;

    commentList.appendChild(commentCard);
  });
}

// 顯示/隱藏回覆表單
window.toggleReplyForm = function(index) {
  const replyFormContainer = document.querySelector(`.comment-card:nth-child(${index + 1}) .reply-form-container`);
  replyFormContainer.classList.toggle("visible");
};
})();
