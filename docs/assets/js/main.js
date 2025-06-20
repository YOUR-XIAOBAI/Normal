document.addEventListener("DOMContentLoaded", function () {
    // 表单提交提醒
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        alert("Thank you for your message, we will contact you as soon as possible!");
        e.preventDefault();
    });

    // 暗黑模式切换功能
    const toggleBtn = document.getElementById("toggle-dark");
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
            ? '<i class="fas fa-sun"></i> Light Mode'
            : '<i class="fas fa-moon"></i> Dark Mode';
    });
});
