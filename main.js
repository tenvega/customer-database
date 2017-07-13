console.log("hello");

for (i = 0; i < customers.results.length; i++) {
  let mainPage = document.querySelector('body');

  let grid = document.createElement('div');

  let employeeDirectory = `
   <ul>
<li><img src="${customers.results[i].picture.large}"></li>
<li>${customers.results[i].name.first} ${customers.results[i].name.last}</li>
<li>${customers.results[i].email}</li>
<li>${customers.results[i].location.street}</li>
<li>${customers.results[i].location.city}</li>
<li>${customers.results[i].location.state}</li>
<li>${customers.results[i].location.postcode}</li>
<li>${customers.results[i].phone}</li>

    </ul> `;
  grid.innerHTML += employeeDirectory;
  mainPage.appendChild(grid);

}
