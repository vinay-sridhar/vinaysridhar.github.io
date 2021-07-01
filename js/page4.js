function addRow() {
    var table = document.getElementById('dynamic-table');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    rowCount = rowCount - 1;
    if (rowCount == 0) {
        cell1.innerHTML = "1";
    } else {
        cell1.innerHTML = rowCount + 1;
    }
    var name = document.getElementById("myForm").elements[0].value;
    var language = document.getElementById("myForm").elements[1].value;
    var level = document.getElementById("myForm").elements[2].value;

    cell2.innerHTML = name;
    cell3.innerHTML = language;
    cell4.innerHTML = level;

}