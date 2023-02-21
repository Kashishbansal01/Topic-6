const API_URL = 'http://localhost:5001/api';
// devices.push({ user: "Mary", name: "Mary's iPhone" });
// devices.push({ user: "Alex", name: "Alex's Surface Pro" });
// devices.push({ user: "Mary", name: "Mary's MacBook" });
$.get(`${API_URL}/devices`)
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
    <tr>
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
}); 

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];
  
  const body = {
    name,
    user,
    sensorData
  };
  
  $.post(`${API_URL}/devices`, body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});
$('#navbar').load('navbar.html');