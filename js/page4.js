function addRow() {
    var table = document.getElementById("addTable");
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var rowCount = table.rows.length;
    var number = document.createTextNode(rowCount);
    var input1 = document.createTextNode('Text1');
    var input2 = document.createTextNode('Text2');
    var input3 = document.createTextNode('Text3');

    td1.appendChild(number);
    td2.appendChild(input1);
    td3.appendChild(input2);
    td4.appendChild(input3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

}