// cash out
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = parseFloat(
      document.getElementById("input-cash-out").value
    );
    const cashOutpinNumber =
      document.getElementById("cashout-pin-number").value;

    const balance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    document.getElementById("transition-section").classList.add("hidden");

    if (cashOutpinNumber === "1234" && cashOutAmount <= balance) {
      const newBalance = balance - cashOutAmount;
      document.getElementById("account-balance").innerText = newBalance;

      // transition history add
      const p = document.createElement("p");
      p.innerHTML = `Cash out: ${cashOutAmount}`;
      document.getElementById("transition-container").appendChild(p);
    } else {
      alert("Sorry");
    }

    // form reset
    document.getElementById("cash-out-form").reset();
  });
