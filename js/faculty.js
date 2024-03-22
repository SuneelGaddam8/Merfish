function viewFacultyDetails(userName) {
    // Hide the gallery container
    const galleryContainer = document.getElementById("faculty-gallery-container");
    galleryContainer.style.display = "none";

    // Show the details container
    const dataContainer = document.getElementById("faculty-details-container");
    dataContainer.style.display = "block";

    // Define the faculty details
    const facultyDetails = {
        "Prof. Ranjith Rajeswaran": {
            image: './assets/faculty/audiology-1.png',
            role: 'Principal & Managing Director',
            membership: ['Life member of Indian Speech and Hearing Association', 'Member of International Society of Audiology', 'One of the founder member of Cochlear Implant Group of India', 'One of the founder member of HEARRING Group.'],
            about: 'This is where you would provide a brief description or biography of the faculty member, including their academic background, research interests, notable achievements, etc.',
        },
        "Ms.Saranyaa G": {
            image: './assets/faculty/audiology-2.png',
            role: 'Associate Professor',
            membership: ['Membership 1', 'Membership 2'],
            about: 'This is where you would provide a brief description or biography of the faculty member, including their academic background, research interests, notable achievements, etc.',
        },
        // Add more faculty members here with their respective descriptions and qualifications
    };

    // Get the details for the clicked user
    const userDetails = facultyDetails[userName];

    // Update the faculty details container with the details of the clicked faculty member
    const detailsContainer = document.getElementById("faculty-details-container");
    detailsContainer.innerHTML = `
        <div class="faculty-details-image">
            <img src="${userDetails.image}" alt="${userName}">
            <p>Details for ${userName}</p>
            <p>Description: ${userDetails.role}</p>
            <p>Qualification: ${userDetails.membership.join(', ')}</p>
            <p>Membership:</p>
            <ul>
                ${userDetails.membership.map(membership => `<li> &#8226; ${membership}</li>`).join('')}
            </ul>
        </div>
        <div class="faculty-details-info">

           
           
            <p>About: ${userDetails.about}</p>

        </div>
    `;
}