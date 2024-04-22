function changeTheme() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function saveTheme() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        var theme = prompt("يرجى اختيار السمة المفضلة: (داكن، فاتح، دفلت)");

        if (theme === "داكن") {
            document.body.className = "dark-theme";
        } else if (theme === "فاتح") {
            document.body.className = "light-theme";
        } else if (theme === "دفلت") {
            var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

            if (prefersDark) {
                document.body.className = "dark-theme";
            } else if (prefersLight) {
                document.body.className = "light-theme";
            } else {
                document.body.className = "default-theme";
            }
        } else {
            alert("يرجى اختيار سمة صالحة: (داكن، فاتح، دفلت)");
        }
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
}

function reloadPage() {
    location.reload();
}
document.getElementById("reload-button").addEventListener("click", function() {
    window.location.href = "https://example.com"; // تغيير عنوان URL إلى الصفحة المراد التحويل إليها
});
function openOptions() {
    var optionsPopup = document.getElementById("options-popup");
    optionsPopup.style.display = "block";
}

function openOptionsPage() {
    var optionsPage = window.open("my.html", "_blank", "width=400,height=300"); // فتح صفحة الخيارات في نافذة جديدة
    document.getElementById("options-button").addEventListener("click", function() {
        optionsPage.close(); // إغلاق صفحة الخيارات عند النقر على زر الخيارات
    });
}
