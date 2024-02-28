// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.




const data1 = {id:"42", name:"Bruce", occupation:"Knight", age:"41"}
const data2= {id:"57", name:"Bob", occupation:"Fry Cook", age:"19"}
const data3= {id:"63", name:"Blaine", occupation:"Quiz Master", age:"58"}
const data4= {id:"98", name:"Bill", occupation:"Doctor's Assistant", age:"26"}


console.table([data1, data2, data3, data4]);

