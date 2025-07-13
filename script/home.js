// add money btn
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get the money to be added
    const addMoneyAmount = parseFloat(
      document.getElementById("input-add-money").value
    );
    const pinNumber = document.getElementById("pin-number").value;

    if (pinNumber === "1234" && addMoneyAmount >= 0) {
      const balance = parseFloat(
        document.getElementById("account-balance").innerText
      );

      const newBalance = balance + addMoneyAmount;

      document.getElementById("account-balance").innerText = newBalance;
      alert(`${addMoneyAmount} TK added your main balance`);

      // add to transition history
      const p = document.createElement("p");
      p.innerText = `Deposit: ${addMoneyAmount}`;
      document.getElementById("transition-container").appendChild(p);
    } else {
      alert("Fail to add money. Please try again");
    }

    // form reset
    document.getElementById("add-money-form").reset();
  });
