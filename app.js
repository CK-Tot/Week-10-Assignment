document.addEventListener('DOMContentLoaded', () =>{
	document.getElementById('contact-form').addEventListener('submit', (e) => {
		e.preventDefault();
		let name = document.getElementById('name').value;
		let number = document.getElementById('number').value;
		let table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
		let row = table.insertRow();
		row.insertCell(0).innerHTML = name;
		row.insertCell(1).innerHTML = number;
		document.getElementById('name').value = '';
		document.getElementById('number').value = '';
	});
})
