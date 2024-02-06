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
