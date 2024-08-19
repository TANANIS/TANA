document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const featuredSection = document.getElementById('learning-resources');

    // 當滑鼠懸停時展開導航欄
    nav.addEventListener('mouseover', () => {
        nav.classList.add('expanded');
    });

    // 當滑鼠移開時縮回導航欄
    nav.addEventListener('mouseout', () => {
        nav.classList.remove('expanded');
    });

    // 處理滾動事件
    const handleScroll = () => {
        const sectionTop = featuredSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) { // 80% 的可視區域高度
            featuredSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化檢查

    // 滾動到指定位置的平滑效果
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 創建一個回到頂部的按鈕
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '回到頂部';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', scrollToTop);

    // 顯示/隱藏回到頂部按鈕
    const handleBackToTopButtonVisibility = () => {
        if (window.scrollY > window.innerHeight) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleBackToTopButtonVisibility);

    
});
