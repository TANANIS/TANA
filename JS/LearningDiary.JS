document.addEventListener('DOMContentLoaded', () => {
    // 導航欄展開和收回效果
    const nav = document.querySelector('nav');

    nav.addEventListener('mouseover', () => {
        nav.classList.add('expanded');
    });

    nav.addEventListener('mouseout', () => {
        nav.classList.remove('expanded');
    });

    // 精選區域滾動顯示效果
    const featuredSection = document.getElementById('featured');

    const handleScroll = () => {
        const sectionTop = featuredSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.8) { // 當視口的80%高度以上
            featuredSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化檢查

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

    // 其他功能可以在此處添加
});
