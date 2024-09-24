document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.querySelector('.menuList');

    // Check if the content exceeds the max height and enable scroll
    function checkOverflow() {
        if (menuList.scrollHeight > menuList.clientHeight) {
            menuList.style.overflowY = 'auto'; // Add scrollbar if content exceeds max height
        } else {
            menuList.style.overflowY = 'hidden'; // Remove scrollbar if content fits
        }
    }

    // Run the check when the page loads
    checkOverflow();

    // Optionally, run the check whenever the window is resized
    window.addEventListener('resize', checkOverflow);
});
