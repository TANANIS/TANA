document.getElementById("celebrate-btn").addEventListener("click", (event) => {
  // 點擊按鈕後執行
  const celebrateCelebrate = document.getElementById("celebrate"); // 取得紙雪容器
  const numcelebrate = 500; // 控制紙雪數量

  const buttonRect = event.target.getBoundingClientRect(); // 按鈕的位置信息
  const buttonCenterX = buttonRect.left + buttonRect.width / 2; // 按鈕中心位置
  const buttonCenterY = buttonRect.top + buttonRect.height / 2; // 按鈕中心位置

  for (let i = 0; i < numcelebrate; i++) {
    // 建立紙雪
    const celebratePiece = document.createElement("div");
    celebratePiece.className = "celebrate-piece"; // 設定紙雪類別
    celebratePiece.style.backgroundColor = getRandomColor();
    celebratePiece.style.width = `${Math.random() * 10 + 5}px`; // 設定紙雪大小
    celebratePiece.style.height = celebratePiece.style.width;
    celebratePiece.style.position = "absolute"; // 設定紙雪位置 = 絕對定位
    celebratePiece.style.left = `${buttonCenterX}px`; // 設定紙雪位置 = 按鈕中心
    celebratePiece.style.top = `${buttonCenterY}px`;
    celebratePiece.style.transform = "translate(-50%, -50%)"; // 初始位置對齊
    celebratePiece.style.opacity = 0; // 初始不透明度 = 0

    celebrateCelebrate.appendChild(celebratePiece); // 將紙雪加入容器

    // Animation
    setTimeout(() => {
      const randomAngle = Math.random() * 360;
      const randomDistance = Math.random() * 800 + 400; // 擴大分佈範圍
      celebratePiece.style.transition =
        "transform 3s ease-out, opacity 4s ease-out"; // 增加動畫持續時間
      celebratePiece.style.transform = `
          translate(-50%, -50%) translate(${
            Math.cos(randomAngle) * randomDistance
          }px, ${Math.sin(randomAngle) * randomDistance}px)
        `; // 紙雪移動
      celebratePiece.style.opacity = 1; // 紙雪透明度

      // Make it fall down
      setTimeout(() => {
        celebratePiece.style.transition =
          "transform 4s ease-in, opacity 3s ease-in"; // 往下掉落的過渡
        celebratePiece.style.transform = `
            translate(-50%, -50%) translate(${
              Math.cos(randomAngle) * randomDistance
            }px, ${Math.sin(randomAngle) * randomDistance}px)
            translateY(${window.innerHeight}px)`; // 向下移動
      }, 2000);
    }, 10);

    // Remove piece after animation
    setTimeout(() => {
      celebratePiece.style.opacity = 0; // Fade out effect
      setTimeout(() => {
        celebratePiece.remove();
      }, 3000); // 延長刪除延遲，以便完成動畫
    }, 3000);
  }
});

function getRandomColor() {
  // 取得隨機顏色
  const letters = "0123456789ABCDEF"; // 十六進位字母
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // 產生六位顏色碼
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
