document.addEventListener("DOMContentLoaded", () => {
    const addListingForm = document.getElementById("addListingForm");
    const listingsContainer = document.getElementById("listings");

    // Új hirdetés hozzáadása
    addListingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Űrlap adatok lekérése
        const title = document.getElementById("title").value;
        const image = document.getElementById("image").value;
        const area = document.getElementById("area").value;
        const location = document.getElementById("location").value;
        const rooms = document.getElementById("rooms").value;

        // Hirdetés elem létrehozása
        const listing = document.createElement("div");
        listing.className = "listing";

        listing.innerHTML = `
            <img src="${image}" alt="${title}">
            <div class="details">
                <h3>${title}</h3>
                <p><strong>Terület:</strong> ${area} m²</p>
                <p><strong>Helyzet:</strong> ${location}</p>
                <p><strong>Szobák száma:</strong> ${rooms}</p>
                <button onclick="sendInterest('${title}')">Érdekel</button>
            </div>
        `;

        listingsContainer.appendChild(listing);

        // Űrlap alaphelyzetbe állítása
        addListingForm.reset();
    });
});

// Érdeklődési e-mail küldése
function sendInterest(title) {
    const mailtoLink = `mailto:tartam331@hengersor.hu?subject=Érdekelne az ingatlan: ${encodeURIComponent(title)}&body=Üdv, szeretnék érdeklődni az alábbi ingatlan iránt: ${encodeURIComponent(title)}`;
    window.location.href = mailtoLink;
}
