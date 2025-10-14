cument.getElementById('studentForm').addEventListener('submit', function(e) {
 e.preventDefault();
 const name = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const course = document.getElementById('course').value;
 const tableBody = document.querySelector('#studentTable tbody');
 const newRow = tableBody.insertRow();
 newRow.insertCell(0).textContent = name;
 newRow.insertCell(1).textContent = age;
 newRow.insertCell(2).textContent = course;
 document.getElementById('studentForm').reset();
});
