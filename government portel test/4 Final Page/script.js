document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert('Due to security reason, Right Click is not allowed');
    });
});