function showMoreInfo(id) {
    const element = document.getElementById(id);
    const moreInfo = element.querySelector('.more-info');
    if (moreInfo.textContent === 'More Info') {
        moreInfo.textContent = 'Less Info';
        element.classList.remove('hidden');
    } else {
        moreInfo.textContent = 'More Info';
        element.classList.add('hidden');
    }
}