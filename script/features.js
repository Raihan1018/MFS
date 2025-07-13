// cash out form show and hide the add money form

document.getElementById("show-cash-out").addEventListener("click", function () {
  document.getElementById("cash-out-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
  document
    .getElementById("show-cash-out")
    .classList.add("bg-green-500", "text-white");
  document
    .getElementById("show-add-money")
    .classList.remove("bg-green-500", "text-white");
  document
    .getElementById("show-transition-history")
    .classList.remove("bg-green-500", "text-white");
  document.getElementById('transition-section').classList.add('hidden')
});

// show add money form and hide the cash out form
document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document
      .getElementById("show-add-money")
      .classList.add("bg-green-500", "text-white");

    document
      .getElementById("show-cash-out")
      .classList.remove("bg-green-500", "text-white");

    document
      .getElementById("show-transition-history")
      .classList.remove("bg-green-500", "text-white");
    document.getElementById('transition-section').classList.add('hidden')
  });

// show show-transition-history
document
  .getElementById("show-transition-history")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document
      .getElementById("show-transition-history")
      .classList.add("bg-green-500", "text-white");
    document
      .getElementById("show-cash-out")
      .classList.remove("bg-green-500", "text-white");
    document
      .getElementById("show-add-money")
      .classList.remove("bg-green-500", "text-white");
    document.getElementById("transition-section").classList.remove("hidden");
  });
