function uploadWindow(){
    changeVisibility();

    let rowStrings = [];
    for (let i = 0, row; row = tableData[i]; i++){
        rowStrings.push( row.join(";") );
    }
    let tableString = rowStrings.join("\n")

    let name = document.getElementById("uploadName");
    name.setAttribute('value', document.getElementById("file-name").value);

    let input = document.getElementById("uploadFile");
    
    input.setAttribute('value',tableString);
}

function changeVisibility(){
    const popup = document.getElementById("uploadConfirmWindow");
    if(popup.style.visibility == 'hidden' || popup.style.visibility == ''){
        popup.style.visibility = 'visible';
    }
    else{
        popup.style.visibility = "hidden";
    }
}

function download(type, file){
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(file);
    a.download = `${file.name}.${type}`;
    a.click();
    window.URL.revokeObjectURL(a.href);
    a.remove();
}

function fragebogenZuTXT(){
    let table = document.getElementById("myTable");
    let tableString = "";
    for (let i = 0, row; row = table.rows[i]; i++){
        for (let j = 0, col; col = row.cells[j]; j++){
            if(i==0 && j >0){
                tableString += col.firstChild.value+ '; ';
            }
            else{
                tableString += col.textContent + '; ';
            }
        }
        tableString += "\n";
      }

    let fileName = document.getElementById("file-name").value;
    let file = new File([tableString],fileName);
    download("txt",file);
  }


function fragebogenZuCSV(){
    let rowStrings = [];
    for (let i = 0, row; row = tableData[i]; i++){
        rowStrings.push( row.join(";") );
    }
    let tableString = rowStrings.join("\n")

    let fileName = document.getElementById("file-name").value;

    let file = new File([tableString],fileName);
    download("csv",file);
  }
