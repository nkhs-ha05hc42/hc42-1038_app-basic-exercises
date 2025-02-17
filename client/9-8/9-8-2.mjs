const apiUrl = "http://localhost:3000/api/sample2";


window.onload = async () => {
  const tableBody = document.getElementById("data-table-body");

    
    const response = await fetch(apiUrl);
    const data = await response.json();

    
    data.forEach(record => {
      const tr = document.createElement("tr");

      const idTd = document.createElement("td");
      idTd.textContent = record.id;
      tr.appendChild(idTd);

      const nameTd = document.createElement("td");
      nameTd.textContent = record.name;
      tr.appendChild(nameTd);

      const ageTd = document.createElement("td");
      ageTd.textContent = record.age;
      tr.appendChild(ageTd);

      const postcodeTd = document.createElement("td");
      postcodeTd.textContent = record.postcode;
      tr.appendChild(postcodeTd);

      const addressTd = document.createElement("td");
      addressTd.textContent = record.address;
      tr.appendChild(addressTd);

      const scoreTd = document.createElement("td");
      scoreTd.textContent = record.averageScore;
      tr.appendChild(scoreTd);

      tableBody.appendChild(tr);
    });
}