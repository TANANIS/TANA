document.addEventListener("DOMContentLoaded", () => {
  // 導航欄展開與縮回
  const nav = document.querySelector("nav");

  // 當滑鼠懸停時展開導航欄
  nav.addEventListener("mouseover", () => {
    nav.classList.add("expanded");
  });

  // 當滑鼠移開時縮回導航欄
  nav.addEventListener("mouseout", () => {
    nav.classList.remove("expanded");
  });

  // 精選區域滾動效果
  const featuredSection = document.getElementById("featured");
  const handleFeaturedScroll = () => {
    const sectionTop = featuredSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight * 0.8) {
      // 80% 的可視區域高度
      featuredSection.classList.add("visible");
    }
  };

  window.addEventListener("scroll", handleFeaturedScroll);
  handleFeaturedScroll(); // 初始化檢查

  // 新聞區域滾動效果
  const newsSection = document.getElementById("news");
  const handleNewsScroll = () => {
    const sectionTop = newsSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight * 0.8) {
      // 80% 的可視區域高度
      newsSection.classList.add("visible");
    }
  };

  window.addEventListener("scroll", handleNewsScroll);
  handleNewsScroll(); // 初始化檢查

  // 載入響應式樣式表
  const loadResponsiveStylesheet = () => {
    const width = window.innerWidth;
    const stylesheet = document.getElementById("responsive-stylesheet");

    if (width <= 768) {
      // 手機和小屏幕
      stylesheet.setAttribute("href", "CSS/stylesMobile.css");
    } else {
      // 大屏幕
      stylesheet.setAttribute("href", "CSS/styles.css");
    }
  };

  window.addEventListener("resize", loadResponsiveStylesheet);
  loadResponsiveStylesheet(); // 初始化檢查

  // 卡片翻頁功能
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  // 更新卡片的顯示狀態
  const updateCards = () => {
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        // 當前顯示的卡片
        card.classList.add("active");
        card.classList.remove("inactive");
        card.style.transform = "translateX(0)"; // 卡片位置設置在中間
      } else if (index < currentIndex) {
        // 已經顯示過的卡片
        card.classList.add("inactive");
        card.classList.remove("active");
        card.style.transform = "translateX(-100%)"; // 向左移動
      } else {
        // 未來的卡片
        card.classList.add("inactive");
        card.classList.remove("active");
        card.style.transform = "translateX(100%)"; // 向右移動
      }
    });
  };

  // 處理下一張卡片的顯示
  document.getElementById("next-button").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  });

  // 處理上一張卡片的顯示
  document.getElementById("prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
  });

  // 初始化顯示
  updateCards();

  // 自動輪播（可選，設定每隔 10 秒自動切換）
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }, 10000);

  // WELCOME 區域放大效果
  const welcomeSection = document.getElementById("welcome");
  const welcomeCards = document.querySelectorAll(".welcome-card");
  const welcomeImages = document.querySelectorAll(".welcome-image");

  // 當滑鼠移動到 WELCOME 區域時放大卡片和圖片
  welcomeSection.addEventListener("mouseover", () => {
    welcomeCards.forEach((card) => card.classList.add("scale-up"));
    welcomeImages.forEach((img) => img.classList.add("scale-up"));
  });

  // 當滑鼠移開時恢復卡片和圖片的大小
  welcomeSection.addEventListener("mouseout", () => {
    welcomeCards.forEach((card) => card.classList.remove("scale-up"));
    welcomeImages.forEach((img) => img.classList.remove("scale-up"));
  });
});

//慶祝按鈕
document.getElementById("celebrate-btn").addEventListener("click", (event) => {
  // 點擊按鈕後執行
  const celebrateCelebrate = document.getElementById("celebrate"); // 取得紙雪容器
  const numcelebrate = 800; // 控制紙雪數量

  const buttonRect = event.target.getBoundingClientRect(); // 按鈕的位置信息
  const buttonCenterX = buttonRect.left + buttonRect.width / 2; // 按鈕中心位置
  const buttonCenterY = buttonRect.top + buttonRect.height / 2; // 按鈕中心位置

  for (let i = 0; i < numcelebrate; i++) {
    
    // 建立紙雪
    const celebratePiece = document.createElement("div");
    celebratePiece.className = "celebrate-piece"; // 設定紙雪類別
    celebratePiece.style.backgroundColor = getRandomColor();
    celebratePiece.style.width = `${Math.random() * 10 + 10}px`; // 設定紙雪大小
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
      const randomDistance = Math.random() * 1600 + 400; // 擴大分佈範圍
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
