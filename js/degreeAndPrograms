 
function degreeProgramHandler() {
    const selectedDegree = document.getElementById("degreeList");
const degree = selectedDegree.value;
const programContainer = document.getElementById("programList");
  var optionsList=[];

  switch (degree) {
    case "Bachelor's Degree":
        optionsList = ["Computer Science", "Engineering", "Business Administration"];
        break;
    case "Master's Degree":
        optionsList = ["Data Science", "Electrical Engineering", "MBA"];
        break;
    case "PhD":
        optionsList = ["Computer Engineering", "Economics", "Psychology"];
        break;
}

if (degree) {
    optionsList.forEach(program => {
      const option = document.createElement("option");
      option.text = program;
      option.value = program;
      programContainer.add(option);
    });
  }
}