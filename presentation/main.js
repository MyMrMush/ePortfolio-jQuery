const slides = [
    'slides/1-title/1-title',
    'slides/2-agenda/2-agenda',
    'slides/3-what-is-jquery/3-what-is-jquery',
    'slides/4-when-not/4-when-not',
    'slides/5-how-to/5-how-to',
    'slides/6-how-to-2/6-how-to-2',
    'slides/7-syntax/7-syntax',
    'slides/8-dom-traversal/8-dom-traversal',
    'slides/9-events/9-events',
];
let currentSlide = 0;
let presenter = new URLSearchParams(window.location.search).get('presenter');

$(() => {
    console.log('frame.js loaded');
    $('#current-date').text(new Date().toLocaleDateString('de-DE', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' }));
    $('#presenter').text(presenter);
    $('#total-slides').text(slides.length);
    loadSlide();

    
    $(document).on('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                changeSlide(-1);
                break;
            case 'ArrowRight':
                changeSlide(1);
                break;
        }
    });
    $('#prev').on('click', () => changeSlide(-1));
    $('#next').on('click', () => changeSlide(1));


});

function loadSlide() {
    $('#current-slide').text(currentSlide + 1);
    $('#content').load(slides[currentSlide]+'.html');
    $.getScript(slides[currentSlide]+'.js').fail((jqxhr, settings, exception) => {
       if (exception === 'Not Found') {
           console.log('No script for slide ' + slides[currentSlide]);
       }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    currentSlide = Math.max(0, Math.min(slides.length - 1, currentSlide));
    loadSlide();
}