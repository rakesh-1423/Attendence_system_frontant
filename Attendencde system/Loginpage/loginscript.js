document.getElementById("loginForm").onsubmit = function() {
  var userType = document.getElementById("userType").value;
  var userId = document.getElementById("userId").value;
  var password = document.getElementById("password").value;

  if (userType === '' || userId === '' || password === '') {
      alert("Please fill out all fields");
      return false;
  }
  return true;
}
