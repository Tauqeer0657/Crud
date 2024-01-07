// Delete functionality

function deleteCustomer(_id) {
    fetch(`https://test-backend-98tu.onrender.com/api/customers/${_id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            const row = document.getElementById(`row-${_id}`);
            row.remove();
        } else {
            console.error('Error deleting customer:', response.status);
        }
    })
    .catch(error => console.error('Error deleting customer:', error));
}

// Get functionality

fetch('https://test-backend-98tu.onrender.com/api/customers')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('customer-details');

    data.forEach(data => {
        const row = document.createElement('tr');
        row.id = `row-${data._id}`;
        row.innerHTML = `
            <td>${data.customerCode}</td>
            <td>${data.customerName}</td>
            <td>${data.email}</td>
            <td>${data.phone1}</td>
            <td>${data.contactPerson}</td>
            <td><button onclick="editCustomer('${data._id}')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button></td>
            <td><button onclick="deleteCustomer('${data._id}')" class="btn btn-danger">delete</button></td>`;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));


function editCustomer(_id) {
    // Fetch the customer data for the specified _id
    fetch(`https://test-backend-98tu.onrender.com/api/customers/${_id}`)
        .then(response => response.json())
        .then(data => {
            // Populate the form fields with the customer data
            document.getElementById('customerCode').value = data.customerCode;
            document.getElementById('customerName').value = data.customerName;
            document.getElementById('address').value = data.address;
            document.getElementById('city').value = data.city;
            document.getElementById('pin').value = data.pin;
            document.getElementById('phone1').value = data.phone1;
            document.getElementById('phone2').value = data.phone2;
            document.getElementById('email').value = data.email;
            document.getElementById('website').value = data.website;
            document.getElementById('contactPerson').value = data.contactPerson;

            // Open the modal for editing
            // const editModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            // editModal.show();
        })
        .catch(error => console.error('Error fetching data:', error));
    

    document.getElementById('editingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = {
            customerCode: document.getElementById('customerCode').value,
            customerName: document.getElementById('customerName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            pin: document.getElementById('pin').value,
            phone1: document.getElementById('phone1').value,
            phone2: document.getElementById('phone2').value,
            email: document.getElementById('email').value,
            website: document.getElementById('website').value,
            contactPerson: document.getElementById('contactPerson').value,
        };
      
        // You can perform form data validation here
      
        // Send formData to the server using fetch
        fetch(`https://test-backend-98tu.onrender.com/api/customers/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
            // Reset the form fields
            document.getElementById('editingForm').reset();
            location.reload();
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
      });
    }


// // api url
// const api_url = 
// 	"https://test-backend-98tu.onrender.com/api/customers";

// // Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab = 
// 		`<tr>
// 		<th>Customer Code</th>
// 		<th>Customer Name</th>
// 		<th>Email</th>
// 		<th>Phone Number</th>
// 		<th>Contact Person</th>
// 		<th>Edit</th>
// 		<th>Delete</th>
// 		</tr>`;

// 	// Loop to access all rows 
// 	for (let r of data) {
// 		tab += `<tr>
// 	<td>${r.customerCode} </td> 
// 	<td>${r.customerName} </td>
// 	<td>${r.email}</td>
// 	<td>${r.phone1}</td> 
// 	<td>${r.contactPerson}</td>	
//     <td><button>Edit</button></td>	 
//     <td><button onclick="deleteCustomer('${data._id}')">delete</button></td>
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("allCustomer").innerHTML = tab;
// }
