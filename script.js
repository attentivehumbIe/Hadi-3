document.addEventListener("DOMContentLoaded", () => {
    // Загружаем котиков в галерею
    const gallery = document.querySelector(".cat-grid");
    const catImages = [
        "https://picsum.photos/id/237/400/300", 
        "https://picsum.photos/id/238/400/300", 
        "https://picsum.photos/id/239/400/300", 
        "https://picsum.photos/id/240/400/300", 
        "https://picsum.photos/id/241/400/300"
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
