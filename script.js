// JavaScript code to handle form submission
  document.getElementById('form').addEventListener('submit', function (e) {
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
  fetch('https://test-backend-98tu.onrender.com/api/customers', {
      method: 'POST',
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
      document.getElementById('form').reset();
  })
  .catch(error => {
      // Handle errors
      console.error(error);
  });
});