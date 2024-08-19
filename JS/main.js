document.addEventListener('DOMContentLoaded', () => {
    // 導航欄展開與縮回
    const nav = document.querySelector('nav');
    
    // 當滑鼠懸停時展開導航欄
    nav.addEventListener('mouseover', () => {
        nav.classList.add('expanded');
    });

    // 當滑鼠移開時縮回導航欄
    nav.addEventListener('mouseout', () => {
        nav.classList.remove('expanded');
    });

    // 精選區域滾動效果
    const featuredSection = document.getElementById('featured');
    const handleFeaturedScroll = () => {
        const sectionTop = featuredSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) { // 80% 的可視區域高度
            featuredSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleFeaturedScroll);
    handleFeaturedScroll(); // 初始化檢查

    // 新聞區域滾動效果
    const newsSection = document.getElementById('news');
    const handleNewsScroll = () => {
        const sectionTop = newsSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) { // 80% 的可視區域高度
            newsSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleNewsScroll);
    handleNewsScroll(); // 初始化檢查

    // 載入響應式樣式表
    const loadResponsiveStylesheet = () => {
        const width = window.innerWidth;
        const stylesheet = document.getElementById('responsive-stylesheet');
        
        if (width <= 768) { // 手機和小屏幕
            stylesheet.setAttribute('href', 'CSS/stylesMobile.css');
        } else { // 大屏幕
            stylesheet.setAttribute('href', 'CSS/styles.css');
        }
    };

    window.addEventListener('resize', loadResponsiveStylesheet);
    loadResponsiveStylesheet(); // 初始化檢查

    // 卡片翻頁功能
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    // 更新卡片的顯示狀態
    const updateCards = () => {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
                card.classList.remove('inactive');
            } else {
                card.classList.add('inactive');
                card.classList.remove('active');
            }
        });
    };

    // 處理下一張卡片的顯示
    document.getElementById('next-button').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });

    // 處理上一張卡片的顯示
    document.getElementById('prev-button').addEventListener('click', () => {
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
    const welcomeSection = document.getElementById('welcome');
    const welcomeCards = document.querySelectorAll('.welcome-card');
    const welcomeImages = document.querySelectorAll('.welcome-image');

    // 當滑鼠移動到 WELCOME 區域時放大卡片和圖片
    welcomeSection.addEventListener('mouseover', () => {
        welcomeCards.forEach(card => card.classList.add('scale-up'));
        welcomeImages.forEach(img => img.classList.add('scale-up'));
    });

    // 當滑鼠移開時恢復卡片和圖片的大小
    welcomeSection.addEventListener('mouseout', () => {
        welcomeCards.forEach(card => card.classList.remove('scale-up'));
        welcomeImages.forEach(img => img.classList.remove('scale-up'));
    });
});
