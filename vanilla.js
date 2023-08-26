// Main Container  
    const myDIv = document.createElement("div");
// Project heading  
    const myHeading = document.createElement("h1");
     const headingText = document.createTextNode("This is a Mini Project vanilla JS");
    myHeading.appendChild(headingText);
    myDIv.appendChild(myHeading);
    const myTable = document.createElement('table');
    myDIv.appendChild(myTable);
  function myRows(a,b,c,d,e) 
    { 
        var tableRow = document.createElement('tr');
for(let i=0;i<arguments.length;i++)
{
    var colText = document.createTextNode(arguments[i]);
    var tableCol = document.createElement('td');
    tableCol.appendChild(colText);
    tableRow.appendChild(tableCol);
} 
myTable.appendChild(tableRow);
    }
    const element = document.getElementsByTagName("body");
    element[0].appendChild(myDIv);
 document.getElementsByTagName('table')[0].style.border = 'solid 1px black';
 document.getElementsByTagName('table')[0].style.width = '100%';
 function tdColor(){
var tdLength = document.getElementsByTagName('td');
 for(var i=0;i<tdLength.length;i++)
 {
    tdLength[i].style.border = 'solid 1px red';
 }
}
 myRows('Name','Department','RollNumber','Marks','Attendence');
 myRows('Soma','IT','5009','90%','100%');
 myRows('Soma','MECH','5010','88%','90%');
 myRows('Soma','CIVIL','5011','75%','80%');
 tdColor();

