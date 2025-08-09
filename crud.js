let data = [];
let editIndex = -1;

document.getElementById("crudForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;

    if (editIndex === -1) {
        data.push({ name, phone, city });
    } else {
        data[editIndex] = { name, phone, city };
        editIndex = -1;
    }

    this.reset();
    renderTable();
});

function renderTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = "";

    data.forEach((item, index) => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.city}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editData(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteData(${index})">Delete</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
}

function editData(index) {
    document.getElementById("name").value = data[index].name;
    document.getElementById("phone").value = data[index].phone;
    document.getElementById("city").value = data[index].city;
    editIndex = index;
}

function deleteData(index) {
    data.splice(index, 1);
    renderTable();
}
