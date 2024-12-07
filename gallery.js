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
    var filter = document.getElementById("filter").value; // Get selected filter option
    var table = document.querySelector("#art-table table"); // Get the table
    var rows = table.getElementsByTagName("tr"); // Get all table rows

    // Loop through all table rows, except the header
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var availability = row.getElementsByTagName("td")[3].textContent; // Get the availability of the artwork (4th column)

        // If filter is 'all', show all rows
        if (filter === "all") {
            row.style.display = "";
        }
        // Filter by 'Available'
        else if (filter === "Available" && availability === "Available") {
            row.style.display = "";
        }
        // Filter by 'Sold'
        else if (filter === "Sold" && availability === "Sold") {
            row.style.display = "";
        }
        // Hide row if it doesn't match the filter
        else {
            row.style.display = "none";
        }
    }
}
window.onload = function() {
    // Get the stored artworks from localStorage
    let artworks = JSON.parse(localStorage.getItem("artworks")) || [];

    // Get the container where we will display the artworks
    const container = document.getElementById("artworks-container");

    // Loop through the artworks and create an element for each one
    artworks.forEach(function(art) {
        const artDiv = document.createElement("div");
        artDiv.classList.add("artwork");

        const artHTML = `
            <h3>${art.title}</h3>
            <p><strong>Artist:</strong> ${art.artist}</p>
            <p><strong>Price:</strong> $${art.price}</p>
            <p><strong>Availability:</strong> ${art.availability}</p>
            <img src="${art.image}" alt="${art.title}" style="width:100%;max-width:300px;">
        `;
        
        artDiv.innerHTML = artHTML;
        container.appendChild(artDiv);
    });
};



