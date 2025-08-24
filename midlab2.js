document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form submission
  let errorMsg = "";
  
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let zip = document.getElementById("zip").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let donation = document.querySelector("input[name='amount']:checked");

  if(firstName === "" || lastName === "") {
    errorMsg = "First and Last name are required.";
  } 
  else if(!email.endsWith("@gmail.com")) {
    errorMsg = "Email must be a valid Gmail address.";
  } 
  else if(zip === "" || isNaN(zip)) {
    errorMsg = "Zip Code must be a number.";
  } 
  else if(phone === "" || isNaN(phone)) {
    errorMsg = "Phone must be a number.";
  } 
  else if(!donation) {
    errorMsg = "Please select a donation amount.";
  }


  if(errorMsg !== "") {
    document.getElementById("errorMsg").innerText = errorMsg;
  } else {
    document.getElementById("errorMsg").innerText = "";
    alert("Form submitted successfully!");
    this.submit();
  }
});
