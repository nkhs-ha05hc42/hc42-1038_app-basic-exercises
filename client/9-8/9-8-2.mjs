const apiUrl = "http://localhost:3000/api/sample2";

const tableBody = document.getElementById("data-table");

const fetchDataAndDisplay = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

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
    } catch (error) {
        console.error("データ取得エラー:", error);
        tableBody.innerHTML = "<tr><td colspan='6'>データの取得に失敗しました</td></tr>";
    }
};

fetchDataAndDisplay();
