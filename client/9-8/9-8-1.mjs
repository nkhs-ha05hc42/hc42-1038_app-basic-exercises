const studentData = [
    {
      id: 1,
      name: "山田",
      age: 23,
      postcode: "0620055",
      address: "北海道札幌市",
      averageScore: 81.5,
    },
    {
      id: 2,
      name: "田中",
      age: 18,
      postcode: "0590465",
      address: "北海道登別市",
      averageScore: 71,
    }
  ];
  

  window.onload = () => {
    const tableBody = document.getElementById("data-table-body");
  
    
    studentData.forEach(student => {
      const tr = document.createElement("tr");
  
      const idTd = document.createElement("td");
      idTd.textContent = student.id;
      tr.appendChild(idTd);
  
      const nameTd = document.createElement("td");
      nameTd.textContent = student.name;
      tr.appendChild(nameTd);
  
      const ageTd = document.createElement("td");
      ageTd.textContent = student.age;
      tr.appendChild(ageTd);
  
      const postcodeTd = document.createElement("td");
      postcodeTd.textContent = student.postcode;
      tr.appendChild(postcodeTd);
  
      const addressTd = document.createElement("td");
      addressTd.textContent = student.address;
      tr.appendChild(addressTd);
  
      const scoreTd = document.createElement("td");
      scoreTd.textContent = student.averageScore;
      tr.appendChild(scoreTd);
  
      tableBody.appendChild(tr);
    });
  };
  