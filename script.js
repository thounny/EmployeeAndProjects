"use strict";

let employees = [
  {
    id: "55007",
    name: "Karina Chambers",
    jobTitle: "Tech Lead",
    yearsAtCompany: 14,
    email: "karinachambers@ziore.com",
    wfhAdress: "640 Boynton Place, Faxon, Kentucky, 42071",
    skillSet: "is swag",
    projectsAssignedTo: [{ projectId: 112, name: "Swagatron" }],
  },
  {
    id: "23810",
    name: "Kasey Bowers",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 19,
    email: "kaseybowers@ziore.com",
    wfhAdress: "969 Clarendon Road, Marshall, Vermont, 47859",
    skillSet: "Swag epic gamer swag",
    projectsAssignedTo: [{ projectId: 124, name: "YURRRRR" }],
  },
];

window.onload = function () {
  populateEmployeeDropdown();
  document
    .getElementById("employeeDropdown")
    .addEventListener("change", displayEmployeeDetails);
};

function populateEmployeeDropdown() {
  const dropdown = document.getElementById("employeeDropdown");

  // Sort employees by name
  employees.sort((a, b) => a.name.localeCompare(b.name));

  // Add default "Select an employee" option
  let defaultOption = document.createElement("option");
  defaultOption.text = "Select an employee...";
  defaultOption.value = "";
  dropdown.add(defaultOption);

  // Populate dropdown with employee names
  for (let employee of employees) {
    let option = document.createElement("option");
    option.text = employee.name;
    option.value = employee.id;
    dropdown.add(option);
  }
}

function displayEmployeeDetails() {
  const selectedId = document.getElementById("employeeDropdown").value;
  const employee = employees.find((emp) => emp.id === selectedId);

  const detailsBody = document.getElementById("employeeDetailsBody");
  const projectsBody = document.getElementById("projectsTableBody");

  // Clear previous data
  detailsBody.innerHTML = "";
  projectsBody.innerHTML = "";

  if (!employee) return;

  // Populate employee details
  const employeeFields = {
    ID: employee.id,
    Name: employee.name,
    "Job Title": employee.jobTitle,
    "Years at Company": employee.yearsAtCompany,
    Email: employee.email,
    "WFH Address": employee.wfhAdress,
    "Skill Set": employee.skillSet,
    "Number of Projects": employee.projectsAssignedTo.length,
  };

  for (let [field, value] of Object.entries(employeeFields)) {
    let row = detailsBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = field;
    cell2.textContent = value;
  }

  // Populate projects table
  for (let project of employee.projectsAssignedTo) {
    let row = projectsBody.insertRow();
    let cell1 = row.insertCell(0);
    cell1.textContent = project.projectId;
    let cell2 = row.insertCell(1);
    cell2.textContent = project.name;
  }
}
