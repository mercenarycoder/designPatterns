
const ExcelJS = require("exceljs");

const FILE_PATH = "./credentials-table-interview.xlsx";

const readCellBackgroundColor = (cell) =>
  cell?.style?.fill?.type === "pattern" ? cell.style.fill?.bgColor?.argb : null;

main().catch(console.error);

/*

  Util Methods:

  WorkSheet:
    // Access worksheets: 
    const firstWorkSheet = workbook.getWorksheet(1); 

    // Iterate Worksheet
    worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
      console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
    });

  =====================================================================================

  Columns:
    // Access an individual columns by letter and 1-based column number
    const nameCol = worksheet.getColumn('B');
    const dobCol = worksheet.getColumn(3);

    // Iterate over all current cells in this column including empty cells
    dobCol.eachCell({ includeEmpty: true }, function(cell, rowNumber) {
      console.log('Cell ' + rowNumber + ' = ' + cell.value); 
    });

    // Values:
    worksheet.getColumn(2).values;

  =====================================================================================
  
  Rows:   
    // Get a row object 
    const row = worksheet.getRow(5);

    // Iterate over all rows that have values in a worksheet: 
    row.eachCell({ includeEmpty: true }, function(cell, colNumber) {
      console.log('Cell ' + colNumber + ' = ' + cell.value);
    });

    // Values:
    worksheet.getRow(4).values;

  =====================================================================================

  Cells: 
    // Get a Cell
    const cell = worksheet.getCell('C3');

    // Value
    const cellVal = cell.value;

  =====================================================================================

*/

async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(FILE_PATH);
  const worksheet = workbook.getWorksheet(1); 
  const department = worksheet.getColumn('A').values;
  const roles = worksheet.getColumn('B').values;
  const obj = {};
  const keys =[]
  for(let i =0;i<department.length;i++){
    if(department[i] === undefined){
        continue;
    }
    keys.push(department[i]);
  }
  const values=[];
  let firstcheck = false;
  for(let i=0; i<roles.length;i++){
     if(roles[i] === undefined && !firstcheck){
        continue;
     }
     else if(roles[i] && !firstcheck){
        firstcheck = true;
        continue;
     }
     else if(roles[i] === undefined && firstcheck){
        // values.push('break');
     }
     else{
        values.push(roles[i]);
     }
  } 
  var index =1;
  for(let z=2;z<department.length;z++){
    let arr = [];
    for(let j = index; j<values.length;j++){
        if(values[j] == "break"){
            console.log(values[j]);
            index = j+1;
            break;
        }
        arr.push(values[j]);
    }
    obj[department[z]] = arr;
  }
  console.log(obj);
  // CODE HERE
}
