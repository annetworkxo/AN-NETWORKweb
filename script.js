// Simple Carousel Scrolling Function
function scrollCarousel(id, direction) {
    const carousel = document.getElementById(id);
    const scrollAmount = 340; // Card width + gap
    
    if (carousel) {
        carousel.scrollBy({
            left: scrollAmount * direction,
            behavior: 'smooth'
        });
    }
}

// Check scroll position to hide/show navigation buttons
document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('scroll', () => {
        const container = carousel.parentElement;
        const leftBtn = container.querySelector('.scroll-btn.left');
        const rightBtn = container.querySelector('.scroll-btn.right');
        
        if (leftBtn && rightBtn) {
            leftBtn.style.opacity = carousel.scrollLeft > 10 ? '1' : '0.3';
            rightBtn.style.opacity = 
                carousel.scrollLeft < (carousel.scrollWidth - carousel.clientWidth - 10) ? '1' : '0.3';
        }
    });
});
