function clearForm(){
    document.getElementById("form").reset();
}



function displayOutput(){
    event.preventDefault();
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    // var gender = document.getElementById("gender").value;
    
  if( document.getElementById('gender1').checked){
    gender = 'Male'
  }
  else if( document.getElementById('gender2').checked){
    gender = 'Female'
  } else{
    gender = 'Other'
  }
  

     var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var outputtable = document.getElementById("outputbody");

    var newRow = outputtable.insertRow();
    var firstnameCell = newRow.insertCell(0);
    var lastnameCell  = newRow.insertCell(1);
    var addressCell  = newRow.insertCell(2);
    var pincodeCell  = newRow.insertCell(3);
    var genderCell  = newRow.insertCell(4);
    var foodCell  = newRow.insertCell(5);
    var stateCell  = newRow.insertCell(6);
    var countryCell  = newRow.insertCell(7);


    firstnameCell.textContent = firstname;
    lastnameCell.textContent = lastname;
    addressCell.textContent = address;
    pincodeCell.textContent = pincode;
    genderCell.textContent = gender;
    foodCell.textContent = food;
    stateCell.textContent = state;
    countryCell.textContent = country;




}

