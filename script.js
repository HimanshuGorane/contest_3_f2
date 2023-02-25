var tableData = [];
    var rowCounter = 1;
    function addRow() {
      var tableBody = document.getElementById("table-body");
      var newRow = tableBody.insertRow();
      var idCell = newRow.insertCell(0);
      idCell.innerHTML = rowCounter++;
      var nameCell = newRow.insertCell(1);
      nameCell.contentEditable = true;
      var rollNoCell = newRow.insertCell(2);
      rollNoCell.contentEditable = true;
      var subjectCell = newRow.insertCell(3);
      subjectCell.contentEditable = true;
      var marksCell = newRow.insertCell(4);
      marksCell.contentEditable = true;
      var markedByCell = newRow.insertCell(5);
      markedByCell.contentEditable = true;
      var saveCell = newRow.insertCell(6);
      var saveButton = document.createElement("button");

      saveButton.innerHTML = "Save";
      saveButton.className = "save-button";
      saveButton.onclick = function () {
        var rowData = {
          id: idCell.innerHTML,
          student_name: nameCell.innerHTML,
          student_roll_no: rollNoCell.innerHTML,
          subject: subjectCell.innerHTML,
          marks: marksCell.innerHTML,
          marked_by: markedByCell.innerHTML
        };
        tableData.push(rowData);
        console.log(tableData); // Print tableData array to console for testing purposes
      };
      saveCell.appendChild(saveButton);
    }