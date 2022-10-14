var close = document.getElementsByClassName("close");

function newElement(){
  
  //Get all three user values and place them in list
  var name = document.getElementById("nameInput").value;
  var date = document.getElementById("dateInput").value;
  var amount = document.getElementById("amountInput").value;
  var inputs = [name,date,amount];

  //Checks if any input is empty
  if(name === "" || date === "" || amount === ""){
    alert("Must enter all fields to add expense.");
  }
  else{
    //Create base tr
    var tr = document.createElement("tr");
    //for loop to appened each user's input into tr
    for(var i = 0; i < 3; i++){
      var td = document.createElement("td");
      var text = document.createTextNode(inputs[i]);
      td.appendChild(text);
      tr.appendChild(td);
    }
    //Create exit button
    var exit = document.createElement('button');
    var text = document.createTextNode('X');
    exit.className = "close";
    exit.append(text);
    //Add exit button to list
    var td = document.createElement("td");
    td.appendChild(exit);
    tr.appendChild(td);
    //Appends element to table
    document.getElementById("actual-table").appendChild(tr);
  }

  for(let i = 0; i < close.length;i++){
    close[i].onclick = function(){
      let div = this.parentElement.parentElement;
      div.style.display = 'none';
    }
  }
}