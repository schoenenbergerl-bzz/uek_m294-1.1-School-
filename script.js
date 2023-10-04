document.addEventListener('DOMContentLoaded', function () {
    const bottomBar = document.getElementById('bottomBar');
    const images = document.querySelectorAll('.image');
    const songNames = document.querySelectorAll('.songnames li');
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Image highlighting and spinning functionality
    images.forEach((image, index) => {
        image.addEventListener('click', function () {
            // Remove the "spin-animation" class from all images
            images.forEach((img) => {
                img.classList.remove('spin-animation');
            });

            // Toggle the "spin-animation" class for the clicked image
            image.classList.toggle('spin-animation');

            // Get the song name associated with the clicked image
            const songName = songNames[index].textContent;

            // Update the bottom bar with the spinning image name
            if (image.classList.contains('spin-animation')) {
                bottomBar.textContent = `${songName} is playing.`;
            } else {
                bottomBar.textContent = ''; // Clear the bottom bar when no image is spinning
            }
        });
    });

    // Accordion functionality
    accordionItems.forEach((item, index) => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
