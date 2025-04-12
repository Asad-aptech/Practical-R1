function validateForm() {
    let email = document.getElementById("email").value;
  
    let username = document.getElementById("username").value;
  
    let password = document.getElementById("password").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    let usernamePattern = /^[a-zA-Z0-9]{5,12}$/;
  
    let passwordPattern = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (!usernamePattern.test(username)) {
        alert("Username must be 5-12 characters .");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters .");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}