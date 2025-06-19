document.addEventListener('DOMContentLoaded', function() {
    // Create and add the back-to-top button to the page
    var backToTopButton = document.createElement('a');
    backToTopButton.id = 'back-to-top';
    backToTopButton.href = '#top';
    backToTopButton.innerHTML = '&#9650;'; // Up arrow character
    document.body.appendChild(backToTopButton);

    // Get the button element
    var mybutton = document.getElementById("back-to-top");

    // Show the button when the user scrolls down 200px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    // When the user clicks the button, scroll to the top smoothly
    mybutton.onclick = function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}); 