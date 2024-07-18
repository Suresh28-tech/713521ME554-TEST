
// JavaScript to handle the right-click event
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Prevent the default context menu from appearing
        alert('Due to security reason, Right Click is not allowed');
    });
});
