document.addEventListener("DOMContentLoaded", () => {
    // Загружаем котиков в галерею
    const gallery = document.querySelector(".cat-grid");
    const catImages = [
        "https://cataas.com/cat?width=400&height=300",
        "https://cataas.com/cat?width=401&height=300",
        "https://cataas.com/cat?width=402&height=300",
        "https://cataas.com/cat?width=403&height=300",
        "https://cataas.com/cat?width=404&height=300"
    ];

    catImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Котик";
        gallery.appendChild(img);
    });

    // Открытие сюрприза
    const surpriseBtn = document.getElementById("surpriseBtn");
    surpriseBtn.addEventListener("click", () => {
        document.getElementById("popup").style.display = "flex";
    });

    // Закрытие попапа
    document.getElementById("closePopup").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });

    // Открытие скрытого послания
    const revealBtn = document.getElementById("revealBtn");
    const messages = document.querySelectorAll(".hidden-message");

    revealBtn.addEventListener("click", () => {
        messages.forEach((msg) => msg.classList.add("visible"));
    });
});
