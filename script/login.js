// login button action

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (phoneNumber === "12" && pinNumber === "1234") {
      window.location.href = "home.html";
      const userName = document.getElementById("user-name").value;
      alert(`Congratulation ${userName.toUpperCase()}! You got 500 TK bonus`);
    } else {
      alert("Login failed. Try again!");
    }

    // reset the form
    document.getElementById("login-form").reset();
  });
