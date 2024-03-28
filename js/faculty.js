// var facultyName;
// function viewFacultyDetails(userName) {
// facultyName=userName;
//   // Hide the gallery container
//   const galleryContainer = document.getElementById("faculty-gallery-container");
//   galleryContainer.style.display = "none";

//   // Show the details container
//   const dataContainer = document.getElementById("faculty-details-container");
//   dataContainer.style.display = "block";
//   document.getElementById(userName).classList.add("view_faculty_info")
// console.log(userName);
// }
// function backToFacultyHome(){
//     const galleryContainer = document.getElementById("faculty-gallery-container");
//   galleryContainer.style.display = "block";
//   document.getElementById(facultyName).classList.remove("view_faculty_info")
//   // Show the details container
//   const dataContainer = document.getElementById("faculty-details-container");
//   dataContainer.style.display = "none";
//   facultyName=""
// }

function viewFacultyDetails(userName) {
    const dataContainer = document.getElementById("faculty-details-container");
      dataContainer.style.display = "block";
      document.getElementById(userName).classList.add("view_faculty_info")

  }