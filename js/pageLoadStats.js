(function() {
    function getPageLoadTime() {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return loadTime;
    }
    function showPageLoadStats() {
        var loadTime = getPageLoadTime();
        var statsElem = document.createElement('div');
        statsElem.textContent = 'Страница загружена за ' + loadTime + ' мс';
        document.body.appendChild(statsElem);
    }

    // Подписываемся на событие загрузки страницы
    window.addEventListener('load', showPageLoadStats);
})();