// Query Selector for label change
const actualBtn = document.getElementById("excel");
const fileChosen = document.getElementById("file-chosen");

actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});
