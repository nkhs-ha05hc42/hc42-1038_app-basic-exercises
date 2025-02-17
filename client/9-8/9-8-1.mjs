const data = [
    { id: 1, name: "山田", age: 23, postcode: "0620055", address: "北海道札幌市", averageScore: 81.5 },
    { id: 2, name: "田中", age: 18, postcode: "0590465", address: "北海道登別市", averageScore: 71 }
];

const tableBody = document.getElementById("data-table");

data.forEach(person => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.postcode}</td>
        <td>${person.address}</td>
        <td>${person.averageScore}</td>
    `;

    tableBody.appendChild(row);
});
