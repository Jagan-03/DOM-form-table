
let getList = () => {
    let table = document.getElementById("show");
    let list = localStorage.getItem("myList").split("-");
    console.log(list);
    for(let i = 0; i < list.length; i++){
        if(list[i]){
            let row = table.insertRow(-1);
            let fname = row.insertCell(0).innerHTML = JSON.parse(list[i]).fname;
            let lname = row.insertCell(1).innerHTML = JSON.parse(list[i]).lname;
            let email = row.insertCell(2).innerHTML = JSON.parse(list[i]).email;
            let age = row.insertCell(3).innerHTML = JSON.parse(list[i]).age;;
        }
    }
}

let AddRow = () => {
    let inputs = document.querySelectorAll("input[type=text]");
    // Adding new values to the list
    if(!localStorage.myList) localStorage.myList = "";
    localStorage.myList += `{"fname" : "${inputs[0].value}","lname" : "${inputs[1].value}","email" : "${inputs[2].value}","age" : "${inputs[3].value}"}-`;
    // Adding the values in the list to the table
    let table = document.getElementById("show");
    let list = localStorage.getItem("myList").split("-");
    for(let i = list.length-2; i < list.length; i++){
        if(list[i]){
            let row = table.insertRow(-1);
            let fname = row.insertCell(0).innerHTML = JSON.parse(list[i]).fname;
            let lname = row.insertCell(1).innerHTML = JSON.parse(list[i]).lname;
            let email = row.insertCell(2).innerHTML = JSON.parse(list[i]).email;
            let age = row.insertCell(3).innerHTML = JSON.parse(list[i]).age;
        }
    }
    inputs.forEach(input => {
        input.value = "";
    });
}
