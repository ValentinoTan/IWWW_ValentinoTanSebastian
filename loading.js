$(document).ready(function() {
    // Get the container and image elements
    var $container = $('#animation-container');
    var $image = $('#moving-image');
    
    // Set the starting position of the image
    var startPosition = -$image.width();
    $image.css('left', startPosition);
    
    // Calculate the distance to move per step
    var distance = $container.width();
    var stepDistance = distance / 5;
    
    // Animate the image from left to right
    $image.animate({ left: distance }, 2000, 'linear', function() {
    // Animation complete
    
    // Open another HTML file
    window.location.href = 'pages/materi.html';
    });
});