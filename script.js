function calculateAge() {
  let birthdateInput = document.getElementById("birthdateInput").value;
  let birthdate = new Date(birthdateInput);
  
  let today = new Date();
  
  let age = today.getFullYear() - birthdate.getFullYear();
  
  let monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  
  let result = document.getElementById("result");
  result.textContent = "You are " + age + " years old.";
}