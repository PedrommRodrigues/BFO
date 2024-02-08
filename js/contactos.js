const payAtHome = document.getElementById("payHome");
const payAtHeadquarters = document.getElementById("payHeadquarters");

payAtHome.addEventListener("change", function () {
  if (payAtHome.checked) {
    payAtHeadquarters.checked = false;
  }
});

payAtHeadquarters.addEventListener("change", function () {
  if (payAtHeadquarters.checked) {
    payAtHome.checked = false;
  }
});

// document.getElementById("ammount").addEventListener("input", function () {
//   let value = this.value;

//   value = "€" + value;

//   this.value = value;
// });
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("amount").addEventListener("input", function () {
    // Get the input value
    let value = this.value;

    // Prepend € symbol to the value
    value = "€" + value;

    // Update the input value
    this.value = value;
  });
});
