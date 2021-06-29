function addRow() {
    var table = document.getElementById("addTable");
    var rowCount = table.rows.length;
    var addRow = table.insertRow(rowCount);
    var cell1 = addRow.insertCell(0);
    cell1.innerHTMl = rowCount + 1;
    addRow.insertCell(1);
    addRow.insertCell(2);
    addRow.insertCell(3);

}