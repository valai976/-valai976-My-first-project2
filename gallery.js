// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}


function filterTable() {
    const filter = document.getElementById('filter').value;
    const rows = document.getElementById('art-tbody').querySelectorAll('tr');

    rows.forEach(row => {
        const availability = row.cells[3].textContent;
        row.style.display = (filter === 'all' || availability === filter) ? '' : 'none';
    });
}
