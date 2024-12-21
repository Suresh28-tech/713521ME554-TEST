let studentCounter = 1;
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const grade = document.getElementById('studentGrade').value;
    const contact = document.getElementById('studentContact').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${studentCounter++}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${grade}</td>
        <td>${contact}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editStudent(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    studentTableBody.appendChild(newRow);
    studentForm.reset();
});

// Edit student details
function editStudent(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    document.getElementById('studentName').value = cells[1].textContent;
    document.getElementById('studentEmail').value = cells[2].textContent;
    document.getElementById('studentGrade').value = cells[3].textContent;
    document.getElementById('studentContact').value = cells[4].textContent;

    row.remove();
}

// Delete student
function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}