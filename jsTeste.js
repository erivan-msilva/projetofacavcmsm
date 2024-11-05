function toggleExpand() {
    const collapseContent = document.getElementById('collapseContent');
    const expandButton = document.querySelector('.expand-button');
    if (collapseContent.style.display === 'none' || collapseContent.style.display === '') {
        collapseContent.style.display = 'block';
        expandButton.classList.add('expanded');
    } else {
        collapseContent.style.display = 'none';
        expandButton.classList.remove('expanded');
    }
}
