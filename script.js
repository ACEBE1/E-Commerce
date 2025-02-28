document.addEventListener("DOMContentLoaded", function () {
    // Navbar oluşturma (önceki kod)
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg bg-white shadow-sm";
    navbar.innerHTML = `
        <div class="container">
            <!-- Sol Taraf: Marka -->
            <a class="navbar-brand text-dark fw-bold" href="#">
                <img style="width: 130px; height: 100%; margin-bottom: -3px;" src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="E-Ticaret">
            </a>
            
            <!-- Orta Kısım: Search Bar -->
            <div class="input-group mx-auto w-50">
                <input 
                    id="searchInput"
                    type="text" 
                    class="form-control search-input" 
                    placeholder="Aradığınız ürün, kategori veya markayı yazınız" 
                    aria-label="Search">
                <span id="searchIcon" class="input-group-text bg-white search-icon">
                    <i class="bi bi-search"></i>
                </span>
            </div>

            <!-- Sağ Taraf: Menü -->
            <ul class="navbar-nav ms-auto">
                 <li class="nav-item">
                    <a class="nav-link text-dark" href="#"><i class="bi bi-person"></i> Kategoriler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#"><i class="bi bi-person"></i> Giriş Yap</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#"><i class="bi bi-heart"></i> Favorilerim</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#"><i class="bi bi-cart"></i> Sepetim</a>
                </li>
            </ul>
        </div>
    `;
    document.body.prepend(navbar);

    // Search inputunu aktif hale getirme
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");

    // Arama fonksiyonu
    function performSearch() {
        const searchQuery = searchInput.value.trim(); // Kullanıcının yazdığı kelime
        if (searchQuery) {
            alert(`Arama yapılıyor: ${searchQuery}`);
            // Burada arama işlemini gerçekleştirebilirsiniz.
            // Örneğin bir API çağrısı yapabilirsiniz.
        } else {
            alert("Lütfen bir arama terimi giriniz.");
        }
    }

    // Enter tuşuna basıldığında arama yap
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Arama ikonuna tıklandığında arama yap
    searchIcon.addEventListener("click", performSearch);
});
