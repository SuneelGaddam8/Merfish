document.addEventListener('DOMContentLoaded', function() {
    var facultyContainer = document.querySelector('.faculty-image-container');

    // Add click event listener to the container
    facultyContainer.addEventListener('click', function(event) {
        var targetCard = event.target.closest('.faculty-image-card');
        if (targetCard) {
            var details = targetCard.querySelector('.hidden').innerHTML;
            targetCard.innerHTML = details;
        }
    });
});